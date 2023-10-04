// create-index

import * as React from "react";

export {default as FeedScreen} from "./_feed";

export const ArticleScreen = React.lazy(() => import("./article"));

export const UserScreen = React.lazy(() => import("./user"));
