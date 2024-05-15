import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

/**
 * author: string;
 * title: string;
 * content: string;
 * likeCount: number;
 * commentCount;
 */

interface Posts {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

const posts: Posts[] = [
  {
    id: 1,
    author: '조경문',
    title: '오늘 비가 많이 오네요',
    content: '비가 오는 날엔 ~ ~ ~ ',
    likeCount: 100,
    commentCount: 20
  }
]


@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  // 1) GET /posts
  //  모든 POSTS 가져오기
  @Get()
  getPosts() {
    return posts;
  }

  // 2 GET /posts/:id
  // url 파라미터로 매칭되는 포스트 가져오기
  @Get(':id')
  getPost(@Param('id') id: string) {
    return posts.find((post) => post.id === Number(id))
  }
}

// 3 POST /posts
// POST 생성

// 4 PUT /posts/:id
// id 해당되는 POST 변경

// 5 DELETE /posts
// 등록된 posts 삭제
