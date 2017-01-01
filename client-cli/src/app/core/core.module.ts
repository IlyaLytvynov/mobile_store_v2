import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HttpModule } from '@angular/http';
import { PhonesService } from './services/phones.service';
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
    providers: [PhonesService, CartService],
    exports: [NavbarComponent]
})
export class CoreModule {
}
