import { Component, OnInit } from '@angular/core';
import { ItemDto, ReservationDto, User, UserDto } from './api/models';
import { ItemsService, ReservationsService, UsersService } from './api/services'
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
  myItems: ItemDto[];
  myReservations: ReservationDto[];
  itemReservations: ReservationDto[];
  users: UserDto[];
  selectedItem?: ItemDto;
  reservationItem?: ItemDto;
  newItem: FormGroup;
  userInfo: FormGroup;
  search: FormGroup;
  newUser: FormGroup;
  selectedDate1: Date | null;
  selectedDate2: Date | null;

  constructor(private itemService: ItemsService, private reservationService: ReservationsService, private userService: UsersService, private apiRequestConfiguration: ApiRequestConfiguration, private datepipe: DatePipe) { }
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
    this.newUser = new FormGroup({
      userName: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl('')
    })
  }
  getItems(term?: string): void {
    console.log("Searching: " + term);
    if (term == null) {
      term = "";
    }
    this.itemService.apiItemsQueryGet$Json({ query: term }).subscribe(items => (this.items = items));
  }
  getMyItems(): void {
    this.itemService.apiItemsUserUsernameGet$Json({ username: this.userInfo.value.username }).subscribe(items => (this.myItems = items));
  }
  getMyReservations(): void {
    this.reservationService.apiReservationsUserUsernameGet$Json({ username: this.userInfo.value.username }).subscribe(reservations => (this.myReservations = reservations));
  }
  getItemReservations(): void {
    if (this.reservationItem?.id == undefined) {
      return;
    }

    this.reservationService.apiReservationsItemIdGet$Json({ id: this.reservationItem?.id }).subscribe(reservations => (this.itemReservations = reservations));
  }
  getUsers(): void {
    this.userService.apiUsersGet$Json().subscribe(users => this.users = users);
  }

  onSubmit({ value, valid }: { value: ItemDto, valid: boolean }) {
    console.log(value, valid);
    value.owner = this.userInfo.value.username;
    this.itemService.apiItemsPost$Json({ body: value }).subscribe((response) => {
      console.log(response);
    });
  }
  onAddUser({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
    this.userService.apiUsersPost$Json({ body: value }).subscribe((response) => {
      console.log(response);
    });
  }
  onLogin(): void {
    this.apiRequestConfiguration.basic(this.userInfo.value.username, this.userInfo.value.password);
    this.getItems();
    this.getMyItems();
    this.getMyReservations();
    this.getUsers();
  }
  onSearch(): void {
    this.getItems(this.search.value.term);
    this.selectedItem = undefined;
    this.reservationItem = undefined;
  }

  selectForReserve(id?: number): void {
    this.selectedItem = this.items.find(x => x.id == id);
  }
  showItemReservations(id?: number): void {

    this.reservationItem = this.items.find(x => x.id == id);
    this.getItemReservations();
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
