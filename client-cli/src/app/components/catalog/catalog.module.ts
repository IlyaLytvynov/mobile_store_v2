import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogRouting } from './catalog.routes';
import { ItemComponent } from './components/item/item.component';

@NgModule({
    imports: [
        CommonModule,
        CatalogRouting
    ],
    declarations: [CatalogComponent, ItemComponent],
    providers: []
})
export class CatalogModule {
}
