import { Injectable } from '@nestjs/common';
@Injectable()
export class WebService {
  getHelloWorld(): string {
    return 'Hello world';
  }
}
