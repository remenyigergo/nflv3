import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})


export class GetComponent implements OnInit {

  model = new Hero('Dr IQ');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { console.log(this.model.name)}
  

}


class Hero {
  
    constructor(
     
      public name: string,
     
    ) {  }
  
  }
