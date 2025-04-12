import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserManagerComponent } from './user/user-manager/user-manager.component';
import { UserListComponent } from './user/user-list/user-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserManagerComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'ProyectoUser';
}
