/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './navbar';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../app/app';
import * as import9 from '../../navigation/view-controller';
import * as import10 from '../../navigation/nav-controller';
import * as import11 from '@angular/core/src/linker/element_ref';
import * as import12 from '../../config/config';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '@angular/core/src/linker/query_list';
import * as import15 from '../button/button';
import * as import16 from '../icon/icon';
import * as import17 from '../button/button.ngfactory';
import * as import18 from '@angular/core/src/metadata/view';
var renderType_Navbar_Host:import0.RenderComponentType = null;
class _View_Navbar_Host0 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _Navbar_0_4:import3.Navbar;
  private _expr_0:any;
  private _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Navbar_Host0,renderType_Navbar_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ion-navbar',rootSelector,null);
    this.renderer.setElementAttribute(this._el_0,'class','toolbar');
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_Navbar0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Navbar_0_4 = new import3.Navbar(this.parentInjector.get(import8.App),this.parentInjector.get(import9.ViewController,null),this.parentInjector.get(import10.NavController,null),new import11.ElementRef(this._el_0),this.parentInjector.get(import12.Config),this.renderer);
    this._appEl_0.initComponent(this._Navbar_0_4,[],compView_0);
    compView_0.create(this._Navbar_0_4,this.projectableNodes,null);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Navbar) && (0 === requestNodeIndex))) { return this._Navbar_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Navbar_0_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_0_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_0,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_0_4.ngAfterViewInit(); } }
  }
}
function viewFactory_Navbar_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_Navbar_Host === null)) { (renderType_Navbar_Host = viewUtils.createRenderComponentType('',0,null,[],{})); }
  return new _View_Navbar_Host0(viewUtils,parentInjector,declarationEl);
}
export const NavbarNgFactory:import13.ComponentFactory<import3.Navbar> = new import13.ComponentFactory<import3.Navbar>('ion-navbar',viewFactory_Navbar_Host0,import3.Navbar);
const styles_Navbar:any[] = [];
var renderType_Navbar:import0.RenderComponentType = null;
class _View_Navbar0 extends import1.AppView<import3.Navbar> {
  _viewQuery_bbTxt_0:import14.QueryList<any>;
  _el_0:any;
  _el_1:any;
  private _appEl_1:import2.AppElement;
  _Button_1_4:import15.Button;
  _el_2:any;
  _el_3:any;
  _Icon_3_3:import16.Icon;
  _el_4:any;
  _el_5:any;
  private _expr_1:any;
  private _expr_2:any;
  private _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Navbar0,renderType_Navbar,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._viewQuery_bbTxt_0 = new import14.QueryList<any>();
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','toolbar-background');
    this._el_1 = this.renderer.createElement(parentRenderNode,'button',null);
    this.renderer.setElementAttribute(this._el_1,'class','back-button');
    this.renderer.setElementAttribute(this._el_1,'ion-button','bar-button');
    this._appEl_1 = new import2.AppElement(1,null,this,this._el_1);
    var compView_1:any = import17.viewFactory_Button0(this.viewUtils,this.injector(1),this._appEl_1);
    this._Button_1_4 = new import15.Button('bar-button',this.parentInjector.get(import12.Config),new import11.ElementRef(this._el_1),this.renderer);
    this._appEl_1.initComponent(this._Button_1_4,[],compView_1);
    this._el_2 = this.renderer.createElement(null,'span',null);
    this.renderer.setElementAttribute(this._el_2,'class','button-inner');
    this._el_3 = this.renderer.createElement(this._el_2,'ion-icon',null);
    this.renderer.setElementAttribute(this._el_3,'class','back-button-icon');
    this.renderer.setElementAttribute(this._el_3,'role','img');
    this._Icon_3_3 = new import16.Icon(this.parentInjector.get(import12.Config),new import11.ElementRef(this._el_3),this.renderer);
    this._el_4 = this.renderer.createElement(this._el_2,'span',null);
    this.renderer.setElementAttribute(this._el_4,'class','back-button-text');
    compView_1.create(this._Button_1_4,[[].concat([this._el_2])],null);
    this.renderer.projectNodes(parentRenderNode,import4.flattenNestedViewRenderNodes(this.projectableNodes[0]));
    this.renderer.projectNodes(parentRenderNode,import4.flattenNestedViewRenderNodes(this.projectableNodes[1]));
    this.renderer.projectNodes(parentRenderNode,import4.flattenNestedViewRenderNodes(this.projectableNodes[2]));
    this._el_5 = this.renderer.createElement(parentRenderNode,'div',null);
    this.renderer.setElementAttribute(this._el_5,'class','toolbar-content');
    this.renderer.projectNodes(this._el_5,import4.flattenNestedViewRenderNodes(this.projectableNodes[3]));
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_1,'click',this.eventHandler(this._handle_click_1_0.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._viewQuery_bbTxt_0.reset([new import11.ElementRef(this._el_4)]);
    this.context._bbTxt = this._viewQuery_bbTxt_0.first;
    this.init([],[
      this._el_0,
      this._el_1,
      this._el_2,
      this._el_3,
      this._el_4,
      this._el_5
    ]
    ,[disposable_0],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.Icon) && (3 === requestNodeIndex))) { return this._Icon_3_3; }
    if (((token === import15.Button) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._Button_1_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.context._bbIcon;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._Icon_3_3.name = currVal_2;
      this._expr_2 = currVal_2;
    }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._Button_1_4.ngAfterContentInit(); }
      this._Button_1_4.ngAfterContentChecked();
    }
    const currVal_1:any = this.context._hideBb;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_1,'hidden',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_3:any = this._Icon_3_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_3,'hide',currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Icon_3_3.ngOnDestroy();
  }
  private _handle_click_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.backButtonClick($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_Navbar0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.Navbar> {
  if ((renderType_Navbar === null)) { (renderType_Navbar = viewUtils.createRenderComponentType('/Users/dan/Dev/ionic2-build/src/components/navbar/navbar.ts class Navbar - inline template',4,import18.ViewEncapsulation.None,styles_Navbar,{})); }
  return new _View_Navbar0(viewUtils,parentInjector,declarationEl);
}