import {useSnapshot} from "valtio";
import {RouterStore} from "../store/index.mjs";

export const useRouterSnapshot = () => {
    return useSnapshot(RouterStore);
}
