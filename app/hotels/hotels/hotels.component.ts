import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/shared/services/hotels/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit  {
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
