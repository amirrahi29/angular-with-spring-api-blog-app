import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostBlogComponent } from './components/post-blog/post-blog.component';
import { GetAllBlogsComponent } from './components/get-all-blogs/get-all-blogs.component';
import { UpdateBlogComponent } from './components/update-blog/update-blog.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostBlogComponent,
    GetAllBlogsComponent,
    UpdateBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
