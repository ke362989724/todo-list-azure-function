import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.model("Task", taskSchema);
