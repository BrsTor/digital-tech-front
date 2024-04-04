import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/sign-up/auth.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  providers: [PostsService, AuthService]
})
export class PostComponent implements OnInit {

  @Input() post!: Post;
  user: User | undefined;

  constructor(private postsService: PostsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserByUsername(this.post.author).subscribe((resp) =>{
      this.user = resp
    })
  }
}
