import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';


/**
 * author: string;
 * title: string;
 * content: string;
 * likeCount: number;
 * commentCount;
 */

interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}


@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Get()
  getPost(): Post {
    return {
      author: '조경문',
      title: '오늘 비가 많이 오네요',
      content: '비가 오는 날엔 ~ ~ ~ ',
      likeCount: 100,
      commentCount: 20
    }
  }
}
