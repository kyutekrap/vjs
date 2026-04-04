import { FileInputDefault, SectionDefault } from "../../../components/index.js";
new SectionDefault({
    children: [
        new FileInputDefault({
            accept: "image/*",
            size: 5
        })._fileInput
    ]
});
