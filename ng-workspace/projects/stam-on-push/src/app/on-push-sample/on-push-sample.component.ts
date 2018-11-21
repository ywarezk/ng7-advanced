import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-on-push-sample',
  templateUrl: './on-push-sample.component.html',
  styleUrls: ['./on-push-sample.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushSampleComponent implements OnInit {
  hello$ : Observable<string> = of('hello world').pipe(
    delay(1000)
  );
  title : string = '';

  constructor(private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.hello$.subscribe((hello : string) => {
      this.title = hello;
      this._cd.detectChanges();
    })
  }

}
