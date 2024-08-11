import mongoose, { Schema, model, Types } from 'mongoose';

interface IUser {
  email: string;
  password: string;
  diskSpace: number;
  usedSpace: number;
  avatar?: string;
  files: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  diskSpace: { type: Number, default: 1024 ** 3 * 10 },
  usedSpace: { type: Number, default: 0 },
  avatar: { type: String },
  files: [{ type: Types.ObjectId, ref: 'File' }],
});

export const User = model<IUser>('User', UserSchema);