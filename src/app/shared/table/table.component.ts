import { Component } from '@angular/core';
import { AngularLibraryGrupo1Module } from 'angular-library-grupo1';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [AngularLibraryGrupo1Module],
  templateUrl: './table.component.html',
  styleUrl: './table.component.less'
})
export class TableComponent {
 headers = ['Nombre', 'Apellido', 'Email'];
 data = [
  { nombre: 'Juan', apellido: 'Perez', email: 'juan.perez@example.com' },
  { nombre: 'Maria', apellido: 'Gomez', email: 'maria.gomez@example.com' },
  { nombre: 'Pedro', apellido: 'Lopez', email: 'pedro.lopez@example.com' },
 ];
}
