import {Component} from '@angular/core';
import {SmartRequestService} from '@god-jason/smart';
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CodeMirrorComponent} from 'ng-codemirror';
import {NzButtonComponent} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-table-edit-js',
  standalone: true,
  imports: [
    FormsModule,
    CodeMirrorComponent,
    NzButtonComponent
  ],
  templateUrl: './table-edit-js.component.html',
  styleUrl: './table-edit-js.component.scss'
})
export class TableEditJsComponent {

  code = ""

  table = ''
  file = ''

  options = {
    lineNumbers: true,
    readOnly: false, // nocursor can not copy
    mode: 'javascript',
    autofocus: true,
    lineWiseCopyCut: true,
    cursorBlinkRate: 500 // hide cursor
  };

  querySub: any

  constructor(private rs: SmartRequestService, private route: ActivatedRoute) {
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
    this.rs.post(`table/${this.table}/conf/${this.file}`, this.code).subscribe(res => {

    })
  }
}
