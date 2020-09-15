import { CharactersList } from '../../character-module/models/character-list';

export default interface Serie {
    id?: number;
    name: string;
    image?: string;
    description?: string;
    characters?: CharactersList[];
}
