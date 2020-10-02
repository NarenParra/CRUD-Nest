import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post as Crud } from '../post/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Crud])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
