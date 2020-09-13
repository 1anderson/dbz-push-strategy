import { Character } from '../../character-module/models/character';

export default interface Planet {
    id?: number;
    name: string;
    image: string;
    characters: Character[];
}
