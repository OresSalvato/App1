import { PersonComponent } from './person/person.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TranslatePipe } from './pipes/translate.pipe';

import { PostComponent } from './post/post.component';
import { CarouselobjComponent } from './carousel/carouselobj.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SlideComponent } from './carousel/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PostComponent,
    TranslatePipe,
    CarouselobjComponent,
    CarouselComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
