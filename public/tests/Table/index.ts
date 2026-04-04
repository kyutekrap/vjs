import { SectionDefault, TableDefault } from "../../../components/index.js";

new SectionDefault({
    children: [
        new TableDefault({
            title: "Hello world",
            columns: [
                { label: "Name", value: "name" },
                { label: "Age", value: "age" },
                { label: "Email", value: "email" }
            ],
            data: [
                { name: { value: "John Doe" },
                    age: { value: 30 },
                    email: { value: "" }
                }
            ]
        })._tableWrapper
    ]
})