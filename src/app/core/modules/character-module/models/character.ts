import Planet from '../../planet/models/planet';
import Serie from '../../serie/models/serie';
import Specie from '../../specie/models/specie';

export interface Character {
    id?: number;
    name: string;
    gender: string;
    image: string;
    species: Specie;
    planet: Planet;
    serie: Serie;
}
