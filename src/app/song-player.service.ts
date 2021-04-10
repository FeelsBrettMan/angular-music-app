import { Injectable } from '@angular/core';
import {Howl} from 'howler';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongPlayerService {

  currentSongHowl: Howl;
  currentSongName: string = '';

  songData:Subject<string> = new Subject<string>();
  songPlaying: Subject<string> = new Subject<string>();
  songNames: string[] = [
    "Metalmania by Kevin Macleod",
    "Noise Attack by Kevin Macleod",
    "Raw by Kevin Macleod",
    "Take the Lead by Kevin Macleod",
    "The Whip (Extended Version) by Kevin Macleod",
    "Twisted by Kevin Macleod",
    "Volatile by Kevin Macleod",
    "What You Want (version 2) by Kevin Macleod",
    "A Robust Crew by Darren Curtis"]
  songs: string[] = [
    '/assets/music/metalmania-by-kevin-macleod-from-filmmusic-io.mp3',
    '/assets/music/noise-attack-by-kevin-macleod-from-filmmusic-io.mp3',
    '/assets/music/raw-by-kevin-macleod-from-filmmusic-io.mp3',
    '/assets/music/take-the-lead-by-kevin-macleod-from-filmmusic-io.mp3',
    '/assets/music/the-whip-extended-version-by-kevin-macleod-from-filmmusic-io.mp3',
    '/assets/music/twisted-by-kevin-macleod-from-filmmusic-io.mp3',
    '/assets/music/volatile-reaction-by-kevin-macleod-from-filmmusic-io.mp3',
    '/assets/music/what-you-want-version-2-by-kevin-macleod-from-filmmusic-io.mp3',
    '/assets/music/A Robust Crew MP3.mp3'];


  //
  // methods
  switchSongs = (songId: number) => {
    console.log('setting song to number ', this.songNames[songId], ' in service');
    if (this.currentSongHowl != null) { this.currentSongHowl.stop(); }
    this.currentSongName = this.songNames[songId];
    this.songData.next(this.songNames[songId])
    this.currentSongHowl = new Howl({
      src: this.songs[songId],
      html5: true,
      autoplay: true
    });
    this.songPlaying.next("pause")
  }

  togglePlay = () => {
    if (this.currentSongHowl.playing()) {
      this.currentSongHowl.pause();
      this.songPlaying.next("play")
    }
    else {
      this.currentSongHowl.play();
      this.songPlaying.next("pause");
    }
  }



  constructor() { }
}
