import { Injectable, NotFoundException } from '@nestjs/common';

export interface PostsModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

export type TypeCreatePost = Pick<PostsModel, 'author' | 'title' | 'content'>;
export type UpdatePost = Omit<PostsModel, 'likeCount' | 'commentCount'>;

let posts: PostsModel[] = [
  {
    id: 1,
    author: '조경문',
    title: '오늘 비가 많이 오네요',
    content: '비가 오는 날엔 ~ ~ ~ ',
    likeCount: 100,
    commentCount: 20
  }
];

@Injectable()
export class PostsService {
  getAllPosts(): PostsModel[] {
    return posts;
  }

  getPostById(id: number): PostsModel {
    const post = posts.find(post => post.id === id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  createPost({ author, title, content }: TypeCreatePost): PostsModel {
    const newId: number = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
    const post: PostsModel = {
      id: newId,
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0
    };
    posts = [...posts, post];
    return post;
  }

  updatePost({ id, author, title, content }: UpdatePost): PostsModel {
    const post = posts.find(post => post.id === id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    if (author) post.author = author;
    if (title) post.title = title;
    if (content) post.content = content;

    posts = posts.map(prevPost => prevPost.id === id ? post : prevPost)

    return post;
  }

  deletePost(postId: number) {
    const post = posts.find(post => post.id === postId)
    if (!post) {
      throw new NotFoundException('Post not found');
    }

    posts = posts.filter(post => post.id !== postId)

    return postId
  }
}
