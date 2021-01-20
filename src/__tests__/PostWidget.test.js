import React from 'react';
import {render} from '@testing-library/react';
import PostWidget from '../components/PostWidget';
import {shortenText} from '../utils/functions';
import {posts} from '../__tests__/__data__/testData';
import { MemoryRouter } from 'react-router-dom';

const longPost = posts[0]
const post = posts[1]

it('Accurately renders a post', () => {
  const {container} = render(
    <MemoryRouter>
      <PostWidget {...post} />
    </MemoryRouter>
  )
  expect(container.textContent).toContain(post.text);
});
it('Accurately shortens displayed text when expanded is false', () => {
  const {container} = render(
    <MemoryRouter>
      <PostWidget {...longPost}/>
    </MemoryRouter>
  )
  expect(container.textContent).toContain(shortenText(longPost.text))
});
it('Accurately displays full text when expanded is true', () => {
  const {container} = render(
    <MemoryRouter>
      <PostWidget expanded={true} {...longPost} />
    </MemoryRouter>
  )
  expect(container.textContent).toContain(longPost.text)
});