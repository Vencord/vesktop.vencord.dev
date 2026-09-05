// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
    site: "https://vesktop.dev",

    integrations: [
        starlight({
            plugins: [starlightLinksValidator()],

            title: "Vesktop",
            description: "Vesktop is a custom desktop client for Discord",
            logo: {
                src: "./src/assets/vesktop.svg"
            },

            social: [
                { icon: "github", label: "GitHub", href: "https://github.com/Vencord/Vesktop" },
                { icon: "discord", label: "Discord", href: "https://vencord.dev/discord" }
            ],

            editLink: {
                baseUrl: "https://github.com/Vencord/vesktop.dev/edit/main/"
            },

            lastUpdated: true,
            pagination: false,

            sidebar: [
                {
                    label: "Installing",
                    items: [
                        { label: "Windows", slug: "install/windows" },
                        { label: "macOS", slug: "install/mac" },
                        { label: "Linux", slug: "install/linux" }
                    ]
                },
                {
                    label: "Wiki",
                    items: [
                        { label: "Overview", slug: "wiki" },
                        {
                            label: "Linux",
                            items: [{ autogenerate: { directory: "wiki/linux" } }]
                        }
                    ]
                }
            ]
        })
    ]
});
