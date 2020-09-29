import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchService } from './search.service';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MajorComponent } from './major.component';

const routes: Routes = [
  {path: '', component: MajorComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  declarations: [AppComponent, UserComponent, MajorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [HttpClient, SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
