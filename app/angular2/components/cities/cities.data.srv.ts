import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {City} from "./city";
import "rxjs/add/operator/map"; // https://github.com/angular/angular/issues/5632

@Injectable()
export class CitiesDataService {

  public cities: any;
  public error: string;

  constructor(public http: Http) {

    // http://www.geonames.org/export/JSON-webservices.html
    http.get("http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=en&username=demo")

      // Retry 3 times when the request fails
      // .retry(3)

      // Call map on the response observable to get the parsed people object
      .map(res => res.json())

      // Subscribe to the observable to get the parsed cities object and attach it to the
      // component
      .subscribe(
        data => this._processData(data),
        err => this._logError(err),
        () => console.log("Downloading cities complete")
      );
  }

  private _processData(data): void {

    if (data.status) {
      this.error = data.status.message;
    } else {
      this.cities = data.geonames;
    }

  }

  private _logError(text) {
    console.log(text);
  };

  public doStuff(): string {
    return "Ok";
  }

  public getGeoData() {

    return this.http.get("http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=en&username=demo")
      .map((res) => res.json());

  }

  // get cities(): Array<City> {
  //   return this._cities;
  // }
}
