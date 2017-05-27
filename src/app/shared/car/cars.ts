import { Car }  from './car.model';
import { UUID } from 'angular2-uuid';

const CARS: Car[]   = [];

CARS[0]             = new Car( "Gol", "Volkswagem", "FFF-5498" );
CARS[0].combustivel = "Flex";
CARS[0].valor       = "20000";

CARS[1]             = new Car( "Fox", "Volkswagem", "FOX-4125" );
CARS[1].combustivel = "Gasolina";
CARS[1].valor       = "20000";

CARS[2]             = new Car( "Fusca", "Volkswagem", "PAI-4121" );
CARS[2].combustivel = "Alcool";
CARS[2].imagem      = "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg";
CARS[2].valor       = "20000";

export const Cars = CARS;
