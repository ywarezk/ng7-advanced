import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, ChangeDetectionStrategy, Output, EventEmitter, ContentChild, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {
  @Input('message') public stamMessage: string;
  @Input() public msgObj: any;
  @Input('iwantToKnowWhenChanging') set thisWillRunWhenPropertyChange(value : string) {
    // add behaviour that will happen when input change from parent only to this property
    this.messageToChange = value;
  } 

  @Output('sendHello') helloEvent : EventEmitter<string> = new EventEmitter()
  // @Input() public message: string;
  title = 'stam'

  messageToChange : string = '';

  @ContentChild('instanceOfMe') childInstance : ChildComponent;

  ngOnChanges(changes: SimpleChanges) {
    console.log('this lifecycle hook will be called when @Input properties change');
    // will compare the @Input by reference
  }

  ngOnInit() {
    console.log('In this lifecycle hook Im gurenteed that the input properties are populated');

    this._messageService.messages$.subscribe((msg : string) => {
      this.title = msg;
    })
  }

  ngDoCheck() {
    console.log('will run every time CD, you can override angular decision if to repaint the component');
  }

  sendEventToParent = () => {
    this.helloEvent.emit('message from child')
  }

  messageFromTemplateVar = () => {
    return 'hello from TRV';
  }

  constructor(private _messageService : MessageService) { }

  ngAfterContentInit() {
    // when the stuff transformed in transclusion are placed in my view
    // @ContentChild will be populated
    // will be called once.
    // init stuff the depends on transclusion being placed
  }

  ngAfterContentChecked() {
    // will be called many times
    // when transclusion elements are updated
  }

  ngOnDestroy() {
    // will be called when angular removes our component
    // this is the place to cleanup stuff.
  }

}
