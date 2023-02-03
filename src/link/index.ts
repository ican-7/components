// Component entry, the folder where the file exists will be exposed to the user
import Link from './Link.vue'
import type { App } from 'vue'

Link.install = function(app: App) {
  app.component(Link.name, Link)
}

export const _LinkComponent = Link

export default Link
