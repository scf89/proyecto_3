// components/Navbar.js
import "./Navbar.css"; // Importamos los estilos CSS específicos para este componente

export class Navbar {
    constructor() {
        this.element = document.createElement('nav');
        this.element.innerHTML = `
        <h1>P</h1>
        <input type="text" placeholder="Search" id="searchinput"/>
        <button id="searchbtn"><i class="fas fa-search"></i></button>
        <a href="#"><i class="fas fa-user"></i></a>
        `;
        this.element.classList.add('navbar'); // Agregamos una clase para los estilos
    }

    render() {
        return this.element;
    }
}
