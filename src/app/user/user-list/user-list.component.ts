import { Component } from '@angular/core';
import { TableComponent } from 'src/app/shared/table/table.component';

@Component({
  selector: 'app-user-list',
  imports: [TableComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.less'
})
export class UserListComponent {

}
