import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HttpModule } from '@angular/http';
import { PhonesModel } from './models/phones.model';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartService } from './services/cart.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [
        CoreComponent,
        NavbarComponent,
    ],
    providers: [PhonesModel, CartService],
    exports: [NavbarComponent]
})
export class CoreModule {
}
