import { ButtonDefault, SectionDefault } from "../../../components/index.js";
new SectionDefault({
    children: [
        new ButtonDefault({
            variant: "filled",
            size: "big",
            type: "button",
            content: "Click me"
        })._button
    ]
});
