import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/model/job.model';
import { MyCompanyService } from 'src/app/services/my-company.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  id: string = '';
  jobs: Job[];

  jobForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute,
    private service: MyCompanyService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCompany(this.id);
  }

  async getCompany(id: string) {
    let c = await this.service.getCompany(id);
    this.jobs = c.job;
    console.log("jobs = ", this.jobs);
  }
  
  async submit() {
    console.log("this.jobForm.value = ", this.jobForm.value)  
    //@ts-ignore
    let job: Job = {
      'title': this.jobForm.value.title,
      'description': this.jobForm.value.description,
    }  

    await this.service.createJob(this.id, job);
    this.getCompany(this.id);
  }

  get f() {
    return this.jobForm.controls;
  }

}
