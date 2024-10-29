import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
  ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
