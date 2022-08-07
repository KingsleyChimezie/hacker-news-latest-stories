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

const PrimengComponents = [
  ProgressSpinnerModule,
  DataViewModule,
  ButtonModule,
  PanelModule,
  DropdownModule,
  DialogModule,
  InputTextModule,
  RatingModule,
  RippleModule
]

@NgModule({
  declarations: [],
  imports: [
    PrimengComponents
  ],
  exports: [ PrimengComponents ]
})
export class PrimengModule { }
