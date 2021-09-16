import {Component, Input, OnInit, Output} from '@angular/core';
import { AppComponent} from "../app.component";

// find måde at importere parent component her og skjul buttons fra parent med uploadVand()

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  appComponent = new AppComponent;

  userName = null;
  passWord = null;

  constructor() { }

  ngOnInit(): void {
  }

  uploadWater() {
    this.appComponent.hideButtons();
  }

}
