import { Component } from '@angular/core';
import {ITheme, SuperJssService} from "super-jss";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-npm-super-jss';

  theme:ITheme;
  constructor(superJssService:SuperJssService) {
    this.theme = superJssService.theme();
  }
}
