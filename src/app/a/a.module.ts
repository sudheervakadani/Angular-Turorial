import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AComponent } from './a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule

  ]
})
export class AModule { }
