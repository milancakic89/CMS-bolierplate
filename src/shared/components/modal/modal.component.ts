import { Component, Input, OnInit } from '@angular/core';
import { Modal, ModalRequest, ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  public message = '';
  public heading = '';

  public modalState: ModalRequest = {
    requestData: null,
    response: null,
    onConfirm: () => {},
    onClose: () => {}
  }

  @Input() modal: Modal = '';

  ngOnInit(): void {
    this.modalService.modal.subscribe(({ modal, heading, message, modalState }) =>{
        this.message = message;
        this.heading = heading;
        this.modal = modal;
        this.modalState = modalState;
    })
  }

  public confirm(){
    this.modalService.confirm(this.modalState)
  }

}
