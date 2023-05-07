import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/shared/services/paises/paises.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
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
