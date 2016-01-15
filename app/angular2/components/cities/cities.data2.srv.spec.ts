import {
  afterEach,
  beforeEach,
  ddescribe,
  describe,
  expect,
  iit,
  inject,
  injectAsync,
  it,
  xit
} from "angular2/testing";
import {Injector, provide} from "angular2/core";
import {MockBackend, MockConnection} from "angular2/src/http/backends/mock_backend";
import {
  BaseRequestOptions,
  ConnectionBackend,
  Request,
  RequestMethod,
  RequestOptions,
  Response,
  ResponseOptions,
  URLSearchParams,
  JSONP_PROVIDERS,
  HTTP_PROVIDERS,
  XHRBackend,
  JSONPBackend,
  Http,
  Jsonp
} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

describe("http", () => {
    let url = "http://foo.bar";
    let http: Http;
    let injector: Injector;
    let backend: MockBackend;
    let baseResponse;
    let jsonp: Jsonp;
    beforeEach(() => {
      injector = Injector.resolveAndCreate([
        BaseRequestOptions,
        MockBackend,
        provide(
            Http,
            {
              useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
                return new Http(backend, defaultOptions);
              },
              deps: [MockBackend, BaseRequestOptions]
            }),
        provide(
            Jsonp,
            {
              useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
                return new Jsonp(backend, defaultOptions);
              },
              deps: [MockBackend, BaseRequestOptions]
            })
      ]);
      http = injector.get(Http);
      jsonp = injector.get(Jsonp);
      backend = injector.get(MockBackend);
      baseResponse = new Response(new ResponseOptions({body: "base response"}));
    });

    afterEach(() => backend.verifyNoPendingRequests());

    describe("Http", () => {

      describe(".request()", () => {
        it("should return an Observable",
           () => { expect(http.request(url)).toBeAnInstanceOf(Observable); });


        it("should accept a fully-qualified request as its only parameter",
           inject([injectAsync], (async) => {
             backend.connections.subscribe(c => {
               expect(c.request.url).toBe("https://google.com");
               c.mockRespond(new Response(new ResponseOptions({body: "Thank you"})));
               async.done();
             });
             http.request(new Request(new RequestOptions({url: "https://google.com"})))
                 .subscribe((res) => {});
           }));

         });
       });
     });
