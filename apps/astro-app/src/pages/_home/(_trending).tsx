import * as React from "react";
import {Card} from "konsta/react";
import {AppRoutes} from "@/utils/enums";
import {Link} from "@castro/ui-components/src/index.mjs";
import {SegmentSingleView} from "@castro/ui-components/src/base/segment-single-view";

const TrendingSegmentScreen = () => {
    return (
        <SegmentSingleView className={"bg-amber-200"}>
            {/*<Card title={`${AppRoutes.FEED} > ${AppRoutes.TRENDING}`}>*/}
            {/*    <Link to={{screen: AppRoutes.ARTICLE}}>View an article</Link>*/}
            {/*</Card>*/}
        </SegmentSingleView>
    );
}

export default TrendingSegmentScreen;
