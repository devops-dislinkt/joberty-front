import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company.model';
import { MyCompanyService } from 'src/app/services/my-company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  private companies: Array<Company> = [];

  constructor(private service: MyCompanyService) { }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  async getAllCompanies() {
    this.companies = await this.service.getAllCompanies();
    console.log("companies = ", this.companies);
  }
  
  getCompanies(){
    return this.companies;
  }
}
