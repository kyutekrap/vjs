export function closeSnackbar(): void {
    const snackbar = document.querySelector(".snackbar");
    if (snackbar instanceof HTMLElement) {
        snackbar.classList.remove("open");
    }
}
