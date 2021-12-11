import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    huevos: {
      blanco:{
        tercera:{
          type: Integer,
          required: true,
          trim: true,
          default:0,
        },
        segunda:{
          type: Integer,
          required: true,
          trim: true,
          default:0,
        },
        primera:{
          type: Integer,
          required: true,
          trim: true,
          default:0,
        },
        extra:{
          type: Integer,
          required: true,
          trim: true,
          default:0,
        },
        super:{
          type: Integer,
          required: true,
          trim: true,
          default:0,
        },
        jumbo:{
          type: Integer,
          required: true,
          trim: true,
          default:0,
        },
      },
      color:{
        tercera:{
          type: Integer,
          required: true,
          trim: true,
          default:0,
        },
        segunda:{
          type: Integer,
          required: true,
          trim: true,
          default:0,
        },
        primera:{
          type: Integer,
          required: true,
          trim: true,
          default:0,
        },
        extra:{
          type: Integer,
          required: true,
          trim: true,
          default:0,
        },
        super:{
          type: Integer,
          required: true,
          trim: true,
          default:0,
        },
        jumbo:{
          type: Integer,
          required: true,
          trim: true,
          default:0,
        },
      },

     
    },
    fecha: {
      type: Date,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Task", taskSchema);
