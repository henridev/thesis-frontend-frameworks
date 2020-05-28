import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  isLogin = true

  constructor() { }

  ngOnInit(): void {
  }

  onLoginSwitch(_isLogin) {
    this.isLogin = _isLogin
  }

}
