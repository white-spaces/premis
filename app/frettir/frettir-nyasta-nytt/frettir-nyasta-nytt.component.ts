import { Component } from '@angular/core';
import { FrettService } from '../frett.service';
import { Frett } from '../frettir';

@Component({
    selector: 'frettir-nyasta-nytt',
    templateUrl: './frettir-nyasta-nytt.component.html' ,
    styleUrls: ['./frettir-nyasta-nytt.component.css', './responsive-frettir-nyasta-nytt.css'] 
})

export class FrettirNyastaNyttComponent {

    frettir: Frett[]

    constructor(frettService: FrettService) { 
        this.frettir = frettService.getFrettir(undefined);
    }

}