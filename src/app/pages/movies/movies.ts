import { Component } from '@angular/core';
import { Listcards } from "../../components/listcards/listcards";

@Component({
  selector: 'app-movies',
  imports: [Listcards],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {

}
