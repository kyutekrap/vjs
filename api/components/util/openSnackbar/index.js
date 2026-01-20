export function openSnackbar(text) {
    const snackbar = document.querySelector(".snackbar");
    const snackbarSpan = document.querySelector(".snackbar .span");
    if (snackbar instanceof HTMLElement && snackbarSpan instanceof HTMLElement) {
        snackbarSpan.textContent = text;
        snackbar.classList.add("open");
    }
}
