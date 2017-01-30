import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { IndicatorDirective } from './indicator.directive';
import { SetHtmlContentDirective } from './set-html-content.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TabsComponent, IndicatorDirective, SetHtmlContentDirective],
    exports:[TabsComponent]
})
export class TabsModule {
}
