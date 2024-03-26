// components/Navbar.js
import "./Navbar.css"; // Importamos los estilos CSS específicos para este componente

export class Navbar {
    constructor() {
        this.element = document.createElement('nav');
        this.element.innerHTML = `
            <div class="logo">Pinterest Clone</div>
            <ul class="nav-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Explorar</a></li>
                <li><a href="#">Notificaciones</a></li>
                <!-- Agrega más elementos según sea necesario -->
            </ul>
        `;
        this.element.classList.add('navbar'); // Agregamos una clase para los estilos
    }

    render() {
        return this.element;
    }
}
