import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/model/comment.model';
import { MyCompanyService } from 'src/app/services/my-company.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  id: string = '';
  comments: Comment[];

  commentForm = new FormGroup({
    rating: new FormControl('', Validators.required),
    positive: new FormControl('', Validators.required),
    negative: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute,
    private service: MyCompanyService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCompany(this.id);
  }

  async getCompany(id: string) {
    let c = await this.service.getCompany(id);
    this.comments = c.comments;
    console.log("comments = ", this.comments);
  }
  
  async submit() {
    console.log("this.commentForm.value = ", this.commentForm.value)  
    let comment: Comment = {
      'positive': this.commentForm.value.positive,
      'negative': this.commentForm.value.negative,
      'rating': this.commentForm.value.rating
    }  

    await this.service.createComment(this.id, comment);
    this.getCompany(this.id);
  }

  get f() {
    return this.commentForm.controls;
  }
}
