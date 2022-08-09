import { NgModule } from '@angular/core';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {CheckboxModule} from 'primeng/checkbox';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';


const PrimengComponents = [
  ProgressSpinnerModule,
  DataViewModule,
  ButtonModule,
  PanelModule,
  DropdownModule,
  DialogModule,
  InputTextModule,
  RatingModule,
  RippleModule,
  SidebarModule,
  SelectButtonModule,
  CheckboxModule,
  DividerModule,
  CardModule,
  InputNumberModule,

]

@NgModule({
  declarations: [],
  imports: [
    PrimengComponents
  ],
  exports: [ PrimengComponents ]
})
export class PrimengModule { }
