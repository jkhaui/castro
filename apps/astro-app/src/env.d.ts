/// <reference types="astro/client" />

declare namespace App {
    interface ImportMetaEnv {
        readonly SUPABASE_URL: string
        readonly SUPABASE_ANON_KEY: string
    }

    interface ImportMeta {
        readonly env: ImportMetaEnv
    }

    interface Locals {
        isIos: boolean;
        isDesktop: boolean;
        theme: string;
        isDarkMode: boolean;
    }
}
