import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginMainComponent } from "./login-main/login-main.component";

@NgModule({
  declarations: [LoginMainComponent],
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule]
})
export class LoginModule {}
