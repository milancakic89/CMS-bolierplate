import { Component, OnInit } from '@angular/core';
import { LocalTaskerService } from 'src/shared/services/local-tasker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private localTaskerService: LocalTaskerService) { }

  ngOnInit(): void {
    console.log()
  }

}
