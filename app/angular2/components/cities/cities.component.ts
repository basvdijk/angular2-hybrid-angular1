import {Pipe, Component, View} from "angular2/core";
import {Injectable} from "angular2/core";
import {CitiesDataService} from "./cities.data.srv";

@Component({
    selector: "cities",
    providers: [CitiesDataService] // this was called injectables before alpha 42
})

@View({
    templateUrl: "../app/angular2/components/cities/cities.html",
})

@Injectable()
export class Cities {

  cities: Array<any>;
  cds: any;

  constructor(public citiesDataService: CitiesDataService) {

    this.cities = [];
    this.cds = citiesDataService;

  }

  doStuff(): string {
    return "Ok";
  }

}
