import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';

const misModulos = [
  ButtonModule,
  CardModule,
  SidebarModule,
  ToastModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [
    misModulos
  ]
})
export class ModprimengModule { }
