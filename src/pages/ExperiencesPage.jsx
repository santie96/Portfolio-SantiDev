import Intestation from "../layout/IntestationPage"
import img from "./../assets/img/Laptop futuristico con interfacce fluttuanti.png"

function experiences() {
    return (
        <>
            <section className="page-surface min-h-[50vh]">
                <Intestation
                    title="Il mio percorso tra formazione ed esperienze professionali"
                    paragraf="Dalla comunicazione digitale allo sviluppo front-end: qui raccolgo le tappe formative e professionali che hanno contribuito al mio percorso."
                    img={img}
                    
                />
            </section>
        </>
    )
}

export default experiences
