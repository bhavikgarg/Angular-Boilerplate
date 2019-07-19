import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthenticationGuard } from "@app/core";
import { ShellComponent } from "./shell/shell.component";
const routes: Routes = [
  {
    path: "",
    component: ShellComponent,
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthenticationGuard],

    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
      },
      {
        path: "temp",
        loadChildren: () => import("./temp/temp.module").then(m => m.TempModule)
      }
    ],
    // Reuse ShellComponent instance when navigating between child views
    data: { reuse: true }
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
    // Reuse ShellComponent instance when navigating between child views
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
