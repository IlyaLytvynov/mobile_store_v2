import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';

import { CatalogModule } from './components/catalog/catalog.module';
import { AboutModule } from './components/about/about.module';
import { PurchasesModule } from './components/purchases/purchases.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CatalogModule,
        AboutModule,
        CoreModule,
        AppRoutingModule,
        PurchasesModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule {
}
