import {Component} from '@angular/core';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';
import {NzCardComponent} from 'ng-zorro-antd/card';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzDropDownDirective, NzDropdownMenuComponent} from 'ng-zorro-antd/dropdown';
import {NzMenuDirective, NzMenuDividerDirective, NzMenuItemComponent} from 'ng-zorro-antd/menu';
import {RouterLink} from '@angular/router';
import {SmartRequestService} from '@god-jason/smart';

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
    NzMenuDividerDirective
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {

  tables: any[] = []

  constructor(private rs: SmartRequestService) {
    this.load()
  }

  load() {
    this.rs.get("table/list").subscribe(res => {
      console.log(res)
      this.tables = res.data
    })
  }
}
