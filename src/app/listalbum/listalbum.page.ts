import { Component, OnInit } from '@angular/core';
import { Album } from '../Model/datasearchalbum';
import {DeezerService} from '../service/deezer.service'
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-listalbum',
  templateUrl: './listalbum.page.html',
  styleUrls: ['./listalbum.page.scss'],
})
export class ListalbumPage implements OnInit {

  listAlbum: Array<Album> = [];
  artist: string;

 constructor(private deezerService: DeezerService, private routeActivate: ActivatedRoute, private router: Router) {

 }


ngOnInit() {
  this.artist=this.routeActivate.snapshot.paramMap.get('name');
  this.getAlbum();
  
}


  getAlbum() {
    console.log('artist2 : ' + this.artist);
    this.deezerService.getAlbum(this.artist).then((value)=>{
      this.listAlbum=value.data;
      console.log(value.data);
    }
    );
   console.log('album : ' + this.listAlbum);
  }


  onClick(id:number){
    this.router.navigate([`list-track/${id}`]);
}
}