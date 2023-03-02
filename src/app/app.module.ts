import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScholarshipsComponent } from './components/scholarships/scholarships.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ScholarshipComponent } from './components/scholarship/scholarship.component';
import { ModalComponent } from './components/modal/modal.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { FloatingActionButtonComponent } from './components/floating-action-button/floating-action-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrendingScholarshipsComponent } from './components/trending-scholarships/trending-scholarships.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonComponent } from './components/general/button/button.component';
import { SmallTextComponent } from './components/general/small-text/small-text.component';
import { BoldTextComponent } from './components/general/bold-text/bold-text.component';
import { RegisterComponent } from './components/register/register.component';
import { RegularBtnComponent } from './components/buttons/regular-btn/regular-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    ScholarshipsComponent,
    HeaderComponent,
    SearchBarComponent,
    CarouselComponent,
    ScholarshipComponent,
    ModalComponent,
    SocialMediaComponent,
    FloatingActionButtonComponent,
    FooterComponent,
    TrendingScholarshipsComponent,
    FiltersComponent,
    FormComponent,
    LoginComponent,
    ButtonComponent,
    SmallTextComponent,
    BoldTextComponent,
    RegisterComponent,
    RegularBtnComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
