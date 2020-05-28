import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from "../../services/authorization.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user: Object = null
  constructor(private authorizationService: AuthorizationService, private router: Router) {
    this.authorizationService.userInfo.subscribe(res => {
      this.user = res.user
    })
  }

  ngOnInit(): void {
  }

  logout() {
    this.user = null
    this.router.navigate(['/home']);
  }

}
