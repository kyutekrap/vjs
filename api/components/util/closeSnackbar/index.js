export function closeSnackbar() {
    const snackbar = document.querySelector(".snackbar");
    if (snackbar instanceof HTMLElement) {
        snackbar.classList.remove("open");
    }
}
