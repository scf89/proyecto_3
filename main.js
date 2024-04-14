import './style.css'
import { Navbar } from './src/components/navbar/Navbar.js';
import { ImageGrid } from './src/components/imagegrid/ImageGrid.js';

const app = document.getElementById('app');

const navbar = new Navbar();
const imageGrid = new ImageGrid();

app.appendChild(navbar.render());
app.appendChild(imageGrid.render());