import {Component, ViewChild} from '@angular/core';
import {SmartEditorComponent, SmartField, SmartRequestService} from '@god-jason/smart';
import {ActivatedRoute} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {NzButtonComponent} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-table-edit-info',
  standalone: true,
  imports: [
    SmartEditorComponent,
    NzButtonComponent
  ],
  templateUrl: './table-edit-info.component.html',
  styleUrl: './table-edit-info.component.scss'
})
export class TableEditInfoComponent {
  fields: SmartField[] = [
    {key: 'name', type: 'text', label: '表名'},
    {key: 'label', type: 'text', label: '显示名称'},
  ];

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
    this.rs.get(`table/${this.table}/conf/info.json`).subscribe(res => {
      console.log("get", res)
      this.values = res
    })
  }

  save() {
    console.log(this.table, "fields", this.editor.value);
    this.rs.post(`table/${this.table}/conf/info.json`, JSON.stringify(this.editor.value)).subscribe(res => {
      this.ns.success("提示", "保存成功")
    })
  }

}
