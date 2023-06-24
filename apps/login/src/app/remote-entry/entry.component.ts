import { Component } from '@angular/core';
import { UserService } from '@ng-mf/shared/data-access-user';
@Component({
  selector: 'ng-mf-login-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class RemoteEntryComponent {
  username = '';
  password = '';
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService) {}

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
