import { Injectable } from "@angular/core";

@Injectable()
export class LocalTaskerService {

  get user(){
    return {
      projects: [
        {
          id: 0,
          name: 'My first project',
          short_description: 'Edit me by clicking on edit button',
          description: '',
        }
      ]
    }
  }
}
