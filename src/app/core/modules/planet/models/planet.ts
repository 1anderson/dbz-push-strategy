import { CharactersList } from '../../character-module/models/character-list';

export default interface Planet {
    id?: number;
    name: string;
    image?: string;
    characters?: CharactersList[];
}
