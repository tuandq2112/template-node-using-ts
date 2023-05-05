import { DB_OPTIONS } from '@/config/db';
import { Schema } from 'mongoose';

export const extendSchema = (schema: Schema, definition: any) => {
  return new Schema(Object.assign({}, schema.obj, definition), DB_OPTIONS);
};
