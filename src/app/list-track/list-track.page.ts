import { Component, OnInit } from '@angular/core';
import { Tracks } from '../Model/datasearchtrack';
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

  listTrack: Array<Tracks> = [];
  id: number;
  constructor(private deezerService: DeezerService, private routeActivate: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.id=this.routeActivate.snapshot.paramMap.get('id');
    this.getTracks();
  }

  getTracks() {
    console.log('id : ' + this.id);
    this.deezerService.getTracks(this.id).then((value)=>{
      this.listTrack=value.data;
    }
    );
   console.log('track : ' + this.listTrack);
  }
}
