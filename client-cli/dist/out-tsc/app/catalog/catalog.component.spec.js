import { async, TestBed } from '@angular/core/testing';
import { CatalogComponent } from './catalog.component';
describe('CatalogComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CatalogComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CatalogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/IlyaLitvinov/Projects/mobile_store/client-cli/src/app/catalog/catalog.component.spec.js.map