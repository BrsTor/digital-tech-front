import { Component, OnInit } from '@angular/core';
import { PostComponent } from "../post/post.component";
import { PostsService } from '../../services/posts/posts.service';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  imports: [PostComponent, CommonModule],
  providers: [PostsService]
})
export class HomepageComponent implements OnInit {

  posts!: Array<Post>

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
      this.postsService.getPublishedPosts().subscribe((resp) => {
        this.posts = resp
      }, err => {
        alert('Error Code: '+err.status+'. '+err.statusText +'\n'+err.error.message)
      })
  }
}
