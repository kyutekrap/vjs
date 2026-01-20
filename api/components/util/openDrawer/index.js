export function openDrawer() {
    const drawer = document.querySelector(".drawer");
    if (drawer instanceof HTMLElement) {
        drawer.classList.add("open");
    }
}
