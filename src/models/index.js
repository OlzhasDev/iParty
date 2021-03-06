// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, User, Party } = initSchema(schema);

export {
  Comment,
  User,
  Party
};