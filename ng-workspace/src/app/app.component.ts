import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-workspace';
  json: any = [];

  constructor(private _http: HttpClient) {}

  async ngOnInit() {
    try {
      this.json = await this._http.get('https://nztodo.herokuapp.com/api/task/?format=json').toPromise()
    } catch(err) {
      
    }
    
  }
}
