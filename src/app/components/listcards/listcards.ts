import { ChangeDetectorRef,Component,OnInit } from '@angular/core';
import {Router,RouterLink } from '@angular/router';
import { ApiServices } from '../../api-services';

@Component({
  selector: 'app-listcards',
  imports: [RouterLink],
  templateUrl: './listcards.html',
  styleUrl: './listcards.css',
})
export class Listcards implements OnInit {
  count=Array(100);
  prodCards: any[] = [];
  constructor(private api_service: ApiServices,private cdr: ChangeDetectorRef,private router: Router) {}
  ngOnInit() {
    this.api_service.getmovies().subscribe((res: any) => {
      this.prodCards = res.data;
      this.cdr.detectChanges();
    });
}
viewProductDetails(product:any){
  this.router.navigate(['/product', product.id],{state:{product}});
}
}
