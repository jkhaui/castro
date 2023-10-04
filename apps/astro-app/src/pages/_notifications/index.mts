// create-index

import * as React from "react";

export {default as AllScreen} from "./_all";

export const AccountScreen = React.lazy(() => import("./account"));
export const SubscriptionScreen = React.lazy(() => import("./subscription"));
