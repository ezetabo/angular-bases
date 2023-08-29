import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { addCharaterComponent } from './components/add-charater/add-charater.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    addCharaterComponent
  ], exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
