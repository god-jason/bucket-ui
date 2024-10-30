import { Component } from '@angular/core';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-function',
  standalone: true,
  imports: [
    NzColDirective,
    NzRowDirective
  ],
  templateUrl: './function.component.html',
  styleUrl: './function.component.scss'
})
export class FunctionComponent {

}
