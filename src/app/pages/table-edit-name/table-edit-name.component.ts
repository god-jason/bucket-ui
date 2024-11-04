import {Component, inject, ViewChild} from '@angular/core';
import {SmartEditorComponent, SmartField, SmartRequestService} from '@god-jason/smart';
import {ActivatedRoute} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {NZ_MODAL_DATA, NzModalFooterDirective, NzModalRef} from 'ng-zorro-antd/modal';
import {NzButtonComponent} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-table-edit-name',
  standalone: true,
  imports: [
    SmartEditorComponent,
    NzButtonComponent,
    NzModalFooterDirective
  ],
  templateUrl: './table-edit-name.component.html',
  styleUrl: './table-edit-name.component.scss'
})
export class TableEditNameComponent {
  fields: SmartField[] = [{
    key: 'name',
    type: 'text',
    label: '名称',
    required: true,
  }];

  values: any = {};

  @ViewChild("editor") editor!: SmartEditorComponent;

  readonly data: any = inject(NZ_MODAL_DATA);

  constructor(private rs: SmartRequestService,
              private route: ActivatedRoute,
              private ns: NzNotificationService,
              private mr: NzModalRef,
  ) {

  }

  table = ''

  ngOnInit(): void {
    this.table = this.data.id
    this.values = {name: this.data.id}
  }

  handleOk() {
    console.log(this.table, "form", this.editor.value);
    if (this.table) {
      this.rs.post(`table/${this.table}/rename`, JSON.stringify(this.editor.value)).subscribe(res => {
        this.mr.close(true)
      })
    } else {
      this.rs.post(`table/${this.editor.value.name}`, {}).subscribe(res => {
        this.ns.success("提示", "创建成功")
        this.mr.close(true)
      })
    }

  }
}
