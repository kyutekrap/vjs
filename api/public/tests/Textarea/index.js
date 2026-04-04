import { SectionDefault, TextareaDefault } from "../../../components/index.js";
new SectionDefault({
    children: [
        new TextareaDefault({
            lines: 5,
            resize: 'both'
        })._textarea
    ]
});
