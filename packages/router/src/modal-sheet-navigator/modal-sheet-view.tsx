import {ParamListBase} from '@react-navigation/native';
import * as React from 'react';
import type {
    ModalSheetDescriptorMap,
    ModalSheetNavigationConfig,
    ModalSheetNavigationHelpers,
    ModalSheetNavigationProp,
    ModalSheetNavigationState,
} from './modal-sheet-types.js';

const DynamicContentHeightModalSheet = React.forwardRef<
    any,
    any
>(({snapPoints, children, ...props}, ref) => {
    // const {
    //     animatedHandleHeight,
    //     animatedSnapPoints,
    //     animatedContentHeight,
    //     handleContentLayout,
    // } = useModalSheetDynamicSnapPoints(snapPoints);
    return null
});

type ModalSheetScreenProps = {} & {
    navigation: ModalSheetNavigationProp<ParamListBase>;
};

function ModalSheetScreen({
                                   index,
                                   navigation,
                                   snapPoints,
                                   ...props
                               }: ModalSheetScreenProps) {
    const ref = React.useRef(null);
    const lastIndexRef = React.useRef(index);

    // Present on mount.
    React.useEffect(() => {
        ref.current?.present();
    }, []);

    const isMounted = React.useRef(true);
    React.useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    React.useEffect(() => {
        if (index != null && lastIndexRef.current !== index) {
            ref.current?.snapToIndex(index);
        }
    }, [index]);

    const onChange = React.useCallback(
        (newIndex: number) => {
            lastIndexRef.current = newIndex;
            if (newIndex >= 0) {
                navigation.snapTo(newIndex);
            }
        },
        [navigation],
    );

    const onDismiss = React.useCallback(() => {
        // ModalSheetModal will call onDismiss on unmount, be we do not want that since
        // we already popped the screen.
        if (isMounted.current) {
            navigation.goBack();
        }
    }, [navigation]);

    const ModalSheetComponent = snapPoints.includes('CONTENT_HEIGHT')
        ? DynamicContentHeightModalSheet
        : DynamicContentHeightModalSheet;

    return (
        <ModalSheetComponent
            ref={ref}
            index={index}
            snapPoints={snapPoints}
            onChange={onChange}
            onDismiss={onDismiss}
            {...props}
        />
    );
}

const DEFAULT_SNAP_POINTS = ['66%'];

type Props = ModalSheetNavigationConfig & {
    state: ModalSheetNavigationState<ParamListBase>;
    navigation: ModalSheetNavigationHelpers;
    descriptors: ModalSheetDescriptorMap;
};

export function ModalSheetView({state, descriptors}: Props) {
    return null
}

// export function ModalSheetView({ state, descriptors }: Props) {
//     const { colors } = useTheme();
//     const themeBackgroundStyle = React.useMemo(
//         () => ({
//             backgroundColor: colors.card,
//         }),
//         [colors.card],
//     );
//     const themeHandleIndicatorStyle = React.useMemo(
//         () => ({
//             backgroundColor: colors.border,
//         }),
//         [colors.border],
//     );
//
//     // Avoid rendering provider if we only have one screen.
//     const shouldRenderProvider = React.useRef(false);
//     shouldRenderProvider.current =
//         shouldRenderProvider.current || state.routes.length > 1;
//
//     const firstScreen = descriptors[state.routes[0].key];
//
//     return (
//         <>
//             {firstScreen.render()}
//             {shouldRenderProvider.current && (
//                 <ModalSheetModalProvider>
//                     {state.routes.slice(1).map((route) => {
//                         const { options, navigation, render } = descriptors[route.key];
//
//                         const {
//                             index,
//                             backgroundStyle,
//                             handleIndicatorStyle,
//                             snapPoints = DEFAULT_SNAP_POINTS,
//                             ...sheetProps
//                         } = options;
//
//                         return (
//                             <ModalSheetModalScreen
//                                 key={route.key}
//                                 // Make sure index is in range, it could be out if snapToIndex is persisted
//                                 // and snapPoints is changed.
//                                 index={Math.min(
//                                     route.snapToIndex ?? index ?? 0,
//                                     snapPoints.length - 1,
//                                 )}
//                                 snapPoints={snapPoints}
//                                 navigation={navigation}
//                                 backgroundStyle={[themeBackgroundStyle, backgroundStyle]}
//                                 handleIndicatorStyle={[
//                                     themeHandleIndicatorStyle,
//                                     handleIndicatorStyle,
//                                 ]}
//                                 {...sheetProps}
//                             >
//                                 {render()}
//                             </ModalSheetModalScreen>
//                         );
//                     })}
//                 </ModalSheetModalProvider>
//             )}
//         </>
//     );
// }
