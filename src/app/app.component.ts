import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';

  values = [
  { id: 3432, name: "User" },
  { id: 3442, name: "Admin" },
  { id: 3352, name: "Tester" }
  ];

  
}
