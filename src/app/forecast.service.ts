import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  apiKey: string = '7e97bc8fec5ff12e8b314c249f912d5a';
  URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/forecast?appid=${this.apiKey}&q=`;
  }

  getDaily(cityName: string) {
    return this.http.get(`${this.URI}${cityName}`);
  }
}