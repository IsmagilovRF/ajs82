import ErrorRepository from '../errorRepository';

test('Add error', () => {
  const received = new ErrorRepository();
  received.errorSet('123', 'someError');
  expect(received.translate('123')).toBe('someError');
});

test('Unknown error', () => {
  const received = new ErrorRepository();
  received.errorSet('error', 'error');
  expect(received.translate('321')).toBe('Unknown error');
});
