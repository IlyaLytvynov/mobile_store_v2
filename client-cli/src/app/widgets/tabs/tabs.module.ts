import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { IndicatorDirective } from './indicator.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TabsComponent, IndicatorDirective],
    exports:[TabsComponent]
})
export class TabsModule {
}
