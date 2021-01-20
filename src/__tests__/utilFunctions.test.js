import {shortenText} from '../../src/utils/functions';
import { wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from './__data__/testData';



test('shortenText should NOT alter text < 100 characters', () => {
  expect(shortenText(shortText)).toHaveLength(29)
});

test('shortenText SHOULD shorten text > 100 characters, leaving three trailing periods', () => {
  const shortened = shortenText(longText)
  expect(shortened).not.toHaveLength(longText.length)
  expect(shortened.slice(-3)).toBe('...')
});

test('wordCount should accurately return a count of words in a sentence', () => {
  expect(wordCount(posts)).toBe(233)
});

test('attachUserName should accurately display the full name attached to a post', () => {
  const newPosts = attachUserName(users, posts)
  expect(newPosts[0]).toHaveProperty('displayName')
});

test('attachUserName should remove posts without a corresponding user', () => {
  const newPosts = attachUserName(users, posts)
  const deletedPost = posts[5]
  expect(newPosts).not.toContainEqual(deletedPost)
});
