export function openSnackbar(text: string): void {
    const snackbar = document.querySelector(".snackbar");
    const snackbarSpan = document.querySelector(".snackbar .span");

    if (snackbar instanceof HTMLElement && snackbarSpan instanceof HTMLElement) {
        snackbarSpan.textContent = text;
        snackbar.classList.add("open");
    }
}
