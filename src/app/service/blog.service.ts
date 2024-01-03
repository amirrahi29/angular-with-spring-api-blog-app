import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:9091/api/";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  postBlog(blog: any): Observable<any> {
    return this.http.post(BASIC_URL + "addBlog", blog);
  }

  getAllBlogs(): Observable<any>{
    return this.http.get(BASIC_URL+"getAllBlogs")
  }

  deleteBlog(myIde:number):Observable<any>{
    const data = { "id": myIde }
    return this.http.post(BASIC_URL+ "deleteBlogById" ,data)
  }

  getBlogById(id:number):Observable<any>{
    return this.http.get(BASIC_URL+"getBlogById/"+id)
  }

  updateBlog(blog:any): Observable<any>{
    return this.http.post(BASIC_URL+"updateBlog",blog)
  }

}
