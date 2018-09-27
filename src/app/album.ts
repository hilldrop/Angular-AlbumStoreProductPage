import { Track } from './Track';

export interface Album {

    name: string;
    releaseDate: string;
    coverImages: string;
    tranks: Track[];
}
