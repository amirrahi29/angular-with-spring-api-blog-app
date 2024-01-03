import { Component } from '@angular/core';
import { BlogService } from '../../service/blog.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent {

  postBlogForm!: FormGroup; // Definite assignment assertion
  selectedImage: File | null = null;
  constructor(private blogService: BlogService, private fb: FormBuilder,
    private router: Router) {}

  ngOnInit() {
    this.postBlogForm = this.fb.group({
      title: [null, Validators.required],
      image: [null, Validators.required]
    });
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  postBlog() {
    if (this.selectedImage) {
      const formData = new FormData();
      // Convert JSON object to string and append to FormData
      formData.append('blog_data', JSON.stringify({
        blogTitle: this.postBlogForm.get('title')!.value,
        blogImage: this.selectedImage.name
      }));
  
      // Append the image file
      formData.append('blog_image', this.selectedImage);
  
      this.blogService.postBlog(formData).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("")
      });
    } else {
      alert('No image selected!')
      console.error('No image selected');
    }
  }
  
}
