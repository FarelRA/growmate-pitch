import type { RouterOptions } from 'vue-router'

export default <Partial<RouterOptions>>{
  scrollBehavior(to, _from, savedPosition) {
    // Our `#/n` slide hashes are not element ids. Never attempt to scroll to them.
    if (to.hash && /^#\/\d+$/.test(to.hash)) return false
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
}
