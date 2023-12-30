import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Todo from "../../../../../models/todo";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newContent: content, newCompleted: completed } = await request.json();

  await connectMongoDB();

  await Todo.findByIdAndUpdate(id, { content, completed });

  return NextResponse.json({ message: "Todo Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;

  await connectMongoDB();

  const todo = await Todo.findById(id);

  return NextResponse.json({ todo }, { status: 200 });
}
