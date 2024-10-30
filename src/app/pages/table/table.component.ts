import { Component } from '@angular/core';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';
import {NzCardComponent} from 'ng-zorro-antd/card';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzDropDownDirective, NzDropdownMenuComponent} from 'ng-zorro-antd/dropdown';
import {NzMenuDirective, NzMenuItemComponent} from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NzRowDirective,
    NzColDirective,
    NzCardComponent,
    NzIconDirective,
    NzDropDownDirective,
    NzDropdownMenuComponent,
    NzMenuDirective,
    NzMenuItemComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  tables = [
    {name:"test1", label:"测试表1"},
    {name:"test2", label:"测试表2"},
    {name:"test3", label:"测试表3"},
    {name:"test4", label:"测试表4"},
    {name:"test5", label:"测试表5"},
    {name:"test6", label:"测试表6"},
    {name:"test7", label:"测试表7"},
  ]
}
