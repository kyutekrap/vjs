import { SectionDefault, SkeletonDefault } from "../../../components/index.js";
new SectionDefault({
    children: [
        new SkeletonDefault({
            lines: 3
        })._skeleton
    ]
});
