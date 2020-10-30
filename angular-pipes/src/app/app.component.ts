import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import localeIt from '@angular/common/locales/it';


registerLocaleData(localeIt);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular pipes';
  birthDate = new Date();
}
