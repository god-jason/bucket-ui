import { Component } from '@angular/core';
import {SmartRequestService} from '@god-jason/smart';
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CodeMirrorComponent} from 'ng-codemirror';

@Component({
  selector: 'app-table-edit-js',
  standalone: true,
  imports: [
    FormsModule,
    CodeMirrorComponent
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

  constructor(private rs: SmartRequestService, private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.table = this.route.snapshot.parent?.params['id'];
    this.file = this.route.snapshot.parent?.queryParams['file'];
    this.load()
  }

  load() {
    this.rs.get(`table/${this.table}/conf/${this.file}`).subscribe(res=>{
      console.log("get", res)
      this.code = res
    })
  }

  save() {
    console.log(this.table, "fields", this.code);
    this.rs.post(`table/${this.table}/conf/${this.file}`, this.code).subscribe(res=>{

    })
  }
}
