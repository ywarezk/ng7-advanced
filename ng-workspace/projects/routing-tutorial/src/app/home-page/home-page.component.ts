import { Component, ComponentFactory, OnInit, Compiler, ModuleWithComponentFactories, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  template: `
    <p>
      home-page works!
    </p>
    <button (click)="openLogin()">Open login</button>
    <button (click)="openChangePassword()">Open change password</button>

    <div #container>
    </div>
  `,
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef}) private _container: ViewContainerRef

  constructor(private _router: Router, private _compiler: Compiler) { 
    this.openChangePassword = this.openChangePassword.bind(this);
  }

  ngOnInit() {
  }

  openLogin = () => {
    // open the login modal
    // without showing navigation change
    this._router.navigate([{outlets: {popups: ['popups', 'login']}}], {skipLocationChange: true});
    // this._router.navigateByUrl('/settings/user');
  }

  async openChangePassword() {
    // lazy load our change password component
    // without using the router

    const module = await import('../../modals/modals.module');
    const moduleWithComponents: ModuleWithComponentFactories<any> = await this._compiler.compileModuleAndAllComponentsAsync(module.ModalsModule);
    const componentFactories = moduleWithComponents.componentFactories;
    const appChangePasswordFactory: ComponentFactory<any> = componentFactories.find((factory: ComponentFactory<any>) => {
      return factory.selector === 'app-change-password';
    });
    this._container.createComponent(appChangePasswordFactory);
  }

}
