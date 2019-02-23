/* eslint-disable import/prefer-default-export */
import Axios from 'axios';
import { ADD_COMMENT, FETCH_COMMENTS } from './types';

export const addComment = comment => {
  return { type: ADD_COMMENT, payload: comment };
};

export const fetchComments = () => {
  const response = Axios.get('http://jsonplaceholder.typicode.com/comments');
  return { type: FETCH_COMMENTS, payload: response };
};
