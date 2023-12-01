export enum QualifiedScreenNames {
    ROOT = "/",
    HOME = "home",
    ARTICLE = "article",
    TRENDING = "trending",
    FOLLOWING = "following",
    USER = "user",
    FEED = "feed",
    DISCOVER = "discover",
    RECOMMENDATIONS = "recommendations",
    CATEGORIES = "categories",
    POPULAR = "popular",
    NOTIFICATIONS = "notifications",
    PROFILE = "profile",
    TIMELINE = "timeline",
    EDIT = "edit",
    SETTINGS = "settings",
    ACCOUNT = "account",
    SUBSCRIPTION = "subscription",
    NOT_FOUND = "404",
    OFFLINE = "offline"
}

export enum RuntimeEnvironment {
    DESKTOP = "desktop",
    DESKTOP_NATIVE = "desktop-native",
    IOS_NATIVE = "ios-native",
    IOS_PWA = "ios-pwa",
    IOS_WEB = "ios-web",
    ANDROID_NATIVE = "android-native",
    ANDROID_PWA = "android-pwa",
    ANDROID_WEB = "android-web"
}

export enum PlatformTheme {
    IOS = "ios",
    MATERIAL = "material",
    MD_HTML_ROOT_ONLY = "md",
    DESKTOP_CUSTOM = "desktop-custom"
}

export enum SafeAreaStrategy {
    CSS = "css",
    CONTEXT = "context",
    NONE = "none"
}
