export function closeModal() {
    const modal = document.querySelector(".modal");
    if (modal instanceof HTMLElement) {
        modal.classList.remove("open");
    }
}
