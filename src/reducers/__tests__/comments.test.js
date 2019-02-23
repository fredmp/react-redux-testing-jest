import comments from '../comments';
import { ADD_COMMENT } from '../../actions/types';

it('process actions with type ADD_COMMENT', () => {
  const action = { type: ADD_COMMENT, payload: 'Comment' };
  const newState = comments([], action);

  expect(newState).toEqual(['Comment']);
});

it('ignores actions with type other than ADD_COMMENT', () => {
  const newState = comments(['Some Comment'], {});

  expect(newState).toEqual(['Some Comment']);
});
