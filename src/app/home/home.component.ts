import { Component, OnInit } from '@angular/core';
import { ModalRequest, ModalService } from 'src/shared/components/modal/modal.service';
import { AuthService } from 'src/shared/services/auth.service';
import { LocalTaskerService } from 'src/shared/services/local-tasker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, public modalService: ModalService) { }

  get user(){ return this.authService.user}

  ngOnInit(): void {
    console.log(this.authService.user)
  }

  public openProject($event: any, id: string | number){
    console.log('trigered open project')
  }

  public edit($event: any, id: string | number){
    $event.stopPropagation();
  }

  public delete($event: any, id: string | number){
    $event.stopPropagation();
    const initialState: ModalRequest = {
      onConfirm: () =>{
        console.log('deleted with id')
      }
    }
    this.modalService.show('delete', 'Are you sure you want to delete?', 'This action can not be undone!', initialState)
  }



}
