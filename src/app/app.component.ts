import { Component } from '@angular/core';
import { navigation } from 'src/shared/config/navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get navigation() { return navigation };

  public isNavOpen = true;

  public openNav($event: any){
    $event.preventDefault();
  }
}
