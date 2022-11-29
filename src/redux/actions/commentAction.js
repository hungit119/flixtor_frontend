import {
  SET_COMMENTS_OF_FILM,
  SET_NEW_COMMENT,
  SET_NEW_RECENT_COMMENT,
} from "../const";

export const setCommentsOfFilm = (comments) => ({
  type: SET_COMMENTS_OF_FILM,
  payload: comments,
});
export const setNewComment = (comment) => ({
  type: SET_NEW_COMMENT,
  payload: comment,
});
export const setNewRecentComment = (recentComment) => ({
  type: SET_NEW_RECENT_COMMENT,
  payload: recentComment,
});
