import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { finalize } from "rxjs/operators";

import { environment } from "@env/environment";
import { Logger, AuthenticationService } from "@app/core";
import { CredentialsService } from "@app/core/authentication/credentials.service";

const log = new Logger("Login");

@Component({
  selector: "app-login-main",
  templateUrl: "./login-main.component.html",
  styleUrls: ["./login-main.component.css"]
})
export class LoginMainComponent implements OnInit {
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService
  ) {
    if (this.credentialsService.isAuthenticated()) {
      log.debug("User is already logged in, redirecting to main page");
      this.router.navigate(["/"], {
        replaceUrl: true
      });
    }
    this.createForm();
  }

  ngOnInit() {}

  ngOnDestroy() {}

  login() {
    this.isLoading = true;
    const login$ = this.authenticationService.login(this.loginForm.value);
    login$
      .pipe(
        finalize(() => {
          this.loginForm.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        credentials => {
          log.debug(`${credentials.username} successfully logged in`);
          this.router.navigate(
            [this.route.snapshot.queryParams.redirect || "/"],
            { replaceUrl: true }
          );
        },
        error => {
          log.debug(`Login error: ${error}`);
          this.error = error;
        }
      );
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      remember: true
    });
  }
}
