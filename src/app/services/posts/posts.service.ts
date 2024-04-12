import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Post } from '../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient, private router: Router) { }

  getPostById(id: number){
    return this.http.get<Post>(environment.baseApiUrl+'posts/id/'+id, { withCredentials: true })
  }

  getPublishedPosts(){
    return this.http.get<Array<Post>>(environment.baseApiUrl+'posts/published', { withCredentials: true })
  }
}
