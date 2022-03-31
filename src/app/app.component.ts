import { Component, OnInit } from '@angular/core';


import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {
   
  }

  private data:any = []

  title = 'helloworld';

  values = [
    { id: 3432, name: "User" },
    { id: 3442, name: "Admin" },
    { id: 3352, name: "Tester" }
  ];

  // REST API URL 'https://cat-fact.herokuapp.com/facts/';
  
  getData(){
    const url ='https://cat-fact.herokuapp.com/facts/'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

}

