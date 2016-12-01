import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogRouting } from './catalog.routes';

@NgModule({
  imports: [
    CommonModule,
    CatalogRouting
  ],
  declarations: [CatalogComponent]
})
export class CatalogModule { }
