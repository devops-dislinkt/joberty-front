import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Salary } from 'src/app/model/salary.model';
import { MyCompanyService } from 'src/app/services/my-company.service';

@Component({
  selector: 'app-salaries',
  templateUrl: './salaries.component.html',
  styleUrls: ['./salaries.component.css']
})
export class SalariesComponent implements OnInit {

  id: string = '';
  salary: Salary[];

  salaryForm = new FormGroup({
    position: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute,
    private service: MyCompanyService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCompany(this.id);
  }

  async getCompany(id: string) {
    let c = await this.service.getCompany(id);
    this.salary = c.salary;
    console.log("salary = ", this.salary);
  }
  
  async submit() {
    console.log("this.salaryForm.value = ", this.salaryForm.value)  
    let salary: Salary = {
      'position': this.salaryForm.value.position,
      'salary': this.salaryForm.value.salary,
    }  

    await this.service.createSalary(this.id, salary);
    this.getCompany(this.id);
  }

  get f() {
    return this.salaryForm.controls;
  }

}
