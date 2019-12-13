import { Component, ViewChild, ViewContainerRef, Compiler, ModuleWithComponentFactories, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { StamComponent } from './stam/stam.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('container', {read: ViewContainerRef})
  private _container : ViewContainerRef;

  title = 'routing2-tutorial';

  constructor(private _compiler : Compiler, private _resolver : ComponentFactoryResolver) {}

  lazyLoad = async () => {
    const module = await import('../settings2/settings2.module');
    const moduleAndFactories : ModuleWithComponentFactories<any> = await this._compiler.compileModuleAndAllComponentsAsync(module.Settings2Module);
    const factory : ComponentFactory<any> = moduleAndFactories.componentFactories.find((factory : ComponentFactory<any>) => factory.selector === 'app-modal');
    this._container.createComponent(factory);
  }

  createComponent = () => {
    const stamFactory : ComponentFactory<StamComponent> = this._resolver.resolveComponentFactory(StamComponent);
    this._container.createComponent(stamFactory);
  }
}
