import {Pipe} from "angular2/core";

@Pipe({ name: "initCaps" })
export class InitCapsPipe {

  public transform(text): string {
    return text;
  }

}
