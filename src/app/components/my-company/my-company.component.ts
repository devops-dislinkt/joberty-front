import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company.model';
import { MyCompanyService } from 'src/app/services/my-company.service';

@Component({
  selector: 'app-my-company',
  templateUrl: './my-company.component.html',
  styleUrls: ['./my-company.component.css']
})
export class MyCompanyComponent implements OnInit {

  constructor(
    private companyService: MyCompanyService,
  ) { }

  ngOnInit() {

  }

  async create() {
    const company: Company = {
      'id' : 1,
      'user_id' : 1,
      'approved' : false,
      'name' : 'test',
      'email' : 'test',
      'location' : 'test',
      'website' : 'test',
      'description' : 'test',
    }

    await this.companyService.createCompany(company)
  }
}
