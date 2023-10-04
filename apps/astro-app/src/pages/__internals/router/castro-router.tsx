import { StackRouter } from '@react-navigation/native';

export const CastroRouter = options => {
    const router = StackRouter(options);

    return {
        ...router,
        getStateForAction(state, action, options) {
            const result = router.getStateForAction(state, action, options);

            if (
                result != null &&
                result.index > state.index &&
                state.routes[state.index].params?.isEditing
            ) {
                // Returning the current state means that the action has been handled, but we don't have a new state
                return state;
            }

            return result;
        },
    };
};
