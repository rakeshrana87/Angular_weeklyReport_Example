import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { WeeklyReportComponent } from './weeklyreport/weeklyreport.component';
import { routes } from './app.routes';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MingleComponent } from './mingle/mingle.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, SharedModule, CoreModule, RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  declarations: [AppComponent, AboutComponent, HomeComponent, WeeklyReportComponent, LoginComponent,MingleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
