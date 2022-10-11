import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutuComponent } from './tutu/tutu.component';



@NgModule({
  declarations: [
    TutuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TutuComponent
  ]
})
export class TestModule { }
