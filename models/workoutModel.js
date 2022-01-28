
const mongoose = require("mongoose");

// connect schema to mongoose
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // set the date of the workout
    day: {
        type: Date,
        default: Date.now
    },
    // set workout details
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "What type is this workout?"
            },
            name: {
                type: String,
                trim: true,
                required: "What is the name of this workout?"
            },

            // regex expressions to set parameters of input field
            duration: {
                type: Number,
                required: "Enter the duration of this workout in minutes",
                match: [/^[0-9][A-Za-z0-9 -]*$/, "Enter duration of workout"]
            },

            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout;