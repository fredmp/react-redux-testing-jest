import { addComment } from '../index';
import { ADD_COMMENT } from '../types';

describe('Add comment', () => {
  let action;
  beforeEach(() => {
    action = addComment('Comment');
  });
  it('has the correct type', () => {
    expect(action.type).toEqual(ADD_COMMENT);
  });

  it('has the correct payload', () => {
    expect(action.payload).toEqual('Comment');
  });
});
