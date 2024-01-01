import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Todo from "../../../../models/todo";

export async function POST(request) {
  const { content, completed } = await request.json();
  await connectMongoDB();

  const todo = {
    content,
    completed,
    resolved: null,
  };
  console.log(todo);

  const response = await Todo.create(todo);
  return NextResponse.json({ response }, { status: 201 });
}

export async function GET(request) {
  await connectMongoDB();

  const todos = await Todo.find();
  return NextResponse.json({ todos }, { status: 200 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  await connectMongoDB();
  await Todo.findByIdAndDelete(id);

  return NextResponse.json({ message: "Todo Deleted" }, { status: 200 });
}
