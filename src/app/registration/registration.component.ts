import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  name = '';
  email = '';
  gender = '';
  address = '';
  street = '';
  code = '';
  phone = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }


  onMenuPage() {
  //   // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:max-line-length
    this.router.navigate(['/details'], { queryParams: { name: this.name, email: this.email, gender: this.gender,  address: this.address, street: this.street, code: this.code, phone: this.phone  } });
}

}
