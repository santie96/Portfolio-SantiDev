import techStackTools from "../data/Tools.json";
import TechnologyDirectory from "./TechnologyDirectory";

const toolIcons = import.meta.glob("../assets/icons/tools/*.svg", {
    eager: true,
    import: "default",
    query: "?url",
});

const groups = techStackTools.map(({ title, items }) => ({
    title,
    items: items.map(({ icon, ...tool }) => ({
        ...tool,
        icon: toolIcons[`../assets/icons/tools/${icon}`],
    })),
}));

function Tools() {
    return (
        <TechnologyDirectory
            eyebrow="Strumenti"
            title="Gli strumenti che accompagnano il mio lavoro"
            description="Una selezione di strumenti che uso per progettare, sviluppare e gestire progetti web."
            groups={groups}
        />
    );
}

export default Tools;
