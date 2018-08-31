import { Injectable } from "../../../node_modules/@angular/core";
import { Post } from "./post.model";
import { Subject } from "../../../node_modules/rxjs";

@Injectable({ providedIn: "root" })
export class PostService {
  private currentPost:Post;
  private postsUpdated = new Subject<Post>();

  getPostsUpdated()
  {
    return this.postsUpdated.asObservable();
  }
  getCurrentPost(){
    return this.currentPost;
  }
  addPost(savePost:Post){

      this.currentPost=savePost;
      this.currentPost.likesFirst=0;
      this.currentPost.likesSecond=0;

      this.postsUpdated.next(this.currentPost);

  }
}
