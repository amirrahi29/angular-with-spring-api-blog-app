import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBlogsComponent } from './get-all-blogs.component';

describe('GetAllBlogsComponent', () => {
  let component: GetAllBlogsComponent;
  let fixture: ComponentFixture<GetAllBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllBlogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
