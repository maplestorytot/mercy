import { Component, OnInit } from "../../../../node_modules/@angular/core";
import { Post } from "../post.model";
import { Subscription } from "../../../../node_modules/rxjs";
import { PostService } from "../post.service";
@Component({
  selector: "app-post-display",
  templateUrl: "./post-display.component.html",
  styleUrls: ["./post-display.component.css"]
})
export class PostDisplayComponent implements OnInit {
  constructor(public postsService: PostService) {}
  post: Post;
  private postSub: Subscription;
  ngOnInit() {

    this.post={
      titleMain:'',
      titleFirst:'',
      titleSecond:'',
      descriptionFirst:'',
      descriptionSecond:'',
      imagePathFirst: '',
      imagePathSecond:'',
      likesFirst:0,
      likesSecond:0
      };


    this.postSub = this.postsService
      .getPostsUpdated()
      .subscribe((retreivePost) => {
        this.post.titleMain = retreivePost.titleMain;
        this.post.titleFirst = retreivePost.titleFirst;
        this.post.titleSecond = retreivePost.titleSecond;
        this.post.descriptionFirst = retreivePost.descriptionFirst;
        this.post.descriptionSecond = retreivePost.descriptionSecond;
        this.post.imagePathFirst = retreivePost.imagePathFirst;
        this.post.imagePathSecond = retreivePost.imagePathSecond;
        console.log(this.post.titleMain);
      });
  }
}
