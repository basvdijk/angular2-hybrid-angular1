import {provide, Injector} from "angular2/core";
import {HTTP_PROVIDERS, XHRBackend, Response, ResponseOptions, BaseRequestOptions} from "angular2/http";
import {Http} from "angular2/http";
import {MockBackend} from "angular2/http/testing";
import {
  describe,
  expect,
  beforeEach,
  it,
  inject,
  injectAsync,
  beforeEachProviders
} from "angular2/testing";

import {CitiesDataService} from "./cities.data.srv";

describe("Service with Http injected", () => {

  beforeEachProviders(() => {
  [
    MockBackend,
    BaseRequestOptions,
    provide(
        Http,
           {
              useFactory: (backend, defaultOptions) => {
                return new Http(backend, defaultOptions);
         },
         deps: [MockBackend, BaseRequestOptions]
    }), CitiesDataService];
  });

  it("should respect your expectation",
    inject(
      [CitiesDataService, MockBackend],
      (CitiesDataService, mockBackend) => {

    //     let response = "Expected Response from HTTP service usually JSON format";
    //     let responseOptions = new ResponseOptions({body: response});
    // mockBackend.connections.subscribe(
    //     c => c.mockRespond(new Response(responseOptions)));
    //
    //     let res = CitiesDataService.getGeoData();
    //    expect(res).toEqual("your own expectation");
      }));

});

describe("CitiesDataService", () => {

  let injector;
  let backend;
  let service;

  beforeEach(() => {
    injector = Injector.resolveAndCreate([
      HTTP_PROVIDERS,
      MockBackend,  // comment it out, get the injector error
      provide(XHRBackend, {useClass: MockBackend}),
      CitiesDataService
    ]);

    backend = injector.get(MockBackend);
    service = injector.get(CitiesDataService);
  });

  it("should be defined", () => {
    service = injector.get(CitiesDataService);
    expect(service).toBeDefined();
  });

  it("should do stuff", () => {
    expect(service.doStuff()).toBe("Ok");
  });

  // describe("sample test", () => {
  //   beforeEachProviders(() => [CitiesDataService])
  //   it("should work!", inject([CitiesDataService], (service:CitiesDataService) => {
  //         /* crashes */
  //   }))
  // });



//  it("should get some data", inject([injectAsync], (async) => {
  // it("should get some data", () => {
  //
  //   let connection;
    // let injector = Injector.resolveAndCreate([
    //   MockBackend,
    //   provide(Http, {useFactory: (backend, defaultOptions) => {
    //     return new Http(backend, defaultOptions);
    //   }, deps: [MockBackend]})]);
  //   let http = injector.get(Http);
  //   let backend = injector.get(MockBackend);
  //   // Assign any newly-created connection to local variable
  //   backend.connections.subscribe(c => connection = c);
  //

    // var http = injector.get(Http);
    //
    // http.request("http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=en&username=demo").subscribe((res) => {
    //   expect(res.text()).toBe("awesome");
    //   async.done();
    // });
  //   connection.mockRespond(new Response(new ResponseOptions("awesome")));

  //  async.done();

  //     expect("test2").toBe("test2");
  //
  // });

  // it("should get some data", () => {
  //
  //   backend.connections.subscribe(connection => {
  //     connection.mockRespond(new Response(new ResponseOptions({body: { username: "test2", password: "test2"}})));
  //   });
  //
  //   service.getGeoData().subscribe((data) => {
  //
  //     console.log(data);
  //
  //     expect(data.username).toBe("test2");
  //     expect(data.password).toBe("test2");
  //   });
  // });

});
