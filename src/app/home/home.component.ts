import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  speech = new Speech();
  textSpeech = '';
  constructor() {
    this.speech.init();
  }

  ngOnInit() {
  }
  speak() {
    this.speech.speak({ text: this.textSpeech });
  }
  textAreaChange(event) {
    this.textSpeech = event.target.value;
  }

}
