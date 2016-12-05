import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HttpModule } from '@angular/http';
import { PhonesModel } from './models/phones.model';


@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [
        CoreComponent,
    ],
    providers: [PhonesModel],
    exports: []
})
export class CoreModule {
}
