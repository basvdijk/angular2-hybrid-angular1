import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {City} from "./city.model";

@Injectable()
export class CitiesDataService {

  cities: any;

  constructor(http: Http) {

    // http://www.geonames.org/export/JSON-webservices.html
    http.get("http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=en&username=demo")

      // Retry 3 times when the request fails
      // .retry(3)

      // Call map on the response observable to get the parsed people object
      .map(res => res.json())

      // Subscribe to the observable to get the parsed cities object and attach it to the
      // component
      .subscribe(
        data => this.cities = data.geonames,
        err => this._logError(err),
        () => console.log("Downloading cities complete")
      );

  }

  private _logError(text) {
    console.log(text);
  };

  // get cities(): Array<City> {
  //   return this._cities;
  // }
}
