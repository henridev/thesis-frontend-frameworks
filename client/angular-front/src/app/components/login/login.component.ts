import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthorizationService } from "../../services/authorization.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  @Output() loginSwitch: EventEmitter<boolean> = new EventEmitter();
  constructor(private authorizationService: AuthorizationService, private router: Router) { }

  ngOnInit(): void {
  }


  switchLogin() {
    this.loginSwitch.emit(false)
  }

  login() {
    this.authorizationService.login(this.email.value, this.password.value).subscribe(res => {
      console.log(res.user, 'res');
      this.router.navigate(['/todos']);
    })
  }
}
