import { translateMessage } from '../errorMessages';

describe('translateMessage', () => {
  it('should return undefined for an unknown error message', () => {
    const errorMessage = 'This is an unknown error message';

    expect(translateMessage(errorMessage)).toBeUndefined();
  });

  it('should handle edge cases', () => {
    const errorMessage = '';

    expect(translateMessage(errorMessage)).toBeUndefined();
  });
});
