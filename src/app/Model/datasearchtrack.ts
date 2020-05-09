import {Artist} from '../Model/datasearchartist';


export class Tracks {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    artist: Artist;
    type: string;
}

export class DataSearchTracks {
    data: Tracks[];
}