import { Component, OnInit } from '@angular/core';
import {SongPlayerService} from '../song-player.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
 export class FooterComponent implements OnInit {

  songName: string = '';
  isPlaying: string = 'play';

  constructor(private songPlayer: SongPlayerService) {
  }

  ngOnInit(): void {
    this.songPlayer.songData.subscribe(data =>this.songName=data)
    this.songPlayer.songPlaying.subscribe(data => this.isPlaying = data)
  }

  togglePlay = () => {
    if(this.songName.length!==0){
      this.songPlayer.togglePlay();
    }
  }


}
