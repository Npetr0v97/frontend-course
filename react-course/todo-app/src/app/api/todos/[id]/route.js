import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Todo from "../../../../../models/todo";

export async function PUT(request, { params }) {
  const { id } = params;

  const { content, completed, resolved } = await request.json();
  const newTodo = { content, completed, resolved };
  await connectMongoDB();

  const response = await Todo.findByIdAndUpdate(id, newTodo, { new: true });

  return NextResponse.json(response, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;

  await connectMongoDB();

  const todo = await Todo.findById(id);

  return NextResponse.json({ todo }, { status: 200 });
}
