import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  user: any;
  userForm: FormGroup;
  constructor(private search: SearchService) {
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

  load() {
    this.search.getUserInfo(this.user).subscribe((data) => {
      this.user = data;
    });
  }
}
