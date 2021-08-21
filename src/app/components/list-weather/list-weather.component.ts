import { Component, OnInit } from '@angular/core';
import { ForecastClass } from 'src/app/forecast-class.model';
import { ForecastService } from '../../forecast.service';

@Component({
  selector: 'app-list-weather.',
  templateUrl: './list-weather.component.html',
  styleUrls: ['./list-weather.component.scss']
})
export class ListWeatherComponent implements OnInit {

  location = { cityName: 'Bogota'};
  forecast: any = [];

  constructor(private forecastService: ForecastService) { }

  ngOnInit() {

    // this.getDaily(this.location.cityName);
    this.forecastService.getDaily(this.location.cityName).subscribe(res=>{
      this.futureForecast(res);
    })
  }

  // getDaily(cityName: string) {
  //   this.forecastService
  //     .getDaily(cityName)
  //     .subscribe(
  //       res => {
  //         // console.log("pronostico");
  //         // console.log(res);
  //         // this.forecast = res;
  //         this.futureForecast(res)
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  // }

  futureForecast(result: any) {
    for(let i = 0; i < result.list.length; i =  i + 8) {

      var details = new ForecastClass();
      
      details.date = result.list[i].dt_txt;
      // details.weather = result.list[i].weather[0].description;
      // for(var key in result.list[i]) {
      //   for (var j=0; j< result.list[i][key].length; j++) {
      //     this.forecast.push(result.list[i][key][j]);
      //   }
      // }
      this.forecast.push(result.list[i]);
    }
    console.log("pronostico");
    console.log(this.forecast)
  }

  // submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
  //   this.getDaily(cityName.value, countryCode.value);
  //   cityName.focus();
  // }

}
