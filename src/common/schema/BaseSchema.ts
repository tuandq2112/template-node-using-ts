import { Schema } from 'mongoose';

const BaseSchema = new Schema({
  createdBy: { type: Number, required: false },
  updatedBy: { type: Number, required: false },
});

export default BaseSchema;
