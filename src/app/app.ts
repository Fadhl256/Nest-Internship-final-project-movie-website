import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { ApiServices } from './api-services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('mainproject');
  constructor(private api:ApiServices) {}
  ngOnInit(){
    this.api.getmovies().subscribe((res:any)=>{
      console.log(res);
    });
}
}
