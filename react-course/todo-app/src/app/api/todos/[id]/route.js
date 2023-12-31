import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Todo from "../../../../../models/todo";
import { useDispatch } from "react-redux";
import { updateCompletedValue } from "../../../../../features/todosData/todosData";

export async function PUT(request, { params }) {
  const { id } = params;
  const { content, completed } = await request.json();

  await connectMongoDB();

  const response = await Todo.findByIdAndUpdate(id, { content, completed });

  return NextResponse.json(response, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;

  await connectMongoDB();

  const todo = await Todo.findById(id);

  return NextResponse.json({ todo }, { status: 200 });
}
