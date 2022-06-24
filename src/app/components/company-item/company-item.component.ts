import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MyCompanyService } from 'src/app/services/my-company.service';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {

  @Input() public company: any;

  constructor(private route: Router,
    private companyService: MyCompanyService,
    private userService: UserService) { }

  ngOnInit(): void {
    console.log("init company = ", this.company);
  }

  showDetails(): void {
    console.log("showDetails");
    this.route.navigate(['/company/' + this.company.id]);
  }

  async approve() {
    console.log("approve id = ", this.company)
    await this.companyService.approveCompany({
      'username': this.company.user.username,
      'reject': false
    });
  }

  isUser(): boolean {
    return this.userService.isUser();
  }

  isUserAdmin(): boolean {
    return this.userService.isAdmin();
  }
}
