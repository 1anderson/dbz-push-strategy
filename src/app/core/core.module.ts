import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { RootModule } from './components/root/root.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RootModule,
    SharedModule
  ]
})
export class CoreModule { }
