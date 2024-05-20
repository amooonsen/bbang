import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsModel, TypeCreatePost, UpdatePost } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  // 1) GET /posts
  @Get()
  getPosts(): PostsModel[] {
    return this.postsService.getAllPosts();
  }

  // 2) GET /posts/:id
  @Get(':id')
  getPost(@Param('id') id: string): PostsModel {
    return this.postsService.getPostById(+id);
  }

  // 3) POST /posts
  @Post()
  postPosts(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string
  ): TypeCreatePost {
    return this.postsService.createPost({ author, title, content });
  }

  // 4) PUT /posts/:id
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
  @Delete(':id')
  deletePost(@Param('id') id: string): void {
    this.postsService.deletePost(+id);
  }
}
