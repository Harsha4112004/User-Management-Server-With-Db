import mongoose,{Schema} from "mongoose";

const username = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
}, { timestamps: true });

export const User = mongoose.model('User', username);