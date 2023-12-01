// create-index

import * as React from "react";

export {default as SettingsScreen} from "./page.js";
export const EditScreen = React.lazy(() => import("./edit.js"));
