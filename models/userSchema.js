import mongoose from "mongoose"

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "Admin" },
  },
  { timestamps: true }
);

userSchema.index({ username: 1 }, { unique: true });

export default mongoose.model("User", userSchema);