import { Component, OnInit } from '@angular/core';
import { ItemDto, ReservationDto } from './api/models';
import { ItemsService, ReservationsService } from './api/services'
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common'

import { ApiRequestConfiguration } from './api-request-configuration';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reservation-system';
  items: ItemDto[];
  selectedItem?: ItemDto;
  newItem: FormGroup;
  userInfo: FormGroup;
  search: FormGroup;
  selectedDate1: Date | null;
  selectedDate2: Date | null;

  constructor(private itemService: ItemsService, private reservationService: ReservationsService, private apiRequestConfiguration: ApiRequestConfiguration, private datepipe: DatePipe) { }
  ngOnInit(): void {

    this.search = new FormGroup({
      term: new FormControl('')
    });
    this.userInfo = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });

    this.newItem = new FormGroup({
      description: new FormControl(''),
      name: new FormControl('')
    });
  }
  getItems(term?: string): void {
    console.log("Searching: " + term);
    if (term == null) {
      term = "";
    }
    this.itemService.apiItemsQueryGet$Json({ query: term }).subscribe(items => (this.items = items));
  }
  onSubmit({ value, valid }: { value: ItemDto, valid: boolean }) {
    console.log(value, valid);
    value.owner = this.userInfo.value.username;
    this.itemService.apiItemsPost$Json({ body: value }).subscribe((response) => {
      console.log(response);
    });
  }
  onLogin(): void {
    this.apiRequestConfiguration.basic(this.userInfo.value.username, this.userInfo.value.password);
    this.getItems();
  }
  onSearch(): void {
    this.getItems(this.search.value.term);
  }

  selectForReserve(id?: number): void {
    this.selectedItem = this.items.find(x => x.id == id);
  }
  onReserve(): void {
    let newReservation: ReservationDto = {
      start: this.datepipe.transform(this.selectedDate1, 'yyyy-MM-dd')!,
      end: this.datepipe.transform(this.selectedDate2, 'yyyy-MM-dd')!,
      owner: this.userInfo.value.username,
      target: this.selectedItem?.id,
    }
    this.reservationService.apiReservationsPost$Json({ body: newReservation }).subscribe((response) => {
      console.log(response);
    });
  }

}
