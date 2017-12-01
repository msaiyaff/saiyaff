import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
