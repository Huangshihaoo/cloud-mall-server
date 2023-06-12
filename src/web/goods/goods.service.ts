import { Injectable } from '@nestjs/common';
@Injectable()
export class GoodsService {
  getHelloWorld(): string {
    return 'Hello world';
  }
}
