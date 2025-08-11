import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const connectDb = async () => {
    try {
        const con = await mongoose.connect(`${process.env.DB_URL}`);
        console.log(`DB connected successfully, host: ${con.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDb;