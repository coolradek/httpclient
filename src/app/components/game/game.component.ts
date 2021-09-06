import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientService, RootDataItem} from "../../services/client.service";


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  rootDataItem: RootDataItem;
  rootDataString: string | undefined;
  constructor(private client: ClientService) { }

  ngOnInit(): void {
    this.client.getData().subscribe(value => {
      console.log(value);
      this.rootDataItem = value[0];
      this.rootDataString = JSON.stringify(value);
      console.log(this.rootDataItem.data)
    })
  }

}
