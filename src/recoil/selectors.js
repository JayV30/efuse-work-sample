import { selector } from "recoil";
import { currentUser, posts, comments } from './atoms';
import { v4 as uuidv4 } from 'uuid';
import { DateTime } from "luxon";

export const postsWithComments = selector({
  key: 'postsWithComments',
  get: ({get}) => {
    const postList = get(posts);
    const commentList = get(comments);

    const postToReturn = postList.map(post => {
      let commentObj = commentList.find(commentItem => commentItem.postId === post.id);
      return {
        ...post,
        comments: commentObj && commentObj.comments ? commentObj.comments : []
      }
    });

    return postToReturn;
  }
});

export const newPost = selector({
  key: 'newPost',
  set: ({ get, set }, newValue) => {

    const user = get(currentUser);

    set(posts, (lastPosts) => {
      return [
        {
          id: uuidv4(),
          createdAt: DateTime.now().toISO(),
          content: newValue,
          likes: [],
          user: user
        },
        ...lastPosts
      ]
    });
  }
});

export const postLikes = selector({
  key: 'postLikes',
  set: ({ get, set }, postId) => {
    const user = get(currentUser);

    set(posts, (lastPosts) => {
      const newPosts = lastPosts.map(post => {
        if (post.id !== postId) return post;
        const likes = [...post.likes];
        const foundLikeIdx = likes.findIndex(like => like === user.id);
        foundLikeIdx < 0 ? likes.push(user.id) : likes.splice(foundLikeIdx, 1);
        return {
          ...post,
          likes: likes
        }
      });
      return newPosts;
    });

  }
});

export const newComment = selector({
  key: 'newComment',
  set: ({ get, set}, newValue) => {

    const user = get(currentUser);

    set(comments, (lastComments) => {
      const newComments = [...lastComments];
      const foundCommentIdx = newComments.findIndex(item => item.postId === newValue.postId);
      const commentToAdd = {
        id: uuidv4(),
        createdAt: DateTime.now().toISO(),
        content: newValue.content,
        likes: [],
        user: user
      };

      if (foundCommentIdx > -1) {
        newComments[foundCommentIdx] = {
          postId: newComments[foundCommentIdx].postId,
          comments: [ commentToAdd, ...newComments[foundCommentIdx].comments ]
        }
      } else {
        newComments.push({
          postId: newValue.postId,
          comments: [
            commentToAdd
          ]
        });
      }

      return newComments;
    });
  }
});

export const updateComment = selector({
  key: 'updateComment',
  set: ({ get, set }, updateValue) => {

    const user = get(currentUser);

    set(comments, (lastComments) => {
      const newComments = [...lastComments];
      const foundCommentIdx = newComments.findIndex(item => item.postId === updateValue.postId);

      if (foundCommentIdx > -1) {
        newComments[foundCommentIdx] = {
          postId: newComments[foundCommentIdx].postId,
          comments: newComments[foundCommentIdx].comments.map(comment => {
            if (comment.id === updateValue.commentId && user.id === comment.user.id) {
              return {
                ...comment,
                content: updateValue.content
              }
            }
            return comment
          })
        }
      }

      return newComments;
    });
  }
});

export const deleteComment = selector({
  key: 'deleteComment',
  set: ({ get, set }, updateValue) => {

    const user = get(currentUser);

    set(comments, (lastComments) => {
      const newComments = [...lastComments];
      const foundCommentIdx = newComments.findIndex(item => item.postId === updateValue.postId);

      if (foundCommentIdx > -1) {
        newComments[foundCommentIdx] = {
          postId: newComments[foundCommentIdx].postId,
          comments: newComments[foundCommentIdx].comments.filter(comment => !(comment.id === updateValue.commentId && user.id === comment.user.id))
        }
      }

      return newComments;
    });
  }
});

export const commentLikes = selector({
  key: 'commentLikes',
  set: ({ get, set }, value) => {
    console.log(value)
    const user = get(currentUser);

    set(comments, (lastComments) => {
      const newComments = [...lastComments];
      const foundCommentIdx = newComments.findIndex(item => item.postId === value.postId);

      if (foundCommentIdx > -1) {
        newComments[foundCommentIdx] = {
          postId: newComments[foundCommentIdx].postId,
          comments: newComments[foundCommentIdx].comments.map(comment => {
            if (comment.id === value.commentId) {
              const likes = [...comment.likes];
              const foundLikeIdx = likes.findIndex(like => like === user.id);
              foundLikeIdx < 0 ? likes.push(user.id) : likes.splice(foundLikeIdx, 1);
              return {
                ...comment,
                likes: likes
              }
            }
            return comment
          })
        }
      }

      return newComments;
    });
  }
});
