import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/model/company.model';
import { Job } from 'src/app/model/job.model';
import { MyCompanyService } from 'src/app/services/my-company.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  id: string = '';
  job: Job;
  company: Company;

  constructor(private route: ActivatedRoute,
    private service: MyCompanyService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getJobDetails(this.id);
  }

  async getJobDetails(id: string){
    this.job = await this.service.getJobDetails(this.id);
    //@ts-ignore
    this.company = this.job.company;
    console.log("job = ", this.job)
    console.log("company = ", this.company)
    
  }
}
