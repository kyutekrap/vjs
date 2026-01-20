export function openModal(args, allowClose = true) {
    const backdrop = document.querySelector(".modal");
    const modal = document.querySelector(".modal .modal-content .vBox");
    const closeBtn = document.querySelector(".modal .modal-content > div:first-child");
    if (backdrop instanceof HTMLElement && modal instanceof HTMLElement) {
        modal.innerHTML = "";
        args.forEach((arg) => {
            modal.appendChild(arg);
        });
        if (closeBtn instanceof HTMLElement) {
            closeBtn.style.display = allowClose ? "block" : "none";
        }
        backdrop.classList.add("open");
    }
}
