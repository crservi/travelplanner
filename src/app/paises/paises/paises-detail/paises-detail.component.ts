import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from 'src/app/shared/services/paises/paises.service';


@Component({
  selector: 'app-paises-detail',
  templateUrl: './paises-detail.component.html',
  styleUrls: ['./paises-detail.component.css']
})
export class PaisesDetailComponent implements OnInit {


  constructor(private route: ActivatedRoute, private paisesService: PaisesService) { }

  paisesId!: number;
  paisDetails: any;
  pais : any;

  ngOnInit(){
    this.route.params.subscribe (params => {
      this.paisesId = params['id'];
      this.loadPaisesDetail(this.paisesId);
    });
  }

  loadPaisesDetail(paisesId: any) {
    this.paisesService.getPaisDetail(paisesId)
      .subscribe(
        (data: any) => {
          this.paisDetails = data;
        }
      );
  }

}

