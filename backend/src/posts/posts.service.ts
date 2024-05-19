import { Injectable, NotFoundException } from '@nestjs/common';

interface PostsModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

type TypePost = Pick<PostsModel, 'author' | 'title' | 'content'>

let posts: PostsModel[] = [
  {
    id: 1,
    author: '조경문',
    title: '오늘 비가 많이 오네요',
    content: '비가 오는 날엔 ~ ~ ~ ',
    likeCount: 100,
    commentCount: 20
  }
]

@Injectable()
export class PostsService {
  getAllPosts(): PostsModel[] {
    return posts;
  }

  getPostById(id: number): PostsModel {
    const post: PostsModel = posts.find((post: PostsModel): boolean => post.id === id)

    if (!post) throw new (NotFoundException)

    return post
  }

  createPost({ author, title, content }: TypePost): PostsModel {
    const newId: number = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
    const post: PostsModel = {
      id: newId,
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0
    }

    posts = [...posts, post]

    return post
  }
}
