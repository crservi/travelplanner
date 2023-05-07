import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/shared/services/paises/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit{
  constructor(private serviceService: PaisesService) {
  }
  paises: any;

  ngOnInit(): void {
    this.serviceService.getPaises().subscribe(
      (data: any) => {
        this.paises = data;
        console.log(this.paises)
      }
    )
  }

}
