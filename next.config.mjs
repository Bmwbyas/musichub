import {createCA, createCert} from "mkcert";
import {merge} from "webpack-merge";

/** @type {import('next').NextConfig} */

const ca = await createCA({
    organization: "Hello CA",
    countryCode: "NP",
    state: "Bagmati",
    locality: "Kathmandu",
    validity: 365
});

const cert = await createCert({
    ca: {key: ca.key, cert: ca.cert},
    domains: ["127.0.0.1", "localhost"],
    validity: 365
});

export default {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        )
        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i

        return merge(config, {
            module: {
                rules: [{
                    ...fileLoaderRule,
                    test: /\.svg$/i,
                    resourceQuery: /url/, // *.svg?url
                },
                    // Convert all other *.svg imports to React components
                    {
                        test: /\.svg$/i,
                        issuer: fileLoaderRule.issuer,
                        resourceQuery: {not: [...fileLoaderRule.resourceQuery.not, /url/]}, // exclude if *.svg?url
                        use: ['@svgr/webpack'],
                    },
                ],
            },
            devServer: {
                https: {key: cert.key, cert: cert.cert}
            }

        })

    },


}

