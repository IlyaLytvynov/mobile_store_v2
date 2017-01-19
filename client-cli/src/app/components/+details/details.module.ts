import { NgModule } from '@angular/core';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details.routing';
import { CoreModule } from '../../core/core.module';
import {SlideshowModule} from '../../widgets/slideshow/slideshow.module';
import {TabsModule} from '../../widgets/tabs/tabs.module';

@NgModule({
    imports: [
        DetailsRoutingModule,
        CoreModule,
        SlideshowModule,
        TabsModule
    ],
    declarations: [DetailsComponent]
})
export class DetailsModule {
}
