// create-index

import * as React from "react";

export {default as DiscoverScreen} from "./page.js"
// export const DiscoverScreen = React.lazy(() => import("./page.js"));
export const RecommendationsScreen = React.lazy(() => import("./recommendations.js"));
export const CategoriesScreen = React.lazy(() => import("./categories.js"));
export const TrendingScreen = React.lazy(() => import("./trending.js"));
// import { default as DiscoverScreen}from "./page"
// import {default as ForYouScreen} from "./for-you"
// import {default as CategoriesScreen} from "./categories";
//
// export {
//     DiscoverScreen,ForYouScreen,CategoriesScreen
// }