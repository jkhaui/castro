export const manifest = {
    name: "Castro",
    short_name: "Castro",
    description: "Create cross-platform apps with Castro",
    theme_color: "#080c15",
    background_color: "#080c15",
    display: "standalone",
    orientation: "portrait",
    icons: [
        {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
        },
        {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
        },
        {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
        },
        {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
        }
    ]
};