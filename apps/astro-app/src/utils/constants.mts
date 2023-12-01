export const DOCUMENT_TITLE_TEMPLATE_BASE = "Castro";
export const DOCUMENT_TITLE_DELIMITER = " •";

export const META_DESCRIPTION = "Create cross-platform apps with Castro";

export const TEXT_CONTROL_COLOR_CLASSNAME = 'dark:text-zinc-200';
export const ICON_BADGE_OVERRIDE_CLASSNAME = "!min-h-2 !min-w-2 !h-2 !w-2 !-top-0.25 !-end-1 bg-red-500";
export const ANCHOR_TOP_EL_ID = "anchor-top";

export const DARK_MODE_COOKIE_KEY = "dark-mode";

export const APP_ROUTE_MAP = {
    'home': {
        'user': 'user',
        'article': 'article'
    },
    'discover': {
        'categories': 'categories',
        'recommendations': 'recommendations'
    },
    'notifications': {
        'account': 'account',
        'subscriptions': 'subscriptions'
    },
    'settings': {
        'edit': 'edit',
        'settings': {
            'privacy': 'privacy',
            'premium': {
                'upgrade': 'upgrade'
            }
        }
    }
}

export const BASE_URL = "https://castro-develop.vercel.app";