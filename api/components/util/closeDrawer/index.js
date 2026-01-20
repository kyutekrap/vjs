export function closeDrawer() {
    const drawer = document.querySelector(".drawer");
    if (drawer instanceof HTMLElement) {
        drawer.classList.remove("open");
    }
}
