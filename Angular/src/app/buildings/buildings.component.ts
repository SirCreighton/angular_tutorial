import { Component, OnInit } from '@angular/core';
import { Building } from '../building';


@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
      building: Building = {
      id: 1,
      name: 'GejKalifa'
    };
    title= "ovo je i prošli put falilo";
  constructor() { }

  ngOnInit(): void {
  }

}
