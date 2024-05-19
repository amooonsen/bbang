import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsModule } from './posts.module';

/**
 * author: string;
 * title: string;
 * content: string;
 * likeCount: number;
 * commentCount;
 */


@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  // 1) GET /posts
  //  모든 POSTS 가져오기
  @Get()
  getPosts() {
    this.postsService.getAllPosts()
  }

  // 2 GET /posts/:id
  // url 파라미터로 매칭되는 포스트 가져오기
  @Get(':id')
  getPost(@Param('id') id: string): PostsModule {
    return this.postsService.getPostById(+id)
  }

  // 3 POST /posts
  // POST 생성
  @Post()
  postPosts(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string
  ): PostsModule {
    return this.postsService.createPost({ author, title, content });
  }

  // 4 PUT /posts/:id
  // id 해당되는 POST 변경

  @Put(':id')
  updatePosts() {

  }


  // 5 DELETE /posts
  // 등록된 posts 삭제
}
