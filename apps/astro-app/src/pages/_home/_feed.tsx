import {EllipsisHorizontalIcon, PreloaderOverlay, View} from "@castro/ui-components";
import {AppRoutes} from "@/utils/enums";
import * as React from "react";
import {SegmentedTabsView} from "@/pages/__internals/segmented-tabs-view";
import {SceneMap} from "react-native-tab-view";
import {capitalize} from "@/utils/utils";

const TrendingSegment = React.lazy(() => import("./(_trending)"))
const FollowingSegment = React.lazy(() => import("./(following)"))

const renderScene = SceneMap({
    [AppRoutes.TRENDING]: TrendingSegment,
    [AppRoutes.FOLLOWING]: FollowingSegment
})

const routes = Object.freeze([
    {key: AppRoutes.TRENDING, title: capitalize(AppRoutes.TRENDING)},
    {key: AppRoutes.FOLLOWING, title: capitalize(AppRoutes.FOLLOWING)}
])

const FeedScreen = ({navigation, route}) => {
    const handleClick = (segment) => {
        navigation.setParams({segment})
    }

    const [index, setIndex] = React.useState(0);

    return (
        <View animate={false} addHeaderOffset={false}>
            <React.Suspense fallback={<PreloaderOverlay/>}>
                <SegmentedTabsView
                    title={capitalize(AppRoutes.FEED)}
                    navigationState={{index, routes}}
                    onIndexChange={setIndex}
                    handleClick={handleClick}
                    renderScene={renderScene}
                    renderLazyPlaceholder={() => <PreloaderOverlay/>}
                    activeSegmentFromParams={route?.params?.segment}
                    index={index}
                    segmentedProps={{
                        strong: true,
                        rounded: true
                    }}
                    segmentedButtonProps={{
                        strong: true
                    }}
                    navbarProps={{
                        transparent: true,
                        translucent: true,
                        medium: true,
                        right: <EllipsisHorizontalIcon/>
                    }}
                />
            </React.Suspense>
        </View>
    )
}

export default FeedScreen;
