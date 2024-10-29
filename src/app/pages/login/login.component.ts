import {Component} from '@angular/core';
import {NzCardComponent} from 'ng-zorro-antd/card';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzTooltipDirective} from 'ng-zorro-antd/tooltip';
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from 'ng-zorro-antd/form';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzColDirective} from 'ng-zorro-antd/grid';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {SmartRequestService} from '@god-jason/smart';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NzCardComponent,
    NzInputGroupComponent,
    NzInputDirective,
    NzIconDirective,
    NzTooltipDirective,
    NzFormDirective,
    NzFormItemComponent,
    NzButtonComponent,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzColDirective,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  group: FormGroup;

  constructor(formBuilder: FormBuilder,
              private ns: NzNotificationService,
              private rs: SmartRequestService,
              ) {
    this.group = formBuilder.group({
      username: ['admin', Validators.required],
      password: ['', Validators.required],
    })
  }

  submit() {

    if (this.group.invalid){
      this.ns.error("错误", "无效账号密码")
      Object.values(this.group.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return
    }

    this.rs.post("admin/login", this.group.value).subscribe(res => {
      console.log("login", res)
    })
  }
}
