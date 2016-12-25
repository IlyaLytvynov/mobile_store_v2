import { NgModule } from '@angular/core';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details.routing';
import { CoreModule } from '../../core/core.module';
import {SlideshowModule} from '../../widgets/slideshow/slideshow.module';

@NgModule({
    imports: [
        DetailsRoutingModule,
        CoreModule,
        SlideshowModule
    ],
    declarations: [DetailsComponent]
})
export class DetailsModule {
}
