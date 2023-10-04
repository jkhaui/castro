import * as React from "react";
import {Link, SegmentSingleView} from "@castro/ui-components/src/index.mjs";
import {Card} from "konsta/react";
import {AppRoutes} from "@/utils/enums";

const FollowingSegmentScreen = () => {
    return (
        <SegmentSingleView className="bg-fuchsia-600">
            <Card title={`${AppRoutes.FEED} > ${AppRoutes.TRENDING}`}>
                <Link to={{screen: AppRoutes.ARTICLE}}>View an article</Link>
            </Card>
        </SegmentSingleView>
    );
}

export default FollowingSegmentScreen;
