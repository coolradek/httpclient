import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientService, RootDataItem} from "../../services/client.service";


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  rootDataItem: RootDataItem | undefined;
  rootDataString: string | undefined;
  constructor(private client: ClientService) { }

  ngOnInit(): void {
    this.client.getData().subscribe(value => {
      this.rootDataItem = value;
      this.rootDataString = JSON.stringify(value);
    })
  }

}
