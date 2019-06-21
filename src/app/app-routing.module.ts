import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthenticationGuard } from "@app/core";
import { Shell } from "@app/shell/shell.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "temp",
    pathMatch: "full"
  },
  // {
  //   path: "temp",
  //   loadChildren: () => import("./temp/temp.module").then(m => m.TempModule),
  //   canActivate: [AuthenticationGuard],
  //   // Reuse ShellComponent instance when navigating between child views
  //   data: { reuse: true }
  // },
  Shell.childRoutes([
    {
      path: "temp",
      loadChildren: () => import("./temp/temp.module").then(m => m.TempModule)
    }
  ]),
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
    // Reuse ShellComponent instance when navigating between child views
  },
  {
    path: "**",
    redirectTo: "temp"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
