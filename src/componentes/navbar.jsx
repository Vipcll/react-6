import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';


function navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Ciminelli Software</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Sobre Nosotros</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Productos</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
                </li>
            </ul>
            </div>
        </div>
        <div>
        <CartWidget/>
        </div>
        
        </nav>
        );
        }

    export default navbar;