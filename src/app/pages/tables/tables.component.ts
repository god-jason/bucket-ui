import {Component} from '@angular/core';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';
import {NzCardComponent} from 'ng-zorro-antd/card';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzDropDownDirective, NzDropdownMenuComponent} from 'ng-zorro-antd/dropdown';
import {NzMenuDirective, NzMenuDividerDirective, NzMenuItemComponent} from 'ng-zorro-antd/menu';
import {RouterLink} from '@angular/router';
import {SmartRequestService} from '@god-jason/smart';
import {NzModalModule, NzModalService} from 'ng-zorro-antd/modal';
import {TableEditNameComponent} from '../table-edit-name/table-edit-name.component';
import {NzButtonComponent} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    NzRowDirective,
    NzColDirective,
    NzCardComponent,
    NzIconDirective,
    NzDropDownDirective,
    NzDropdownMenuComponent,
    NzMenuDirective,
    NzMenuItemComponent,
    RouterLink,
    NzMenuDividerDirective,
    NzModalModule,
    NzButtonComponent,
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {

  tables: any[] = []

  constructor(private rs: SmartRequestService, private ms: NzModalService) {
    this.load()
  }

  load() {
    this.rs.get("table/list").subscribe(res => {
      console.log(res)
      this.tables = res.data
    })
  }

  onRename(tab: any) {
    this.ms.create<TableEditNameComponent, any>({
      nzTitle: '重命名',
      nzContent: TableEditNameComponent,
      nzData: {id: tab.id},
    }).afterClose.subscribe(res=>{
      if (res) this.load()
    })
  }

  onCreate() {
    this.ms.create<TableEditNameComponent, any>({
      nzTitle: '创建',
      nzContent: TableEditNameComponent,
    }).afterClose.subscribe(res=>{
      if (res) this.load()
    })
  }
}
