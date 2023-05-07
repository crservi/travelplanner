import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/shared/services/paises/paises.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

