import commentsReducer from './comments';
import { SAVE_COMMENT } from '../actions/types';

describe('commentsReducer', () => {

  it('should save comment properly', () => {
    // given
    const action = {
      type: SAVE_COMMENT,
      payload: 'comment'
    };

    // when
    const result = commentsReducer([], action);

    // then
    expect(result).toEqual(['comment']);
  });


  it('should handle unknown type', () => {
    // given
    const action = {};

    // when
    const result = commentsReducer([], action);

    // then
    expect(result).toEqual([]);
  });
});