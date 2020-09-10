import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomeComponent, HeaderComponent]
})
export class RootModule { }
