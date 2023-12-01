// create-index

import * as React from "react";

export {default as HomeScreen} from "./page.js";

export const ArticleScreen = React.lazy(() => import("./article.js"));

export const UserScreen = React.lazy(() => import("./user.js"));
