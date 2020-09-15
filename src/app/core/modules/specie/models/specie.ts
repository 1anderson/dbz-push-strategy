import { CharactersList } from '../../character-module/models/character-list';

export default interface Specie {
    id?: number;
    name: string;
    image?: string;
    description?: string;
    characters?: CharactersList[];
}
