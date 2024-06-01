import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostsModel } from './entities/posts.entity';

export interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

export type TypeCreatePost = Pick<PostModel, 'author' | 'title' | 'content'>;
export type UpdatePost = Omit<PostModel, 'likeCount' | 'commentCount'>;

let posts: PostModel[] = [
  {
    id: 1,
    author: '조경문',
    title: '오늘 비가 많이 오네요',
    content: '비가 오는 날엔 ~ ~ ~ ',
    likeCount: 100,
    commentCount: 20,
  },
];

@Injectable()
export class PostsService {
  constructor(
    // PostModel을 다루는 Repository를 생성한다.
    @InjectRepository(PostsModel)
    private readonly postRepository: Repository<PostsModel>,
  ) {}

  async getAllPosts() {
    return await this.postRepository.find();
  }

  async getPostById(id: number) {
    const post = await this.postRepository.findOne({
      where: {
        id,
      },
    });

    if (!post) throw new NotFoundException();

    return post;
  }

  async createPost({ author, title, content }: TypeCreatePost) {
    /**
     * 1. create -> 저장할 객체를 생성한다
     * create는 객체를 생성해주는 작업이기 때문에 동기적으로 실행됨.
     *
     * 2. save -> create에서 생성한 객체를 저장한다
     */
    const post = this.postRepository.create({
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    });

    // 실제 db에서 가져오는 값
    const newPost = await this.postRepository.save(post);

    return newPost;
  }

  updatePost({ id, author, title, content }: UpdatePost): PostModel {
    const post = posts.find((post) => post.id === id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    if (author) post.author = author;
    if (title) post.title = title;
    if (content) post.content = content;

    posts = posts.map((prevPost) => (prevPost.id === id ? post : prevPost));

    return post;
  }

  deletePost(postId: number) {
    const post = posts.find((post) => post.id === postId);
    if (!post) {
      throw new NotFoundException('Post not found');
    }

    posts = posts.filter((post) => post.id !== postId);

    return postId;
  }
}
