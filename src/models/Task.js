import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    email: {
      type: String,
    },
    fecha: {
      type: Date,
      default: () => Date.now(),
    },
    huevos: {
      blanco: {
        tercera: {
          type: Number,
          trim: true,
          default: 0,
        },
        segunda: {
          type: Number,
          trim: true,
          default: 0,
        },
        primera: {
          type: Number,
          trim: true,
          default: 0,
        },
        extra: {
          type: Number,
          trim: true,
          default: 0,
        },
        super: {
          type: Number,
          trim: true,
          default: 0,
        },
        jumbo: {
          type: Number,
          trim: true,
          default: 0,
        },
      },
      color: {
        tercera: {
          type: Number,
          trim: true,
          default: 0,
        },
        segunda: {
          type: Number,
          trim: true,
          default: 0,
        },
        primera: {
          type: Number,
          trim: true,
          default: 0,
        },
        extra: {
          type: Number,
          trim: true,
          default: 0,
        },
        super: {
          type: Number,
          trim: true,
          default: 0,
        },
        jumbo: {
          type: Number,
          trim: true,
          default: 0,
        },
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Task", taskSchema);
