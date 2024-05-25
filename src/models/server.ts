import express, {Application} from 'express';
import routesPeluqueros from '../routes/peluquero'

class Server{
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '4000';
        this.routes();
    }
    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Aplicacion corriendo por el puerto', this.port);
        })
    }
    routes(){
        this.app.use('/api/peluquero',routesPeluqueros);
    }
}
export default Server;

