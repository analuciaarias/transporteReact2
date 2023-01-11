import '../styles/home.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="home">
                <img src="./img/home/img01.jpg" alt="" />
            </div>
            <div className="columnas">
                <section className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur incidunt iste nam amet harum
                        reiciendis ipsa vitae nostrum nobis, temporibus repellendus voluptates dolor exercitationem repellat
                        consequuntur minima autem culpa id?
                        Nesciunt quia nobis dolorum et quo doloremque voluptates beatae, reiciendis fuga quidem odio hic ab
                        sunt? Quae voluptates sequi, excepturi ex vero mollitia aut, itaque dolorum nobis et inventore
                        architecto.</p>
                </section>
                <section className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">
                            Simplemente excelente
                        </span>
                        <span className="autor">
                            Juan Gomez - zapatos.com
                        </span>
                    </div>
                </section>
            </div>

        </main>
    )
}
export default HomePage;