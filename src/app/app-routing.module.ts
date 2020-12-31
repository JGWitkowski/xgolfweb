import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutScreenComponent } from './about-screen/about-screen.component';
import { ClubFittingScreenComponent } from './club-fitting-screen/club-fitting-screen.component';
import { ClubRepairComponent } from './club-repair/club-repair.component';
import { ContactScreenComponent } from './contact-screen/contact-screen.component';
import { CoursesScreenComponent } from './courses-screen/courses-screen.component';
import { DirectionsScreenComponent } from './directions-screen/directions-screen.component';
import { GiftcardsScreenComponent } from './giftcards-screen/giftcards-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { LessonsScreenComponent } from './lessons-screen/lessons-screen.component';
import { RatesScreenComponent } from './rates-screen/rates-screen.component';
import { VideoAnalysisScreenComponent } from './video-analysis-screen/video-analysis-screen.component';
import { XballComponent } from './xball/xball.component';
import { XplateScreenComponent } from './xplate-screen/xplate-screen.component';

const routes: Routes = [
  { path: "rates/simulator-rates", component: RatesScreenComponent },
  { path: "", component: HomeScreenComponent },
  { path: "rates/lessons", component: LessonsScreenComponent },
  { path: "rates/club-fitting", component: ClubFittingScreenComponent },
  { path: "rates/club-repair", component: ClubRepairComponent },
  { path: "rates/giftcards", component: GiftcardsScreenComponent },
  { path: "courses", component: CoursesScreenComponent },
  { path: "xplate", component: XplateScreenComponent},
  { path: "xball", component: XballComponent },
  { path: "video-analysis", component: VideoAnalysisScreenComponent },
  { path: "leagues", component: LeaguesComponent },
  { path: "about", component: AboutScreenComponent },
  { path: "contact/connect", component: ContactScreenComponent },
  { path: "contact/directions", component: DirectionsScreenComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
