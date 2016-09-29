import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app.component';
import { HeroesComponent }  from './components/heroes/heroes.components'

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}