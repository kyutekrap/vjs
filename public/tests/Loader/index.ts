import { endLoader, LoaderDefault, startLoader } from "../../../components/index.js";

new LoaderDefault();

startLoader();

setTimeout(() => {
    endLoader()
}, 3000);