import { Injectable } from '@nestjs/common';
import { CreatePostDto, EditPostDto } from './dto';

@Injectable()
export class PostService {
  getMany() {
    return { ok: 'getMany' };
  }
  getOne(id: number) {
    return { ok: 'GetOne' };
  }
  editOne(id: number) {
    return { ok: 'EditOne' };
  }
  deleteOne(id: number) {
    return { ok: 'DeleteOne' };
  }
  updatetOne(id: number, dto: EditPostDto) {
    return { ok: 'UpdateOne' };
  }
  createOne(dto: CreatePostDto) {
    return { ok: 'CreateOne' };
  }
}
