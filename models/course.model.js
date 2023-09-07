import { Schema, model } from "mongoose";

const courseSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength: [8, 'Title should be at least 8 characters'],
        maxLength: [60, 'Title should be less than 60 charaters'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [8, 'Description should be at least 8 characters'],
        maxLength: [200, 'Description should be less than 200 charaters'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
    },
    thumbail: {
        public_id: {
            type: String,
            required: true
        },
        secure_url: {
            type: String,
            required: true
        }
    },
    lectures: [{
        title: String,
        description: String,
        lecture: {
            public_id: {
                type: String,
                required: true
            },
            secure_url: {
                type: String,
                required: true
            }
        }
    }],
    numbersOfLectures: {
        type: Number,
        default: 0

    },
    createdBy: {
        type: String
    }

}, {
    timeseries: true
})

const Course = new model("Course", courseSchema)

export default Course