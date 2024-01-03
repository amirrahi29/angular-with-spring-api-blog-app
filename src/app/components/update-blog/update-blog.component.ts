import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../service/blog.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrl: './update-blog.component.css'
})
export class UpdateBlogComponent {

  id: number = this.activatedRoute.snapshot.params['id'];

  postBlogForm!: FormGroup; // Definite assignment assertion
  selectedImage: File | null = null;

  constructor(private activatedRoute: ActivatedRoute,
    private service: BlogService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.getBlogById();

    this.postBlogForm = this.fb.group({
      title: [null, Validators.required],
      image: [null, Validators.required]
    });
  }

  getBlogById() {
    this.service.getBlogById(this.id).subscribe((res) => {
      console.log(res);
      console.log(res);
      this.postBlogForm.patchValue({
        title: res.data.blogTitle,
        // Add other properties as needed
      });
    })
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  postBlog() {
    if (this.selectedImage) {
      const formData = new FormData();
      // Convert JSON object to string and append to FormData
      formData.append('blog_data', JSON.stringify({
        blogId: this.id,
        blogTitle: this.postBlogForm.get('title')!.value,
        blogImage: this.selectedImage.name
      }));

      // Append the image file
      formData.append('blog_image', this.selectedImage);

      this.service.updateBlog(formData).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("")
      });
    } else {
      alert('No image selected!')
      console.error('No image selected');
    }
  }

}
