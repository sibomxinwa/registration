import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  name: string;
  email: string;
  gender: string;
  address: string;
  street: string;
  code: string;
  phone: string;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams
    .subscribe(params => {
      this.name = params.name;
      this.email = params.email;
      this.gender = params.gender;
      this.address = params.address;
      this.street = params.street;
      this.code = params.code;
      this.phone = params.phone;


  });

    console.log(this.name);
    console.log(this.email);
    console.log(this.gender);
    console.log(this.address);
    console.log(this.street);
    console.log(this.code);
    console.log(this.phone);

}



}
