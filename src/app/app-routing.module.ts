import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostBlogComponent } from './components/post-blog/post-blog.component';
import { GetAllBlogsComponent } from './components/get-all-blogs/get-all-blogs.component';
import { UpdateBlogComponent } from './components/update-blog/update-blog.component';

const routes: Routes = [
  {path: "blog", component: PostBlogComponent},
  {path: "", component: GetAllBlogsComponent},
  {path: "blog/:id", component: UpdateBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
