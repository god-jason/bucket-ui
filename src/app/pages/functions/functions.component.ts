import { Component } from '@angular/core';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-functions',
  standalone: true,
  imports: [
    NzColDirective,
    NzRowDirective
  ],
  templateUrl: './functions.component.html',
  styleUrl: './functions.component.scss'
})
export class FunctionsComponent {

}
