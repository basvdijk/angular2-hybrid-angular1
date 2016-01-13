import {Component, View} from "angular2/core";
import {Injectable} from "angular2/core";
import {TasksDataService} from "./tasks.data.srv";


@Component({
    selector: "tasks",
    providers: [TasksDataService] // this was called injectables before alpha 42
})

@View({
    templateUrl: "../app/angular2/components/tasks/tasks.html",
})

@Injectable()
export class Tasks {

  tasksVariable: Array<any>;
  tasksServiceData: Array<any>;

  constructor(public tasksDataService: TasksDataService) {

    this.tasksServiceData = tasksDataService.tasks;

    this.tasksVariable = [
      "task 1",
      "task 2",
      "task 3"
    ];


  }

}
