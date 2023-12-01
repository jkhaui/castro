import {useNavigationState} from "@react-navigation/native";

export const useCanGoBack = () => {
    const routesLength = useNavigationState((state) => state.routes.length)

    return routesLength > 1;
}
