export function closeDrawer(): void {
    const drawer = document.querySelector(".drawer");
    if (drawer instanceof HTMLElement) {
        drawer.classList.remove("open");
    }
}
