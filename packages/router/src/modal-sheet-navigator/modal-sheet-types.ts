import type {
    DefaultNavigatorOptions,
    Descriptor,
    NavigationHelpers,
    NavigationProp,
    NavigationState,
    ParamListBase,
    RouteProp,
    StackActionHelpers,
} from '@react-navigation/native';

// TODO: Sheet open / close / snap / events.
export type ModalSheetNavigationEventMap = {};

export type ModalSheetNavigationState<ParamList extends ParamListBase> = Omit<
    NavigationState<ParamList>,
    'routes'
> & {
    type: 'modal-sheet';
    routes: (NavigationState<ParamList>['routes'][number] & {
        snapToIndex?: number | null;
    })[];
};

export type ModalSheetActionHelpers<ParamList extends ParamListBase> =
    StackActionHelpers<ParamList> & {
    // TODO: index should not be optional, but this causes a type error.
    /**
     * Snap the drawer to a point.
     */
    snapTo(index?: number): void;
};

export type ModalSheetNavigationProp<
    ParamList extends ParamListBase,
    RouteName extends keyof ParamList = string,
    NavigatorID extends string | undefined = undefined,
> = NavigationProp<
    ParamList,
    RouteName,
    NavigatorID,
    ModalSheetNavigationState<ParamList>,
    ModalSheetNavigationOptions,
    ModalSheetNavigationEventMap
> &
    ModalSheetActionHelpers<ParamList>;

export type ModalSheetScreenProps<
    ParamList extends ParamListBase,
    RouteName extends keyof ParamList = string,
    NavigatorID extends string | undefined = undefined,
> = {
    navigation: ModalSheetNavigationProp<ParamList, RouteName, NavigatorID>;
    route: RouteProp<ParamList, RouteName>;
};

export type ModalSheetNavigationHelpers = NavigationHelpers<
    ParamListBase,
    ModalSheetNavigationEventMap
>;

// We want it to be an empty object because navigator does not have any additional props
export type ModalSheetNavigationConfig = {};

export type ModalSheetNavigationOptions = Omit<
    {},
    // Remove some props that aren't useful as navigation options.
    | 'containerHeight'
    | 'snapPoints'
    | 'gestureEventsHandlersHook'
    | 'animatedPosition'
    | 'animatedIndex'
    | 'onChange'
    | 'onAnimate'
    | 'onClose'
    | 'children'
    | '$modal'
    | 'waitFor'
    | 'simultaneousHandlers'
> & {
    /**
     * Points for the bottom sheet to snap to. It accepts array of number, string or mix.
     * String values should be a percentage.
     * @example
     * snapPoints={[200, 500]}
     * snapPoints={[200, '%50']}
     * snapPoints={['%100']}
     * @type Array<string | number>
     */
    snapPoints?: Array<string | number>;
};

export type ModalSheetNavigatorProps = DefaultNavigatorOptions<
    ParamListBase,
    ModalSheetNavigationState<ParamListBase>,
    ModalSheetNavigationOptions,
    ModalSheetNavigationEventMap
> &
    ModalSheetNavigationConfig;

export type ModalSheetDescriptor = Descriptor<
    ModalSheetNavigationOptions,
    ModalSheetNavigationProp<ParamListBase>,
    RouteProp<ParamListBase>
>;

export type ModalSheetDescriptorMap = {
    [key: string]: ModalSheetDescriptor;
};
