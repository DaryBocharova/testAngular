import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit{
  user: any;
  userId:any;
  userForm: FormGroup;
  private querySubscription: Subscription;
  constructor(private search: SearchService, private route: ActivatedRoute) {
    this.userForm = new FormGroup({
      "name": new FormControl("name", [Validators.required]),
      "email": new FormControl("", [Validators.required,Validators.email]),
      "street": new FormControl("street", [Validators.required]),
      "suite": new FormControl("suite", [Validators.required]),
      "city": new FormControl("city", [Validators.required]),
      "zipcode": new FormControl("zipcode", [Validators.required]),
      "phone": new FormControl("phone", [Validators.required]),
      "website": new FormControl("website", [Validators.required]),
      "company": new FormControl("company", [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
          this.userId = queryParam['userId'];
      }
  );
    this.search.getUserInfo(this.userId).subscribe((data) => {
      this.user = data;
    });
  }
}
