import { GridDefault, InputDefault, SectionDefault } from "../../../components/index.js";
new SectionDefault({
    children: [
        new GridDefault({
            columns: 3,
            children: [
                new InputDefault({})._input,
                new InputDefault({})._input,
                new InputDefault({})._input,
                new InputDefault({})._input,
                new InputDefault({})._input,
                new InputDefault({})._input
            ]
        })._grid
    ]
});
