export function openDrawer(): void {
    const drawer = document.querySelector(".drawer");
    if (drawer instanceof HTMLElement) {
        drawer.classList.add("open");
    }
}
