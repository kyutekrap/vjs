import { closeSnackbar, openSnackbar, SnackbarDefault } from "../../../components/index.js";
new SnackbarDefault({
    closeBgButton: {
        width: "20px",
        height: "20px",
        src: ""
    }
});
openSnackbar("Hello world");
setTimeout(() => {
    closeSnackbar();
}, 3000);
