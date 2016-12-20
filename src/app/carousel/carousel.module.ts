// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { CarouselobjComponent } from './carouselobj.component';
import { CarouselComponent } from './carousel.component';
import { SlideComponent } from './slide.component';

@NgModule({
    imports: [

    ],
    declarations: [
        CarouselobjComponent, CarouselComponent, SlideComponent
    ],
    exports: [
        CarouselobjComponent,
    ]
})
export class CarouselobjModule {

}
