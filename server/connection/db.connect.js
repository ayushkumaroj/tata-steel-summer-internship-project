import mongoose from 'mongoose';

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection failed:", err.message);
    });
  } catch (error) {
    console.error("Initial connection error:", error.message);
    process.exit(1);
  }
};
