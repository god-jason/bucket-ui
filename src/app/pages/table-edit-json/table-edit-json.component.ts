import {Component} from '@angular/core';
import {CodeMirrorComponent} from 'ng-codemirror';
import {SmartRequestService} from '@god-jason/smart';
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-table-edit-json',
  standalone: true,
  imports: [
    CodeMirrorComponent,
    FormsModule
  ],
  templateUrl: './table-edit-json.component.html',
  styleUrl: './table-edit-json.component.scss'
})
export class TableEditJsonComponent {

  code = ""

  table = ''
  file = ''

  options = {
    lineNumbers: true,
    readOnly: false, // nocursor can not copy
    mode: 'json',
    autofocus: true,
    lineWiseCopyCut: true,
    cursorBlinkRate: 500 // hide cursor
  };

  querySub: any

  constructor(private rs: SmartRequestService,
              private route: ActivatedRoute,
              private ns: NzNotificationService,
              ) {
    //route.queryParams
    this.querySub = route.parent?.queryParams.subscribe((param: any) => {
      console.log("query updatev", param)
      this.file = param.file;
      this.load()
    })
  }

  ngOnDestroy(): void {
    this.querySub.unsubscribe()
  }

  ngOnInit(): void {
    this.table = this.route.snapshot.parent?.params['id'];
    this.file = this.route.snapshot.parent?.queryParams['file'];
    this.load()
  }

  load() {
    this.rs.request("GET", `table/${this.table}/conf/${this.file}`, {responseType: 'text'})
      .subscribe(res => {
        this.code = res
      })
  }

  save() {
    try {
      JSON.parse(this.code)
    } catch (ex) {
      this.ns.error("错误", "ex"+ex)
      return
    }
    this.rs.post(`table/${this.table}/conf/${this.file}`, this.code).subscribe(res => {

    })
  }
}
