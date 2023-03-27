import { Component } from '@angular/core';
import { GeneralService } from '../../core/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public username: string = "";
  public password: string = "";

  generalService: GeneralService;

  setUsername(event: Event) {
    this.username = (event.target as HTMLTextAreaElement).value;
  }

  setPassword(event: Event) {
    this.password = (event.target as HTMLTextAreaElement).value;
  }

  constructor(generalService: GeneralService, private router: Router) {
    this.generalService = generalService;
}

  public login() {
    this.generalService.login(this.username, this.password)
    .subscribe(data => {
      alert("Login exitoso! " + JSON.stringify(data));
      this.router.navigate(['./portfolio']);
    });
  }
}
