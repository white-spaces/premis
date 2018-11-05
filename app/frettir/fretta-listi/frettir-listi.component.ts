import { Component, NgZone } from '@angular/core';
import { FrettService } from '../frett.service';
import { Frett } from '../frettir';

@Component({
    selector: 'fretta-listi',
    templateUrl: './frettir-listi.component.html' ,
    styleUrls: ['./frettir-listi.component.css', './responsive-frettir-listi.css'] 
})

export class FrettaListiComponent {

    dropdownActive: boolean = false;

    activeCategory: any = undefined;


    frettir: Frett[]

    constructor(
        public frettService: FrettService,
        public zone: NgZone
    ) 
    { 
        this.frettir = frettService.getFrettir(undefined);
    }


    filterCategories(cat){
        this.zone.run(() => {
            this.frettir = this.frettService.getFrettir(cat);
            this.dropdownActive = false;;
            this.activeCategory = cat;
        })
    }

  

    activateDropdown() {
        if (this.dropdownActive === false) {
          this.dropdownActive = true;
        } else {
          this.dropdownActive = false;
        }
    }




    

 
}