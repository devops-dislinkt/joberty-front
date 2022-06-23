import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Company } from 'src/app/model/company.model';
import { User } from 'src/app/model/user.model';
import { MyCompanyService } from 'src/app/services/my-company.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-company',
  templateUrl: './my-company.component.html',
  styleUrls: ['./my-company.component.css']
})
export class MyCompanyComponent implements OnInit {

  companyForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    location: new FormControl('', [Validators.required]),
    website: new FormControl('', [Validators.required]),
  });

  constructor(private companyService: MyCompanyService,
    private userService: UserService) { }

  ngOnInit() {

  }

  async submit() {
    console.log("this.companyForm.value = ", this.companyForm.value)
    //@ts-ignore
    let company: Company = {
      //'id': 15,
      'user_id': 1,
      'approved': true,
      'name': this.companyForm.value.name,
      'email': this.companyForm.value.email,
      'location': this.companyForm.value.location,
      'website': this.companyForm.value.website,
      'description': this.companyForm.value.description,
    }
    await this.companyService.createCompany(company)
  }

  get f() {
    return this.companyForm.controls;
  }

  async create() {

    const company: Company = {
      'id': 0,
      'user_id': 1,
      'approved': true,
      'name': 'Levi9',
      'email': 'levi9@levi9.com',
      'location': 'Belgrade, Novi Sad',
      'website': 'levi9.com',
      'description': 'Levi9 je servisna kompanija koja pruža usluge razvoja, implementacije, održavanja i testiranja softvera klijentima.',
    }

    const company2: Company = {
      'id': 1,
      'user_id': 2,
      'approved': true,
      'name': 'Endava',
      'email': 'endava@endava.com',
      'location': 'Belgrade, Novi Sad',
      'website': 'endava.com',
      'description': 'Endava je tehnološka kompanija, sa preko 20 godina iskustva u radu sa nekim od vodećih svetskih kompanija.',
    }
    await this.companyService.createCompany(company)
    await this.companyService.createCompany(company2)

  }
}
