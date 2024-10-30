import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {SettingComponent} from './pages/setting/setting.component';
import {TableComponent} from './pages/table/table.component';
import {TableDetailComponent} from './pages/table-detail/table-detail.component';
import {TableEditComponent} from './pages/table-edit/table-edit.component';
import {DashComponent} from './pages/dash/dash.component';
import {FunctionComponent} from './pages/function/function.component';
import {FunctionEditComponent} from './pages/function-edit/function-edit.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path:'login', component: LoginComponent},
  {path:'dash', component: DashComponent},
  {path:'table', component: TableComponent},
  {path:'table/create', component: TableEditComponent},
  {path:'table/:id', component: TableDetailComponent},
  {path:'table/:id/edit', component: TableEditComponent},
  {path:'function', component: FunctionComponent},
  {path:'function/create', component: FunctionEditComponent},
  {path:'function/:id/edit', component: FunctionEditComponent},
  {path:'setting/:item', component: SettingComponent},
];
