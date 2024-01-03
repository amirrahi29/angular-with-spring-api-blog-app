import { Component } from '@angular/core';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-get-all-blogs',
  templateUrl: './get-all-blogs.component.html',
  styleUrl: './get-all-blogs.component.css'
})
export class GetAllBlogsComponent {

  blogs: any = [];
  constructor(private blogService: BlogService){}

  ngOnInit(){
    this.getAllBlogs();
  }

  getAllBlogs(){
    this.blogService.getAllBlogs().subscribe((res)=>{
      console.log(res);
      this.blogs = res.data;
    })
  }

  deleteBlog(id: number){
   this.blogService.deleteBlog(id).subscribe((res)=>{
    console.log(res);
   })
  }

}
