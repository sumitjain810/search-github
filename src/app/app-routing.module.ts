import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'search', component: SearchComponent, title: 'Search' },
      { path: 'history', component: HistoryComponent, title: 'History' },
    ],
  },
  // {
  //   path: '',
  //   component: DashboardComponent,
  // },

  // { path: 'search', component: SearchComponent, title: 'Search' },
  // { path: 'history', component: HistoryComponent, title: 'History' },
  // {
  //   path: '',
  //   component: SearchComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// export const AppRoutingModule: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'rochem', component: RochemComponent },
//   {
//       path: '', component: AppComponent,
//       // canActivateChild: [AuthGuard],
//       children: [
//           {
//               path: '',
//               loadChildren: './home/home.module#HomeModule',
//           }
//       ]
//   }
// ];
