import { AccordionDefault, SectionDefault, SpanDefault } from "../../../components/index.js";

new SectionDefault({
    children: [
        new AccordionDefault({
            caption: {
                children: [
                    new SpanDefault("Hello world")._span
                ]
            },
            children: [
                new SpanDefault("Hidden content")._span
            ]
        })._accordion
    ]
})