import {Component, OnInit} from '@angular/core';
import {SongPlayerService} from '../song-player.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  //
  // instance data
  songNames: string[] = [];

  constructor(private songPlayer: SongPlayerService) {
    this.songNames = songPlayer.songNames
  }

  ngOnInit(): void {
  }

  setSong = (songNum: number) => {
    console.log('setting song to number ', songNum);
    this.songPlayer.switchSongs(songNum);
  }
}

