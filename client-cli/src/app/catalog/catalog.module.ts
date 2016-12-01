import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogRouting } from './catalog.routes';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CatalogRouting,
    SharedModule
  ],
  declarations: [CatalogComponent]
})
export class CatalogModule { }
