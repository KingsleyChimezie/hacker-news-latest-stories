import { NgModule } from '@angular/core';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

const PrimengComponents = [
  ProgressSpinnerModule
]

@NgModule({
  declarations: [],
  imports: [
    PrimengComponents
  ],
  exports: [ PrimengComponents ]
})
export class PrimengModule { }
