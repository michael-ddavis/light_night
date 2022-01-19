// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, Blog, Team, WorshipNight } = initSchema(schema);

export {
  Comment,
  Blog,
  Team,
  WorshipNight
};