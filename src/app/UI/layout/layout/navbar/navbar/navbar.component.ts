import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/UI/login/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {

  }

  logout()
  {
  this.loginService.logout()
  }
}
