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
  playing: boolean = false;
  preview:string;
  
  id: number;
  nb:string;
  audio: HTMLAudioElement;
  tempAudio: HTMLAudioElement;

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
      console.log(value.tracks.data);
    }
    );
   console.log('track : ' + this.listTrack);
  }

  playPreview(preview){
    if(this.playing == false){
      if(this.tempAudio == null){
        this.audio=new Audio(preview);
        this.audio.play(); 
        this.playing = true;
        this.tempAudio = this.audio;
      }else{
        this.playing = true;
        this.audio=this.tempAudio
        this.audio.play(); 
      }
      
    }else{
      this.tempAudio = this.audio;
      this.audio.pause();
      this.playing = false;
    }
   
   
    
  
  }
  backPreview(preview){
   
  }

  forwardPreview(preview){

  }
  

}
