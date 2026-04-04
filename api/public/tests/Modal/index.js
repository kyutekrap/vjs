import { closeModal, ModalDefault, openModal, SpanDefault } from "../../../components/index.js";
new ModalDefault({});
openModal([
    new SpanDefault("Hello World", { fontWeight: "bold" })._span
]);
setTimeout(() => {
    closeModal();
}, 3000);
