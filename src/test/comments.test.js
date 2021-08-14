import getCommentsCount from '../utils';

const mockComments = [
  {
    item_id: '2',
    username: 'Mwimwi',
    comment: 'Some comment here',
  },
];

test('Should return total number of comments', () => {
  expect(getCommentsCount(mockComments)).toBe(mockComments.length);
});