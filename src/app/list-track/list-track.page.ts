import { Component, OnInit } from '@angular/core';
import { Track } from '../Model/datasearchtrack';
import {DeezerService} from '../service/deezer.service';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-list-track',
  templateUrl: './list-track.page.html',
  styleUrls: ['./list-track.page.scss'],
})
export class ListTrackPage implements OnInit {

  listTrack: Array<Track> = [];
  id: number;
  nb:string;
  audio: HTMLAudioElement;
  constructor(private deezerService: DeezerService, private routeActivate: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.nb=this.routeActivate.snapshot.paramMap.get('id');
    this.id=Number(this.nb);
    this.getTracks();
  }

  getTracks() {
    console.log('id : ' + this.id);
    this.deezerService.getTracks(this.id).then((value)=>{
      this.listTrack=value.tracks.data;
      console.log(value);
    }
    );
   console.log('track : ' + this.listTrack);
  }

  playPreview(preview:string){
    this.audio=new Audio(preview);
    this.audio.play(); 

  }
}
