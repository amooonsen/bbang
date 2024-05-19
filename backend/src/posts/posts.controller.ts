import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsModel, TypeCreatePost, UpdatePost } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  // 1) GET /posts
  // 모든 POSTS 가져오기
  @Get()
  getPosts(): PostsModel[] {
    return this.postsService.getAllPosts();
  }

  // 2) GET /posts/:id
  // url 파라미터로 매칭되는 포스트 가져오기
  @Get(':id')
  getPost(@Param('id') id: string): PostsModel {
    return this.postsService.getPostById(+id);
  }

  // 3) POST /posts
  // POST 생성
  @Post()
  postPosts(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string
  ): TypeCreatePost {
    return this.postsService.createPost({ author, title, content });
  }

  // 4) PUT /posts/:id
  // id에 해당되는 POST 변경
  @Put(':id')
  putPosts(
    @Param('id') id: string,
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string
  ): UpdatePost {
    return this.postsService.updatePost({ id: +id, author, title, content });
  }

  // 5) DELETE /posts/:id
  // id에 해당되는 POST 삭제
  @Delete(':id')
  deletePost(@Param('id') id: string): void {
    this.postsService.deletePost(+id);
  }
}
