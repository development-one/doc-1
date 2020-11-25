module.exports = {
  title: "飞跃大山与大海",
  description: "无敌的寂寞",
  lastUpdated: '更新时间',
  head: [
    ['link', { rel: 'icon', href: '/app.ico' }]
  ],
  themeConfig: {
    logo: '/assets/img/app.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/foo/' },
    ],
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'one', /* /bar/three.html */
        'two'   /* /bar/four.html */
      ],

    }
  }
}