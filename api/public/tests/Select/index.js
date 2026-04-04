import { SectionDefault, SelectDefault } from "../../../components/index.js";
new SectionDefault({
    children: [
        new SelectDefault({
            options: ["Option 1", "Option 2", "Option 3"],
        })._select
    ]
});
