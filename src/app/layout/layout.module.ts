import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent, PathNotFoundComponent } from './components';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  imports: [
    CommonModule, FormsModule,
  ],

  declarations: [AboutComponent, PathNotFoundComponent, MessagesComponent]
})
export class LayoutModule { }
