import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})

export class VisitComponent implements OnInit {

  location = { cityName: 'Singapore', countryCode: 'sg' };
  weather = undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather(this.location.cityName, this.location.countryCode);
  }

  getWeather(cityName: string, countryCode: string) {
    this.weatherService
      .getWeather(cityName, countryCode)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    this.getWeather(cityName.value, countryCode.value);
    cityName.focus();
  }

}
