import { NgModule } from '@angular/core';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details.routing';

@NgModule({
    imports: [
        DetailsRoutingModule
    ],
    declarations: [DetailsComponent]
})
export class DetailsModule {
}
