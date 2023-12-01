import {useProxy} from "valtio/utils";
import {RouterStore} from "../store/index.mjs";

export const useRouter = () => useProxy(RouterStore);
