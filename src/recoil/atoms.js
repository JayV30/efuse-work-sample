import { atom } from "recoil";
import { demoUsers } from 'helpers';

// USER:
// {
//   id: uuid,
//   name: string,
//   role: string,
//   thumbImg: string filename in public/userMedia dir,
//   location: {
//     state: string,
//     country: string
//   }
// }
export const currentUser = atom({
  key: 'currentUser',
  default: demoUsers[0]
});

// POSTS:
// {
//   id: uuid,
//   createdAt: isoDate string,
//   content: string,
//   likes: array of user ids,
//   user: userObject
// }
export const posts = atom({
  key: 'userPosts',
  default: []
});

// COMMENTS:
// {
//   postId: uuid,
//   comments: [
//     {
//       id: uuid,
//       createdAt: isoDate string,
//       content: string,
//       likes: array of user ids,
//       user: userObject
//     }
//   ]
// }
export const comments = atom({
  key: 'postComments',
  default: []
});