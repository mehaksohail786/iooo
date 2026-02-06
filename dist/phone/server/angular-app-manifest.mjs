
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://mehaksohail786.github.io/iooo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/iooo"
  },
  {
    "renderMode": 2,
    "route": "/iooo/about"
  },
  {
    "renderMode": 2,
    "route": "/iooo/gallery"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 892, hash: '4ffcc29587f96aa9a4861837b38d333d4b7c902a3536f0382d1cc9906c280b51', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1405, hash: '75c8e2ec78a35d70a140a753862365d35a07fe0b0d2addc324f8ff82cb7bec10', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 6175, hash: 'b5c4caa807188ee0e6aaadca9eaeaff25d8fd96a6d5e4896693156fcb3484589', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 6608, hash: 'ff3750ad95b39a0efb5cb6992fabdd1f35945c4af680d95e0f638c37a812d625', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6806, hash: '8aba274228715a993f68ccc11a6534cfe934fe208cb2cf93d7ca060490ca1a05', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
