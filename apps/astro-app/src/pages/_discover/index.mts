// create-index

import * as React from "react";

export {default as PopularScreen} from "./_popular";

export const CategoriesScreen = React.lazy(() => import("./categories"));
