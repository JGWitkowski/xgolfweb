import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { RatesScreenComponent } from './rates-screen/rates-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LessonsScreenComponent } from './lessons-screen/lessons-screen.component';
import { ClubFittingScreenComponent } from './club-fitting-screen/club-fitting-screen.component';
import { ClubRepairComponent } from './club-repair/club-repair.component';
import { GiftcardsScreenComponent } from './giftcards-screen/giftcards-screen.component';
import { CoursesScreenComponent } from './courses-screen/courses-screen.component';
import { XplateScreenComponent } from './xplate-screen/xplate-screen.component';
import { XballComponent } from './xball/xball.component';
import { VideoAnalysisScreenComponent } from './video-analysis-screen/video-analysis-screen.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { AboutScreenComponent } from './about-screen/about-screen.component';
import { ContactScreenComponent } from './contact-screen/contact-screen.component';
import { DirectionsScreenComponent } from './directions-screen/directions-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    RatesScreenComponent,
    HomeScreenComponent,
    LessonsScreenComponent,
    ClubFittingScreenComponent,
    ClubRepairComponent,
    GiftcardsScreenComponent,
    CoursesScreenComponent,
    XplateScreenComponent,
    XballComponent,
    VideoAnalysisScreenComponent,
    LeaguesComponent,
    AboutScreenComponent,
    ContactScreenComponent,
    DirectionsScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
