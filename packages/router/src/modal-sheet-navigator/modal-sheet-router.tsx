import {nanoid} from "nanoid/non-secure";
import {
    ParamListBase,
    Router,
    StackActions,
    StackActionType,
    StackRouter,
    StackRouterOptions,
} from "@react-navigation/native";
import type {ModalSheetNavigationState} from "./modal-sheet-types.js";

export type ModalSheetRouterOptions = StackRouterOptions & { nanoidLength: number };

export type ModalSheetActionType =
    | StackActionType
    | {
    type: "SNAP_TO";
    index: number;
    source?: string;
    target?: string;
};

export const ModalSheetActions = {
    ...StackActions,
    snapTo(index: number): ModalSheetActionType {
        return {type: "SNAP_TO", index};
    },
};

export function ModalSheetRouter(
    routerOptions: StackRouterOptions,
): Router<ModalSheetNavigationState<ParamListBase>, ModalSheetActionType> {
    const baseRouter = StackRouter(routerOptions) as unknown as Router<
        ModalSheetNavigationState<ParamListBase>,
        ModalSheetActionType
    >;
    const {nanoidLength = 3} = routerOptions;
    
    return {
        ...baseRouter,
        type: "modal-sheet",
        getInitialState(options) {
            const state = baseRouter.getInitialState(options);

            return {
                ...state,
                stale: false,
                type: "modal-sheet",
                key: `modal-sheet-${nanoid(nanoidLength)}`,
            };
        },
        getStateForAction(state, action, options) {
            switch (action.type) {
                case "SNAP_TO": {
                    const index =
                        action.target === state.key && action.source
                            ? state.routes.findIndex((r) => r.key === action.source)
                            : state.index;
                    return {
                        ...state,
                        routes: state.routes.map((route, i) =>
                            i === index
                                ? {
                                    ...route,
                                    snapToIndex: action.index,
                                }
                                : route,
                        ),
                    };
                }
                default:
                    return baseRouter.getStateForAction(state, action, options);
            }
        },
        getRehydratedState(
            partialState,
            {routeNames, routeParamList, routeGetIdList},
        ) {
            if (partialState.stale === false) {
                return partialState;
            }

            const state = baseRouter.getRehydratedState(partialState, {
                routeNames,
                routeParamList,
                routeGetIdList,
            });

            return {
                ...state,
                type: "modal-sheet",
                key: `modal-sheet-${nanoid(nanoidLength)}`,
            };
        },
        actionCreators: ModalSheetActions,
    };
}
