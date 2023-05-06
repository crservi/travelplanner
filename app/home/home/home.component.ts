import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/shared/services/hotels/hotels.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serviceService: HotelsService) {

  }

  hotels: any;

  ngOnInit(): void {
    this.serviceService.getHotels().subscribe(
      (data: any) => {
        this.hotels = data.results;
        console.log(this.hotels)
      }
    )
  }
}

