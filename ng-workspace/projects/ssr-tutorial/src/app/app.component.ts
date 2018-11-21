import { Component, OnInit, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ssr-tutorial';

  constructor(@Inject(PLATFORM_ID) platformId : Object, private _render : Renderer2) {
    if(isPlatformBrowser(platformId)) {
      $('body').addClass('hello-world');
    }

    // _render.addClass()
    
  }

  ngOnInit() {
    
  }
}
