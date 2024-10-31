import {Component, OnInit, ViewChild} from '@angular/core';
import {SmartEditorComponent, SmartField, SmartRequestService} from '@god-jason/smart';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-table-edit-fields',
  standalone: true,
  imports: [
    SmartEditorComponent,
    NzButtonComponent
  ],
  templateUrl: './table-edit-fields.component.html',
  styleUrl: './table-edit-fields.component.scss'
})
export class TableEditFieldsComponent implements OnInit{
  fields: SmartField[] = [{
    key: 'name',
    type: 'table',
    label: '',
    children: [
      {key: 'name', type: 'text', label: '字段名称'},
      {key: 'label', type: 'text', label: '显示名称'},
      {
        key: 'type', type: 'select', label: '数据类型', options: [
          {label: "字符串", value: "string"},
          {label: "数值", value: "number"},
          {label: "日期", value: "date"},
        ]
      },
    ]
  }];

  values: any = [];

  @ViewChild("editor") editor!: SmartEditorComponent;

  constructor(private rs: SmartRequestService, private route: ActivatedRoute) {

  }

  table = ''

  ngOnInit(): void {
    this.table = this.route.snapshot.parent?.params['id'];
    this.load()
  }

  load() {
    this.rs.get(`table/${this.table}/conf/fields.json`).subscribe(res=>{
      console.log("get", res)
      this.values = res
    })
  }

  save() {
    console.log(this.table, "fields", this.editor.value);
    this.rs.post(`table/${this.table}/conf/fields.json`, JSON.stringify(this.editor.value)).subscribe(res=>{

    })
  }

  onChange($event: any) {
    console.log("change", $event);
  }

}
