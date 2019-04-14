import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule, usersRouterComponents } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components';
import { UserArrayService } from './services';
import { UsersServicesModule } from './users-services.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    UsersServicesModule,
  ],
  declarations: [UserComponent, usersRouterComponents]
})
export class UsersModule { }
