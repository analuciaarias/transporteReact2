import '../styles/contacto.css'
const ContactoPage = (props) =>{
    return(
        <main className="holder contacto">
        <section>
            <h2>Contacto</h2>
            <form action="" class="formulario">
                <p>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" />
                </p>
                <p>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name="" id="apellido" />
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </p>
                <p>
                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" id="telefono" />
                </p>
                <p>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="" id="mensaje" cols="30" rows="10"></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar" />
                </p>
            </form>
        </section>
        <section className="datos">
            <h2>Otras vias de comunicación</h2>
            <p>También podes contactarte con nosotros usando los siguientes medios</p>
            <ul>
                <li> <a href="">Instagram</a> </li>
                <li><a href="">Facebook</a> </li>
                <li><a href="">Twitter</a></li>
            </ul>
        </section>
    </main>
    )
}
export default ContactoPage;