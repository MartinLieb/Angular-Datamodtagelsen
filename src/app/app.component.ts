import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Datamodtagelsen';
  shown = false;
  shown1 = false;
  shown2 = false;
  shown3 = true;
  noUpload = true;

  toggleShow1(){
    this.shown = true;
    this.shown1 = true;
    this.shown2 = false;
    this.shown3 = false;

  }

  toggleShow2(){
    this.shown = true;
    this.shown2 = true;
    this.shown1 = false;
    this.shown3 = false;

  }

  hideButtons(){
    this.noUpload = false;
  }

}
