import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Interview } from 'src/app/model/interview.model';
import { MyCompanyService } from 'src/app/services/my-company.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  id: string = '';
  interview: Interview[];

  interviewForm = new FormGroup({
    rating: new FormControl('', Validators.required),
    hr: new FormControl('', Validators.required),
    technical: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute,
    private service: MyCompanyService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCompany(this.id);
  }

  async getCompany(id: string) {
    let c = await this.service.getCompany(id);
    this.interview = c.interview;
    console.log("interview = ", this.interview);
  }
  
  async submit() {
    console.log("this.interviewForm.value = ", this.interviewForm.value)  
    let interview: Interview = {
      'hr': this.interviewForm.value.hr,
      'technical': this.interviewForm.value.technical,
      'rating': this.interviewForm.value.rating
    }  

    await this.service.createInterviewComment(this.id, interview);
    this.getCompany(this.id);
  }

  get f() {
    return this.interviewForm.controls;
  }
}
