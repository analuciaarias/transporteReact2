import '../styles/servicios.css'
const Servicios = (props) =>{
    return(
        <main className="holder">
        <h2>Servicios</h2>
        <div className="servicio">
            <img src="./img/servicios/aereo.jpg" alt="" />
            <div className="info">
                <h4>Transportes Aereos</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magni voluptatibus eius nulla
                    ipsam natus ut veniam quibusdam, deserunt aliquid, iure, est ullam culpa excepturi alias maiores
                    soluta consectetur quia.</p>
            </div>
        </div>
            <div className="servicio">
                <img src="./img/servicios/ferroviario.jpg" alt="" />
            
            <div className="info">
                <h4>Transportes Ferroviario</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magni voluptatibus eius nulla
                    ipsam natus ut veniam quibusdam, deserunt aliquid, iure, est ullam culpa excepturi alias maiores
                    soluta consectetur quia.</p>
            </div>
        </div>
        <div className="servicio">
                <img src="./img/servicios/maritimo.jpg" alt="" />
            
            <div className="info">
                <h4>Transportes Maritimo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magni voluptatibus eius nulla
                    ipsam natus ut veniam quibusdam, deserunt aliquid, iure, est ullam culpa excepturi alias maiores
                    soluta consectetur quia.</p>

            </div>
        </div>
        <div className="servicio">
                <img src="./img/servicios/terrestre.jpg" alt="" />
            <div className="info">
                <h4>Transportes terrestre</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magni voluptatibus eius nulla
                    ipsam natus ut veniam quibusdam, deserunt aliquid, iure, est ullam culpa excepturi alias maiores
                    soluta consectetur quia.</p>
            </div>
        </div>

    </main>
    )
}
export default Servicios;