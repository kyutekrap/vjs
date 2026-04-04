import { closeDrawer, DrawerDefault, openDrawer, SectionDefault, SpanDefault } from "../../../components/index.js";

new DrawerDefault({
    children: [
        new SpanDefault("Hello world")._span
    ]
})

openDrawer();

setTimeout(() => {
    closeDrawer()
}, 3000)