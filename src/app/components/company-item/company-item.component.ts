import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {

  @Input() public company: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
    console.log("init company = ", this.company);
  }

  showDetails(): void {
    console.log("showDetails");
    this.route.navigate(['/company/' + this.company.id]);
  }
}
