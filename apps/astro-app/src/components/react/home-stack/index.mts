// create-index

import * as React from "react";

export {default as HomeScreen} from "./home-screen";

export const ArticleScreenAsync = React.lazy(() => import("./article-screen"));
export const FeedScreenAsync = React.lazy(() => import("./feed-screen"));
export const UserScreenAsync = React.lazy(() => import("./user-screen"));
