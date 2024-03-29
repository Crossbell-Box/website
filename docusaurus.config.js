// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const webpack = require("webpack");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Crossbell",
  tagline: "Own Your Social Activities",
  url: "https://crossbell.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Crossbell-Box", // Usually your GitHub org/user name.
  projectName: "Crossbell-Box.github.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Crossbell-Box/Crossbell-Box.github.io/tree/main/docs/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Crossbell-Box/Crossbell-Box.github.io/tree/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Crossbell",
        logo: {
          alt: "Crossbell Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://scan.crossbell.io",
            label: "Scan",
            position: "right",
          },
          {
            href: "https://faucet.crossbell.io",
            label: "Faucet",
            position: "right",
          },
          {
            href: "https://github.com/Crossbell-Box/Crossbell-Contracts",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://twitter.com/_Crossbell",
            label: "Twitter",
            position: "right",
          },
          {
            href: "https://discord.gg/ecpfdHHw",
            label: "Discord",
            position: "right",
          },
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/Crossbell-Box",
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Crossbell`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
    }),

  plugins: [
    async function tailwindcss(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          return postcssOptions;
        },
      };
    },
    function (context, options) {
      return {
        name: "custom-docusaurus-plugin",
        // eslint-disable-next-line
        configureWebpack(config, isServer, utils) {
          return {
            resolve: {
              fallback: {
                stream: require.resolve("stream-browserify"),
                assert: require.resolve("assert/"),
                util: require.resolve("util/"),
                http: require.resolve("stream-http"),
                https: require.resolve("https-browserify"),
                os: require.resolve("os-browserify/browser"),
                url: require.resolve("url/"),
                process: require.resolve("process"),
              },
            },
            plugins: [
              new webpack.ProvidePlugin({ process: "process/browser" }),
              new webpack.ProvidePlugin({ Buffer: ["buffer", "Buffer"] }),
            ],
          };
        },
      };
    },
  ],
};

module.exports = config;
