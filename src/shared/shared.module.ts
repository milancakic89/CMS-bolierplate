import { NgModule } from "@angular/core";
import { AuthGuard } from "./guards/auth-guard";
import { LocalTaskerService } from "./services/local-tasker.service";
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from "./components/modal/modal.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations:[
    HeaderComponent,
    ModalComponent,
    ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, ModalComponent],
  providers: [AuthGuard, LocalTaskerService]
})
export class SharedModule {}
