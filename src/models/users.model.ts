import BaseSchema from '@/common/schema/BaseSchema';
import { User } from '@/interfaces/users.interface';
import { extendSchema } from '@/utils/db';
import { Document, Schema, model } from 'mongoose';
const UserSchema: Schema = extendSchema(BaseSchema, {
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const UserModel = model<User & Document>('user', UserSchema);

export default UserModel;
