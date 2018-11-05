import { Injectable, OnInit, NgZone } from '@angular/core';
import { FRETTIR } from './frettir-mockup';

@Injectable({
  providedIn: 'root'
})
export class FrettService implements OnInit {

  test: any;

  ngOnInit(){
  }

  constructor(public zone: NgZone){
    
  }


  getFrettir(category) { 
    console.log(category)
    let frettir = FRETTIR.filter(function(el){
      if(category === undefined || null){
        console.log(FRETTIR)
        return FRETTIR;
      } else if (category === el.category) {
        return el.category == category;
      } else if (category !== el.category) {
        return el.subcategories.includes(category)
      } else {
        return FRETTIR
      }
    });
    console.log(frettir)
    return frettir;
  }

  



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }

}
