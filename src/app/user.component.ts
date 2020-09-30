import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from './search.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

interface User {
  name: string;
  email:string;
  address: {
    street: string;
    suite: string;
    city:string;
    zipcode: string;
  }
  phone: string;
  website:string;
  company: {
    name:string;
  };

}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit, OnDestroy {
  user: any;
  userId: string;
  userForm: FormGroup;
  private querySubscription: Subscription;
  constructor(private search: SearchService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.userId = queryParam['id'];
      }
    );
    this.search.getUserInfo(this.userId).subscribe((data: User) => {
      this.user = data;
      console.log(data);
      this.userForm = new FormGroup({
        name: new FormControl(data.name, [Validators.required]),
        email: new FormControl(data.email, [Validators.required, Validators.email]),
        street: new FormControl(data.address.street, [Validators.required]),
        suite: new FormControl(data.address.suite, [Validators.required]),
        city: new FormControl(data.address.city, [Validators.required]),
        zipcode: new FormControl(data.address.zipcode, [Validators.required]),
        phone: new FormControl(data.phone, [Validators.required]),
        website: new FormControl(data.website, [Validators.required]),
        company: new FormControl(data.company.name, [Validators.required]),
      });
      return data;
    });
  }

  ngOnDestroy(): void {
    if (this.querySubscription)
    this.querySubscription.unsubscribe();
  }
}
