import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-temperature-two',
  templateUrl: './temperature-two.component.html',
  styleUrls: ['./temperature-two.component.scss']
})
export class TemperatureTwoComponent implements OnInit {

  location = { cityName: 'Lyon', countryCode: 'FR'};
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
