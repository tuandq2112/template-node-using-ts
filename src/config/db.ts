import moment from 'moment';
const ignoreFields = ['__v', 'created_at', 'updated_at', '_id', 'password'];
export const DB_OPTIONS = {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  virtuals: {
    createdAt: {
      get() {
        return moment(this.created_at).format();
      },
    },
    updatedAt: {
      get() {
        return moment(this.updated_at).format();
      },
    },
  },
  toJSON: {
    virtuals: true,
    transform: function (doc, ret, game) {
      for (const key of ignoreFields) {
        delete ret[key];
      }
    },
  },
  toObject: {
    virtuals: true,
    transform: function (doc, ret, game) {
      for (const key of ignoreFields) {
        delete ret[key];
      }
    },
  },
};
