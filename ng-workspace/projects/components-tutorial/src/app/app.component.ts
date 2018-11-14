import { Component, ViewEncapsulation, OnInit, ViewChild, ViewChildren, AfterViewInit, AfterViewChecked } from '@angular/core';
import { MessageService } from './message.service';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root', // '.app-root', '[app-root]'
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('childInstance') child : ChildComponent;

  title: string = 'hello';

  messageToChild = 'hello from parent';
  objToChild = {message: 'text from parent'}

  constructor(private _messageService : MessageService) {}

  ngOnInit() {
    setTimeout(() => {
      console.log('timer in parent change properties to son');
      // we will change the input properties to see the behaviour of ngOnChanges in child
      // this.messageToChild = 'second message from parent';
      this.objToChild = {message: 'second message'}; // like this we are changin reference
      // this.objToChild['message'] = 'second message'; // we keep the same reference

      this._messageService.messages$.next('new data from app component');
    }, 1000);
  }

  sendHello = () => {
    return 'hello from method from parent';
  }

  ngAfterViewInit(): void {
    // will be called when finished rendering me and my children in me
    // in this hook the ViewChild properties will be populated
  }

  ngAfterViewChecked(): void {
    // will be called multiple times
    // will be called after the view of my children is reflected with the changes
    // you will put here actions that should happen every change detection and depends on the children finishing their change detection
  }
}
