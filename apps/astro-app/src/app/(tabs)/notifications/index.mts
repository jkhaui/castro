// create-index

import * as React from "react";

export {default as NotificationsScreen} from "./page.js";

export const AccountScreen = React.lazy(() => import("./account.js"));
export const SubscriptionScreen = React.lazy(() => import("./subscription.js"));
