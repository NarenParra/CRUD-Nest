import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto, EditPostDto } from './dto';
import { Post } from './entities';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async getMany() {
    const data = await this.postRepository.find();
    return {
      message: 'Peticion creada',
      data,
    };
  }
  async getOne(id: number) {
    const post = await this.postRepository.findOne(id);
    if (!post) throw new NotFoundException('Post does not exit');
    return {
      message: 'Peticion creada',
      post,
    };
  }
  async editOne(id: number, dto: EditPostDto) {
    const post = await this.postRepository.findOne(id);

    if (!post) throw new NotFoundException('POst does not exist');

    const editedPost = Object.assign(post, dto);
    return await this.postRepository.save(editedPost);
  }
  async deleteOne(id: number) {
    return await this.postRepository.delete(id);
  }

  async createOne(dto: CreatePostDto) {
    const post = this.postRepository.create(dto as any);
    return await this.postRepository.save(post);
  }
}
