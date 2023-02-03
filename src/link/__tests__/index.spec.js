import Link from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test link plugin', () => {
  const app = createApp({}).use(Link)
  expect(app.component(Link.name)).toBeTruthy()
})
