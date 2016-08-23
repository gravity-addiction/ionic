/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './radio-button';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../../util/form';
import * as import9 from '../item/item';
import * as import10 from './radio-group';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../button/button';
import * as import13 from '../button/button.ngfactory';
import * as import14 from '../../config/config';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/core/src/metadata/view';
var renderType_RadioButton_Host:import0.RenderComponentType = null;
class _View_RadioButton_Host0 extends import1.AppView<any> {
  _el_0:any;
  private _appEl_0:import2.AppElement;
  _RadioButton_0_4:import3.RadioButton;
  private _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_RadioButton_Host0,renderType_RadioButton_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ion-radio',rootSelector,null);
    this._appEl_0 = new import2.AppElement(0,null,this,this._el_0);
    var compView_0:any = viewFactory_RadioButton0(this.viewUtils,this.injector(0),this._appEl_0);
    this._RadioButton_0_4 = new import3.RadioButton(this.parentInjector.get(import8.Form),this.parentInjector.get(import9.Item,null),this.parentInjector.get(import10.RadioGroup,null));
    this._appEl_0.initComponent(this._RadioButton_0_4,[],compView_0);
    compView_0.create(this._RadioButton_0_4,this.projectableNodes,null);
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[disposable_0],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.RadioButton) && (0 === requestNodeIndex))) { return this._RadioButton_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._RadioButton_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this._RadioButton_0_4._disabled;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_0,'radio-disabled',currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RadioButton_0_4.ngOnDestroy();
  }
  private _handle_click_0_0($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RadioButton_0_4._click($event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_RadioButton_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_RadioButton_Host === null)) { (renderType_RadioButton_Host = viewUtils.createRenderComponentType('',0,null,[],{})); }
  return new _View_RadioButton_Host0(viewUtils,parentInjector,declarationEl);
}
export const RadioButtonNgFactory:import11.ComponentFactory<import3.RadioButton> = new import11.ComponentFactory<import3.RadioButton>('ion-radio',viewFactory_RadioButton_Host0,import3.RadioButton);
const styles_RadioButton:any[] = [];
var renderType_RadioButton:import0.RenderComponentType = null;
class _View_RadioButton0 extends import1.AppView<import3.RadioButton> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  private _appEl_5:import2.AppElement;
  _Button_5_4:import12.Button;
  _text_6:any;
  private _expr_0:any;
  private _expr_1:any;
  private _expr_2:any;
  private _expr_3:any;
  private _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_RadioButton0,renderType_RadioButton,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',null);
    this.renderer.setElementAttribute(this._el_0,'class','radio-icon');
    this._text_1 = this.renderer.createText(this._el_0,' ',null);
    this._el_2 = this.renderer.createElement(this._el_0,'div',null);
    this.renderer.setElementAttribute(this._el_2,'class','radio-inner');
    this._text_3 = this.renderer.createText(this._el_0,' ',null);
    this._text_4 = this.renderer.createText(parentRenderNode,' ',null);
    this._el_5 = this.renderer.createElement(parentRenderNode,'button',null);
    this.renderer.setElementAttribute(this._el_5,'class','item-cover');
    this.renderer.setElementAttribute(this._el_5,'ion-button','item-cover');
    this.renderer.setElementAttribute(this._el_5,'role','radio');
    this.renderer.setElementAttribute(this._el_5,'type','button');
    this._appEl_5 = new import2.AppElement(5,null,this,this._el_5);
    var compView_5:any = import13.viewFactory_Button0(this.viewUtils,this.injector(5),this._appEl_5);
    this._Button_5_4 = new import12.Button('item-cover',this.parentInjector.get(import14.Config),new import15.ElementRef(this._el_5),this.renderer);
    this._appEl_5.initComponent(this._Button_5_4,[],compView_5);
    this._text_6 = this.renderer.createText(null,' ',null);
    compView_5.create(this._Button_5_4,[[].concat([this._text_6])],null);
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6
    ]
    ,[],[]);
    return null;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.Button) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Button_5_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._Button_5_4.ngAfterContentInit(); }
      this._Button_5_4.ngAfterContentChecked();
    }
    const currVal_0:any = this.context._checked;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementClass(this._el_0,'radio-checked',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.context.id;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_5,'id',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context._checked;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementAttribute(this._el_5,'aria-checked',((currVal_2 == null)? null: currVal_2.toString()));
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this.context._labelId;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementAttribute(this._el_5,'aria-labelledby',((currVal_3 == null)? null: currVal_3.toString()));
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.context._disabled;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementAttribute(this._el_5,'aria-disabled',((currVal_4 == null)? null: currVal_4.toString()));
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_RadioButton0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.RadioButton> {
  if ((renderType_RadioButton === null)) { (renderType_RadioButton = viewUtils.createRenderComponentType('/Users/dan/Dev/ionic2-build/src/components/radio/radio-button.ts class RadioButton - inline template',0,import16.ViewEncapsulation.None,styles_RadioButton,{})); }
  return new _View_RadioButton0(viewUtils,parentInjector,declarationEl);
}