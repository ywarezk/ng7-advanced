import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  tasks : Observable<any[]>;
  searchStream : Subject<string> = new Subject();

  constructor(private _http: HttpClient) {}

  async ngOnInit() {
    this.tasks = this.searchStream.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap((searchAfterFillter: string) => this._http.get<any[]>(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchAfterFillter}`))      
    );
    
    // this.searchStream.subscribe(() => {
    //   observableother1.subscribe(( => {
    //     observableother2.subscribe(( => {
        
    //     }))  
    //   }))
    // })

    // this.tasks = await this.searchStream.pipe(
    //   debounceTime(1000),
    //   distinctUntilChanged(),
    //   mergeMap((searchAfterFillter: string) => this._http.get<any[]>(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchAfterFillter}`))      
    // ).toPromise()
  }
  
  /**
   * every time the user types text in the input
   */
  search = (event) => {
    const searchString : string = event.target.value;
    // console.log(searchString);

    this.searchStream.next(searchString);


    // call the server with search string
    
  }

}
