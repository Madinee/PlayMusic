import { Component } from '@angular/core';
import {DeezerService} from '../service/deezer.service'
import { promise } from 'protractor';
import { DataSearchArtist, Artist } from '../Model/datasearchartist';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
 listArtist: Array<Artist> = [];

  constructor(private deezerService: DeezerService, private router: Router) {}

  private onSearchArtist(event: any){
    let val = event.target.value;
    console.log(val);
    this.deezerService.getAuthors(val).then((value)=>{
      this.listArtist=value.data;
    }
    );
    console.log(this.listArtist);
}

onClick(artist:string){
  this.router.navigate([`listalbum/${artist}`]);  
}

}

