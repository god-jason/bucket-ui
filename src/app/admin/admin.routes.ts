import {Routes} from '@angular/router';
import {DashComponent} from '../pages/dash/dash.component';
import {TablesComponent} from '../pages/tables/tables.component';
import {TableEditComponent} from '../pages/table-edit/table-edit.component';
import {TableDetailComponent} from '../pages/table-detail/table-detail.component';
import {FunctionsComponent} from '../pages/functions/functions.component';
import {FunctionEditComponent} from '../pages/function-edit/function-edit.component';
import {SettingComponent} from '../pages/setting/setting.component';
import {AdminComponent} from './admin.component';
import {TableEditFieldsComponent} from '../pages/table-edit-fields/table-edit-fields.component';
import {TableEditJsonComponent} from '../pages/table-edit-json/table-edit-json.component';
import {TableEditJsComponent} from '../pages/table-edit-js/table-edit-js.component';
import {TableEditAccumulationsComponent} from '../pages/table-edit-accumulations/table-edit-accumulations.component';
import {TableEditInfoComponent} from '../pages/table-edit-info/table-edit-info.component';


export const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'dash'},
      {path: 'dash', component: DashComponent},
      {path: 'table', component: TablesComponent},
      {path: 'table/create', component: TableEditComponent},
      {path: 'table/:id', component: TableDetailComponent},
      {
        path: 'table/:id/edit', component: TableEditComponent, children: [
          {path: '', pathMatch: 'full', redirectTo: 'info'},
          {path: 'info', component: TableEditInfoComponent},
          {path: 'fields', component: TableEditFieldsComponent},
          {path: 'accumulations', component: TableEditAccumulationsComponent},
          {path: 'json', component: TableEditJsonComponent},
          {path: 'js', component: TableEditJsComponent},
        ]
      },
      {path: 'function', component: FunctionsComponent},
      {path: 'function/create', component: FunctionEditComponent},
      {path: 'function/:id/edit', component: FunctionEditComponent},
      {path: 'setting/:item', component: SettingComponent},
    ]
  },
];
