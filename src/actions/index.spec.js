import { saveComment } from './index';
import { SAVE_COMMENT } from './types';

describe('actionCreators', () => {

  it('should create saveComment properly', () => {
    // given
    const payload = 'comment';

    // when
    const action = saveComment(payload);

    // then
    expect(action).toEqual({
      type: SAVE_COMMENT,
      payload
    });
  });
});