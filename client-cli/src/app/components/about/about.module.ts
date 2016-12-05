import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRouting } from './about.routes';

@NgModule({
    imports: [
        CommonModule,
        AboutRouting
    ],
    declarations: [AboutComponent]
})
export class AboutModule {
}
