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
  selectedEditReservation?: ReservationDto;
  users: UserDto[];
  myUser: UserDto;
  selectedItem?: ItemDto;
  selectForEditItem?: ItemDto;
  reservationItem?: ItemDto;
  newItem: FormGroup;
  editItem: FormGroup;
  userInfo: FormGroup;
  search: FormGroup;
  newUser: FormGroup;
  editUser: FormGroup;
  selectedDate1: Date | null;
  selectedDate2: Date | null;
  editDate1: Date | null;
  editDate2: Date | null;

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

    this.editItem = new FormGroup({
      description: new FormControl(this.selectForEditItem?.description),
      name: new FormControl(this.selectForEditItem?.name)
    });
    this.newUser = new FormGroup({
      userName: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl(''),
      isAdmin: new FormControl(false)
    })
    this.editUser = new FormGroup({
      userName: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      isAdmin: new FormControl(false)
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
  onEdit() {
    if (this.selectForEditItem) {
      let id = this.selectForEditItem?.id;
      if (id == undefined) {
        return;
      }
      let editItem: ItemDto = {
        id: id,
        owner: this.selectForEditItem.owner,
        name: this.editItem.get('name')!.value,
        description: this.editItem.get('description')!.value,
      }
      this.itemService.apiItemsIdPut({ id: id, body: editItem }).subscribe((response) => {
        console.log(response);
      });
      this.selectForEditItem = undefined;
    }
  }
  onAddUser({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
    this.userService.apiUsersPost$Json({ body: value }).subscribe((response) => {
      console.log(response);
    });
  }
  onLogin(): void {
    this.apiRequestConfiguration.basic(this.userInfo.value.username, this.userInfo.value.password);
    this.userService.apiUsersUsernameGet({ username: this.userInfo.value.username }).subscribe((response) => {
      console.log(response);
      this.myUser = response;
      this.editUser.setValue({
        userName: this.myUser.userName,
        firstName: this.myUser.firstName,
        lastName: this.myUser.lastName,
      });

      console.log(this.editUser.value);
    });
    this.reload();
  }
  onSearch(): void {
    this.getItems(this.search.value.term);
    this.selectedItem = undefined;
    this.reservationItem = undefined;
  }

  selectForEdit(id?: number): void {
    this.selectForEditItem = this.items.find(x => x.id == id);
    this.editItem.setValue({
      name: this.selectForEditItem?.name,
      description: this.selectForEditItem?.description
    })

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
      startTime: this.datepipe.transform(this.selectedDate1, 'yyyy-MM-dd')!,
      endTime: this.datepipe.transform(this.selectedDate2, 'yyyy-MM-dd')!,
      owner: this.userInfo.value.username,
      target: this.selectedItem?.id,
    }
    this.reservationService.apiReservationsPost$Json({ body: newReservation }).subscribe((response) => {
      console.log(response);
      this.reload();
    });
  }

  deleteItem(id?: number): void {
    if (id == null) {
      return;
    }
    if (confirm("Haluatko varmasti poistaa kohteen ")) {
      this.itemService.apiItemsIdDelete$Json({ id: id }).subscribe((response) => {
        console.log(response);
        this.reload();
      });
    }
  }

  selectReservationForEdit(id?: number): void {
    this.selectedEditReservation = this.myReservations.find(x => x.id == id);
    if (this.selectedEditReservation?.startTime == undefined || this.selectedEditReservation?.endTime == undefined) {
      return;
    }
    this.editDate1 = new Date(this.selectedEditReservation?.startTime);
    this.editDate2 = new Date(this.selectedEditReservation?.endTime);
  }
  onEditReserve() {
    if (this.selectedEditReservation?.startTime == undefined || this.selectedEditReservation?.endTime == undefined || this.selectedEditReservation?.id == undefined) {
      return;
    }
    this.selectedEditReservation.startTime = this.datepipe.transform(this.editDate1, 'yyyy-MM-dd')!
    this.selectedEditReservation.endTime = this.datepipe.transform(this.editDate2, 'yyyy-MM-dd')!

    this.reservationService.apiReservationsIdPut({ id: this.selectedEditReservation.id, body: this.selectedEditReservation }).subscribe((response) => {
      console.log(response);
      this.selectedEditReservation = undefined;
      this.reload();
    });
  }
  deleteReservation(id?: number): void {
    if (id == null) {
      return;
    }
    if (confirm("Haluatko varmasti poistaa varauksen ")) {
      this.reservationService.apiReservationsIdDelete$Json({ id: id }).subscribe((response) => {
        console.log(response);
        this.reload();
      });
    }
  }

  onEditUser({ value, valid }: { value: UserDto, valid: boolean }) {
    console.log(value, valid);
    if (this.myUser.userName) {
      this.userService.apiUsersUsernamePut$Json({ username: this.myUser.userName, body: value }).subscribe((response) => {
        console.log(response);
      });
    }
  }

  reload(): void {
    this.getItems();
    this.getMyItems();
    this.getMyReservations();
    this.getUsers();
  }

}
