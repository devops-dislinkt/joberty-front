import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/model/company.model';
import { MyCompanyService } from 'src/app/services/my-company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  id: string = '';
  company: Company;

  constructor(private route: ActivatedRoute,
    private service: MyCompanyService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id = ", this.id);
    this.getCompany(this.id);
  }

  async getCompany(id: string) {
    let c = await this.service.getCompany(id);
    this.company = c;
  }
}
