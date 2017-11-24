import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { GrannyService } from '../granny.service';
import { Granny } from '../granny';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  name: String;
  description: String;
  img: String;
  grannys: Granny[];
  granny: any;

  constructor (private gs: GrannyService) {
    this.grannys = [];
  }

  ngOnInit() {
    this.name = "Paulette";
    this.description = "J'aime tricoter et faire des gateaux";
    this.img = "https://blog.oxforddictionaries.com/wp-content/uploads/granny-chic.jpg";

    this.gs.grannys.subscribe( (g: Granny[]) => {
      this.grannys = g
      console.log(this.grannys);
    });   
  }

  onSubmit() {
    this.granny = {
      name : this.name,
      description: this.description,
      img: this.img
    }
    this.gs.saveGranny(this.granny);
  }

}
