import {Component, OnInit, ViewChild} from '@angular/core';
import {SmartEditorComponent, SmartField, SmartRequestService} from '@god-jason/smart';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {ActivatedRoute} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-table-edit-accumulations',
  standalone: true,
  imports: [
    NzButtonComponent,
    SmartEditorComponent
  ],
  templateUrl: './table-edit-accumulations.component.html',
  styleUrl: './table-edit-accumulations.component.scss'
})
export class TableEditAccumulationsComponent {
  fields: SmartField[] = [{
    key: 'none',
    type: 'list',
    label: '',
    children: [
      {key: 'name', type: 'text', label: '目标'},
      {
        key: 'filter', type: 'table', label: '过滤器', children: [
          {key: 'key', type: 'text', label: '键'},
          {key: 'value', type: 'text', label: '值'},
        ]
      },
      {
        key: 'values', type: 'table', label: '累积值', children: [
          {key: 'key', type: 'text', label: '键'},
          {key: 'value', type: 'text', label: '值'},
        ]
      },
    ]
  }];

  values: any = [];

  @ViewChild("editor") editor!: SmartEditorComponent;

  constructor(private rs: SmartRequestService,
              private route: ActivatedRoute,
              private ns: NzNotificationService,
              ) {

  }

  table = ''

  ngOnInit(): void {
    this.table = this.route.snapshot.parent?.params['id'];
    this.load()
  }

  load() {
    this.rs.get(`table/${this.table}/conf/accumulations.json`).subscribe(res => {
      console.log("get", res)
      this.values = {none:res}
    })
  }

  save() {
    console.log(this.table, "accumulations", this.editor.value);
    this.rs.post(`table/${this.table}/conf/accumulations.json`, JSON.stringify(this.editor.value.none)).subscribe(res => {
      this.ns.success("提示", "保存成功")
    })
  }

}
