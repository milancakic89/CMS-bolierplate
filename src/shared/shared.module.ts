import { NgModule } from "@angular/core";
import { AuthGuard } from "./guards/auth-guard";
import { LocalTaskerService } from "./services/local-tasker.service";

@NgModule({
  declarations:[],
  imports: [],
  exports: [],
  providers: [AuthGuard, LocalTaskerService]
})
export class SharedModule {}
