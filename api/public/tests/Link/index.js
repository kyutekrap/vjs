import { LinkDefault, SectionDefault } from "../../../components/index.js";
new SectionDefault({
    children: [
        new LinkDefault({
            size: "medium",
            variant: "primary",
            text: "Hello World"
        })._link
    ]
});
