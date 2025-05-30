import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import Task from "../models/task";
import { connectDB } from "../utils/mongoose";

export async function CreateTask(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  await connectDB();

  const task = new Task({
    id: "first",
    title: "title",
    completed: true,
  });

  await task.save();

  return {
    body: JSON.stringify(task),
  };
}

app.http("CreateTask", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: CreateTask,
});
