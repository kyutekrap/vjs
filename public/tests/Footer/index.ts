import { FooterDefault, SectionDefault, SpanDefault } from "../../../components/index.js";

new SectionDefault({
    children: [
        new FooterDefault({
            children: [
                new SpanDefault("Copyright © 2024 - All rights reserved.")._span
            ]
        })._footer
    ]
})