import {
    createNavigatorFactory,
    ParamListBase,
    StackNavigationState,
    useNavigationBuilder,
} from '@react-navigation/native';
import * as React from 'react';
import {ModalSheetRouter, ModalSheetRouterOptions,} from './modal-sheet-router.js';
import {ModalSheetView} from './modal-sheet-view.js';
import type {
    ModalSheetActionHelpers,
    ModalSheetNavigationEventMap,
    ModalSheetNavigationOptions,
    ModalSheetNavigationState,
    ModalSheetNavigatorProps,
} from './modal-sheet-types.js';

function ModalSheetNavigator({
                                  id,
                                  children,
                                  screenListeners,
                                  screenOptions,
                                  ...rest
                              }: ModalSheetNavigatorProps) {
    const {state, descriptors, navigation, NavigationContent} =
        useNavigationBuilder<
            ModalSheetNavigationState<ParamListBase>,
            ModalSheetRouterOptions,
            ModalSheetActionHelpers<ParamListBase>,
            ModalSheetNavigationOptions,
            ModalSheetNavigationEventMap
        >(ModalSheetRouter, {
            id,
            children,
            screenListeners,
            screenOptions,
        });

    return (
        <NavigationContent>
            <ModalSheetView
                {...rest}
                state={state}
                navigation={navigation}
                descriptors={descriptors}
            />
        </NavigationContent>
    );
}

export const createModalSheetNavigator = createNavigatorFactory<
    StackNavigationState<ParamListBase>,
    ModalSheetNavigationOptions,
    ModalSheetNavigationEventMap,
    typeof ModalSheetNavigator
>(ModalSheetNavigator);
