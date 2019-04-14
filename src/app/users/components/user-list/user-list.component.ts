import { Component, OnInit } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';

import { UserModel } from './../../models/user.model';
import { UserArrayService } from './../../services/user-array.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users$: Observable<Array<UserModel>>;

  constructor(
    private userArrayService: UserArrayService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.users$ = this.userArrayService.getUsers();
  }

  onEditUser(user: UserModel) {
    const link = ['/users/edit', user.id];
    this.router.navigate(link);
    // or
    // const link = ['edit', user.id];
    // this.router.navigate(link, {relativeTo: this.route});
  }

}
