import { Component, OnInit } from "../../../../node_modules/@angular/core";
import {
  FormGroup,
  FormControl,
  Validators
} from "../../../../node_modules/@angular/forms";
import { PostService } from "../post.service";
import { Post } from "../post.model";

@Component({
  selector: "app-create-display",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {
  constructor(public postsService:PostService){}
  private newPost:Post;
  form: FormGroup;

  ngOnInit() {
    // creating form at begininning
    this.form = new FormGroup({
      titleMain: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      titleFirst: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      titleSecond: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      descriptionFirst: new FormControl(null, {
        validators: [Validators.required]
      }),
      descriptionSecond: new FormControl(null, {
        validators: [Validators.required]
      }),
      imagePathFirst: new FormControl(null, {
        validators: [Validators.required]
      }),
      imagePathSecond: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }
  onSavePost(){
    if (this.form.invalid) {
      return;
    }
    this.newPost={
      titleMain:this.form.value.titleMain,
      titleFirst:this.form.value.titleFirst,
      titleSecond:this.form.value.titleSecond,
      descriptionFirst:this.form.value.descriptionFirst,
      descriptionSecond:this.form.value.descriptionSecond,
      imagePathFirst:this.form.value.imagePathFirst,
      imagePathSecond:this.form.value.imagePathSecond,
      likesFirst:0,
      likesSecond:0
    }
    this.postsService.addPost(this.newPost);

    this.form.reset();

  }
}
