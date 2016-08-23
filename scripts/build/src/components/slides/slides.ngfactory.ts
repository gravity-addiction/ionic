/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './slides';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/core/src/metadata/view';
var renderType_Slides_Host:import0.RenderComponentType = null;
class _View_Slides_Host0 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _Slides_0_4:import3.Slides;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Slides_Host0,renderType_Slides_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ion-slides',rootSelector,null);
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_Slides0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Slides_0_4 = new import3.Slides(new import8.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._Slides_0_4,[],compView_0);
    compView_0.create(this._Slides_0_4,this.projectableNodes,null);
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Slides) && (0 === requestNodeIndex))) { return this._Slides_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Slides_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Slides_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_Slides_Host === null)) { (renderType_Slides_Host = viewUtils.createRenderComponentType('',0,null,[],{})); }
  return new _View_Slides_Host0(viewUtils,parentInjector,declarationEl);
}
export const SlidesNgFactory:import9.ComponentFactory<import3.Slides> = new import9.ComponentFactory<import3.Slides>('ion-slides',viewFactory_Slides_Host0,import3.Slides);
const styles_Slides:any[] = [];
var renderType_Slides:import0.RenderComponentType = null;
class _View_Slides0 extends import1.AppView<import3.Slides> {
  _el_0:any;
  _el_1:any;
  _el_2:any;
  private _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Slides0,renderType_Slides,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','swiper-container');
    this._el_1 = this.renderer.createElement(this._el_0,'div',null);
    this.renderer.setElementAttribute(this._el_1,'class','swiper-wrapper');
    this.renderer.projectNodes(this._el_1,import4.flattenNestedViewRenderNodes(this.projectableNodes[0]));
    this._el_2 = this.renderer.createElement(this._el_0,'div',null);
    this.renderer.setElementAttribute(this._el_2,'class','swiper-pagination');
    this._expr_0 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._el_1,
      this._el_2
    ]
    ,[],[]);
    return null;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:boolean = !this.context.showPager;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_2,'hide',currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_Slides0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.Slides> {
  if ((renderType_Slides === null)) { (renderType_Slides = viewUtils.createRenderComponentType('/Users/dan/Dev/ionic2-build/src/components/slides/slides.ts class Slides - inline template',1,import10.ViewEncapsulation.None,styles_Slides,{})); }
  return new _View_Slides0(viewUtils,parentInjector,declarationEl);
}
var renderType_Slide_Host:import0.RenderComponentType = null;
class _View_Slide_Host0 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _Slide_0_4:import3.Slide;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Slide_Host0,renderType_Slide_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ion-slide',rootSelector,null);
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_Slide0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Slide_0_4 = new import3.Slide(new import8.ElementRef(this._el_0),this.parentInjector.get(import3.Slides));
    this._appEl_0.initComponent(this._Slide_0_4,[],compView_0);
    compView_0.create(this._Slide_0_4,this.projectableNodes,null);
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Slide) && (0 === requestNodeIndex))) { return this._Slide_0_4; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._Slide_0_4.ngOnDestroy();
  }
}
function viewFactory_Slide_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_Slide_Host === null)) { (renderType_Slide_Host = viewUtils.createRenderComponentType('',0,null,[],{})); }
  return new _View_Slide_Host0(viewUtils,parentInjector,declarationEl);
}
export const SlideNgFactory:import9.ComponentFactory<import3.Slide> = new import9.ComponentFactory<import3.Slide>('ion-slide',viewFactory_Slide_Host0,import3.Slide);
const styles_Slide:any[] = [];
var renderType_Slide:import0.RenderComponentType = null;
class _View_Slide0 extends import1.AppView<import3.Slide> {
  _el_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Slide0,renderType_Slide,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','slide-zoom');
    this.renderer.projectNodes(this._el_0,import4.flattenNestedViewRenderNodes(this.projectableNodes[0]));
    this.init([],[this._el_0],[],[]);
    return null;
  }
}
export function viewFactory_Slide0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.Slide> {
  if ((renderType_Slide === null)) { (renderType_Slide = viewUtils.createRenderComponentType('/Users/dan/Dev/ionic2-build/src/components/slides/slides.ts class Slide - inline template',1,import10.ViewEncapsulation.None,styles_Slide,{})); }
  return new _View_Slide0(viewUtils,parentInjector,declarationEl);
}