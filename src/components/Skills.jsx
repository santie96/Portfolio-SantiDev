import techStackLang from "./../data/SkillsLang.json"
import TechnologyDirectory from "./TechnologyDirectory";

const langIcons = import.meta.glob("../assets/icons/lang/*.svg", {
    eager: true,
    import: "default",
    query: "?url",
});

const groups = techStackLang.map(({ items, ...group }) => ({
    ...group,
    items: items.map(({ icon, icons, ...item }) => ({
        ...item,
        icon: icon ? langIcons[`../assets/icons/lang/${icon}`] : undefined,
        icons: icons?.map((file) => langIcons[`../assets/icons/lang/${file}`]),
    })),
}));

function Skills() {
    return (
        <TechnologyDirectory
            eyebrow="Competenze"
            title="Le tecnologie del mio stack"
            description="La base con cui progetto e sviluppo interfacce web."
            groups={groups}
        />
    );
}

export default Skills;
