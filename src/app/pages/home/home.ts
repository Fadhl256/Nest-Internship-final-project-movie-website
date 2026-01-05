import { Component } from '@angular/core';
import { Corousel } from "../../components/corousel/corousel";
import { Cards } from "../../components/cards/cards";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [Corousel, Cards, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
