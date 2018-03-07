import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: Http) { }
  apiValues: string[] = [];
  bikeTypes: string[] = [];
  ngOnInit() {
    this._httpService.get('/api/values/GetBikes').subscribe(values => {
      this.apiValues = values.json() as string[];
    });

    this._httpService.get('/api/values/GetBikeTypes').subscribe(types => {
      this.bikeTypes = types.json() as string[];
    });
  }
}
