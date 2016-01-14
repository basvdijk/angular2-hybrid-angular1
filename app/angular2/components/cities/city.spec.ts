import {City} from "./city";

describe("City", () => {

  it("has name given in the constructor", () => {
    let city = new City("Amsterdam");
    expect(city.name).toEqual("Amsterdam");
  });

  it("has the default test value set to test", () => {
    let city = new City("Amsterdam");
    expect(city.test).toEqual("test");
  });

});
