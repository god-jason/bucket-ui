import {Routes} from '@angular/router';
import {DashComponent} from '../pages/dash/dash.component';
import {TableComponent} from '../pages/table/table.component';
import {TableEditComponent} from '../pages/table-edit/table-edit.component';
import {TableDetailComponent} from '../pages/table-detail/table-detail.component';
import {FunctionComponent} from '../pages/function/function.component';
import {FunctionEditComponent} from '../pages/function-edit/function-edit.component';
import {SettingComponent} from '../pages/setting/setting.component';
import {AdminComponent} from './admin.component';


export const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'dash'},
      {path: 'dash', component: DashComponent},
      {path: 'table', component: TableComponent},
      {path: 'table/create', component: TableEditComponent},
      {path: 'table/:id', component: TableDetailComponent},
      {path: 'table/:id/edit', component: TableEditComponent},
      {path: 'function', component: FunctionComponent},
      {path: 'function/create', component: FunctionEditComponent},
      {path: 'function/:id/edit', component: FunctionEditComponent},
      {path: 'setting/:item', component: SettingComponent},
    ]
  },
];
