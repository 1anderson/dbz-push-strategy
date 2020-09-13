import { Character } from '../../character-module/models/character';

export default interface Specie {
    id?: number;
    name: string;
    image: string;
    description: string;
    characters: Character[];
}
