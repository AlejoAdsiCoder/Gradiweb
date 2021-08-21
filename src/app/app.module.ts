import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { BannerComponent } from './components/banner/banner.component';
import { MainWeatherComponent } from './components/main-weather/main-weather.component';
import { ListWeatherComponent } from './components/list-weather/list-weather.component';
import { VisitComponent } from './components/visit/visit.component';
import { VisitsComponent } from './components/visits/visits.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { ForecastService } from './forecast.service';
import { TemperatureTwoComponent } from './components/temperature-two/temperature-two.component';
// import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faMap as farStar } from '@fortawesome/free-regular-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MainWeatherComponent,
    ListWeatherComponent,
    VisitComponent,
    VisitsComponent,
    TemperatureComponent,
    TemperatureTwoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WeatherService,
    ForecastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  // constructor(library: FaIconLibrary) {
  //   library.addIcons(fasMap);
  // }
}
