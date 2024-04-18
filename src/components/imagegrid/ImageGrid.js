// components/ImageGrid.js
import "./ImageGrid.css";
import { createApi } from 'unsplash-js';

const unsplash = createApi({
    accessKey: 'hQe2ipcaUtiCoaYJhch0M4aHenhB2RtFlscfU5XdbBM',
    //...other fetch options
    });
const searchPhotos = async (keyword) => {
    const images = await unsplash.search.getPhotos({
    query: keyword,
    page: 1,
    perPage: 10,
    color: 'green',
    orientation: 'portrait',
    });
    return images
}

const galleryListeners = async () => {
    const input = document.querySelector("#searchinput")
    const btn = document.querySelector("#searchbtn")
    btn.addEventListener("click", async () => {
        const images = await searchPhotos(input.value)
        printItems(images.response.results);
    });
}

const printItems = (items) => {
    document.querySelector("#image-grid").innerHTML='';
    console.log(items.length);
    if(items.length>0){
        document.querySelector("#image-grid").classList.remove('option-buttons');
        document.querySelector("#image-grid").classList.add('image-grid');
        items.forEach(element => {
            const img = document.createElement('img'); // Crear un elemento de imagen
            img.src = element.urls.small;
            img.classList.add('image');
            document.querySelector("#image-grid").appendChild(img);
        });
    } else {
        document.querySelector("#image-grid").classList.add('option-buttons');
        document.querySelector("#image-grid").classList.remove('image-grid');
        const btn1 = document.createElement("button");
        btn1.innerHTML = 'moon';
        btn1.addEventListener("click", async () => {
            const images = await searchPhotos('moon')
            printItems(images.response.results);
        });
        document.querySelector("#image-grid").appendChild(btn1);
        const btn2 = document.createElement("button");
        btn2.innerHTML = 'dog';
        btn2.addEventListener("click", async () => {
            const images = await searchPhotos('dog')
            printItems(images.response.results);
        });
        document.querySelector("#image-grid").appendChild(btn2);
        const btn3 = document.createElement("button");
        btn3.innerHTML = 'river';
        btn3.addEventListener("click", async () => {
            const images = await searchPhotos('river')
            printItems(images.response.results);
        });
        document.querySelector("#image-grid").appendChild(btn3);
    }
  }

export class ImageGrid {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('image-grid'); // Agregamos una clase para los estilos
        this.element.id = 'image-grid';

        
        const printTemplate = async () => {
            const images = await searchPhotos("cat");
            galleryListeners();
            console.log(images.response.results);
            printItems(images.response.results);
        }
        printTemplate();
    }

    render() {
        return this.element;
    }
}




