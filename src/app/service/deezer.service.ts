import { Injectable } from '@angular/core';
import {DataSearchArtist} from '../Model/datasearchartist';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home.page';
import { DataSearchAlbum } from '../Model/datasearchalbum';
import {DataSearchTracks} from '../Model/datasearchtrack';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  public readonly TAG:HomePage;

  constructor(private http: HttpClient) { }

  getAuthors(artist:string):Promise<DataSearchArtist> {
    console.log(`${this.TAG} getAuthors ${artist}`);
    const url: string = 'https://api.deezer.com/search/artist?q=' + encodeURI(artist);
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
    this.http.get(url).subscribe(data => {
    let json: DataSearchArtist = data as DataSearchArtist;
    resolve(json);
    }, err => {
    console.log(err);
    });
    });
    }


    getAlbum(album:string):Promise<DataSearchAlbum> {
      console.log(`${this.TAG} getAlbum ${album}`);
      const url: string = 'https://api.deezer.com/search/album?q=' + encodeURI(album);
      console.log(`${this.TAG} url: ${url}`);
      return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
      let json: DataSearchAlbum = data as DataSearchAlbum;
      resolve(json);
      }, err => {
      console.log(err);
      });
      });
      }


      getTracks(tracks:number):Promise<DataSearchTracks> {
        console.log(`${this.TAG} getTracks ${tracks}`);
        const url: string = 'https://api.deezer.com/album/' + encodeURI(String(tracks));
        console.log(`${this.TAG} url: ${url}`);
        return new Promise(resolve => {
        this.http.get(url).subscribe(data => {
        let json: DataSearchTracks = data as DataSearchTracks;
        resolve(json);
        }, err => {
        console.log(err);
        });
        });
        }

}
