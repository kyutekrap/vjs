import { SectionDefault, VBoxDefault, TextareaDefault } from "../../../components/index.js";

new SectionDefault({
    children: [
        new VBoxDefault({
            children: [
                new TextareaDefault({
                    lines: 5,
                    resize: 'both'
                })._textarea
            ]
        })._vBox
    ]
})