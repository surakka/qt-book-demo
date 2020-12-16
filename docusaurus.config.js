module.exports = {
  title: 'Qt for MCUs',
  tagline: 'The tagline of my site',
  url: 'https://surakka.github.io/qt-book-demo/',
  baseUrl: '/qt-book-demo/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'surakka', // Usually your GitHub org/user name.
  projectName: 'qt-book-demo', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap',
  ],
  themeConfig: {
    prism: {
      additionalLanguages: ['qml'],
    },
    navbar: { 
      title: 'QtBook',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/qt',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/qt',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/qtproject',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/qt',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Qt Company. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/surakka/qt-book-demo/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/surakka/qt-book-demo/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
