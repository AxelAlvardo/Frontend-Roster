export type CharacterType = {
    _id: string;
    firstName: string;
    lastName: string;
    age: number;
    sex: string;
    gender: string;
    height: number;
    weight: number;
    description: string;
    actorOrVoice: string;
    mediaTitle: string;
    mediaType: string;
    movieActor: string;
    bookAuthor: string | null;
    __v: number;
}

export type MediaType = {
    access: string
    _id: string;
    title: string;
    imageURL: string;
    characters: CharacterType[];
    __v: number;
};