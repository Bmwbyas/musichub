import { merge } from 'webpack-merge';

/** @type {import('next').NextConfig} */

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return merge(config, {
      module: {
        rules: [
          {
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/, // *.svg?url
          },
          // Convert all other *.svg imports to React components
          {
            test: /\.svg$/i,
            issuer: fileLoaderRule.issuer,
            resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
            use: ['@svgr/webpack'],
          },
        ],
      },
    });
  },
};
