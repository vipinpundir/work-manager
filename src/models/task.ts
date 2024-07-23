import mongoose from "mongoose"

const TaskSachema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    addedDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ["pending", "complete"],
        default: "pending"
    },
    userId: {
        type: mongoose.Types.ObjectId,
        require: true
    }


})

export const Task = 
    mongoose.models.tasks || mongoose.model("tasks", TaskSachema)