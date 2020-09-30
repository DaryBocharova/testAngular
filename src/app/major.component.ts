import { Component } from '@angular/core';
import { SearchService } from './search.service';

export class Users {
  userId: number;
  id: number;
  title: string;
  body: string;
  info = false;
}

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls:['./major.component.css'],
})
export class MajorComponent {
  users: any[] = [];
  constructor(private search: SearchService) {
    this.search.load().subscribe((data:Array<Users>) => {
      if (this.users != null) {
      this.users = data;
      }
    });
  }

  getInfo(user:Users) {
    user.info = !user.info;
  }
}
