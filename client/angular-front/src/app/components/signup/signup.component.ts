import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthorizationService } from "../../services/authorization.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  @Output() loginSwitch: EventEmitter<boolean> = new EventEmitter();
  constructor(private authorizationService: AuthorizationService, private router: Router) { }

  ngOnInit(): void {
  }


  switchLogin() {
    this.loginSwitch.emit(true)
  }

  signup() {
    this.authorizationService.signup(this.name.value, this.email.value, this.password.value).subscribe(res => {
      console.log(res)
      this.router.navigate(['/todos']);
    })
  }
}
