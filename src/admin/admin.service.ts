import { Injectable } from '@nestjs/common';
@Injectable()
export class AdminService {
  getHelloWorld() {
    return 'Hello world';
  }
}
