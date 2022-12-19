import { Schema, model } from 'mongoose';

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, require: true },
    content: { type: String, require: true },
    author: { type: String, require: true },
  },
  {
    timestamps: { 
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    }
  },
);

const Blog = model<IBlog>('Blog', blogSchema);

export {
  Blog,
};
