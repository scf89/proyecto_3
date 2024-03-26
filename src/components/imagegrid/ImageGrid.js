// components/ImageGrid.js
import "./ImageGrid.css";
import axios from '../../../node_modules/axios';

export class ImageGrid {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('image-grid'); // Agregamos una clase para los estilos
        this.element.innerHTML = `
            <div class="image">Imagen 1</div>
            <div class="image">Imagen 2</div>
            <div class="image">Imagen 3</div>
            <!-- Agrega más imágenes o datos dinámicos según sea necesario -->
        `;
        let images;

        axios.get('https://api.unsplash.com/photos/?client_id=hQe2ipcaUtiCoaYJhch0M4aHenhB2RtFlscfU5XdbBM')
            .then(response => {
                console.log(response.data);
                response.data.forEach(element => {
                    const img = document.createElement('img'); // Crear un elemento de imagen
                    img.src = element.urls.small;
                    this.element.appendChild(img);
                });
            })
            .catch(error => console.error('Error:', error));
    }

    render() {
        return this.element;
    }
}
