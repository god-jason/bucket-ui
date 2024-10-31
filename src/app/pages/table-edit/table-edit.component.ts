import {Component} from '@angular/core';
import {NzResizableDirective, NzResizeEvent, NzResizeHandlesComponent} from 'ng-zorro-antd/resizable';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-table-edit',
  standalone: true,
  imports: [
    NzResizableDirective,
    NzResizeHandlesComponent,
    RouterOutlet,
    RouterLink,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSubMenuComponent
  ],
  templateUrl: './table-edit.component.html',
  styleUrl: './table-edit.component.scss'
})
export class TableEditComponent {
  width: number = 200;

  onResize($event: NzResizeEvent) {
    this.width = $event.width!;
  }
}
