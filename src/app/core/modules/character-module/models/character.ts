export interface Character {
    id?: number;
    name: string;
    gender: string;
    image: string;
    speciesId: number;
    originPlanetId: number;
    originalSerieId: number;
    createdAt: Date;
}
