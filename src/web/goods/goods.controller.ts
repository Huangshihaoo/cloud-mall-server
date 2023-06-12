import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import type { Request } from 'express';
import { PostHelloDot } from './dto/GoodsDto';
import { GoodsService } from './goods.service';

@Controller('goods')
export class GoodsController {
  constructor(private webService: GoodsService) {}

  @Get('hello')
  hello(@Req() request: Request): string {
    console.log(request);
    return 'hello world';
  }
  @Get('hello1')
  hello1(): string {
    return this.webService.getHelloWorld();
  }
  @Get('hello2')
  hello2(@Param() param: { id: string }): string {
    console.log(param);
    return 'hello world';
  }
  @Get(':id')
  hello3(@Param() param: { id: string }) {
    console.log(param);

    return 'hello world';
  }
  @Post('hello')
  postHello(@Body() postHelloDot: PostHelloDot) {
    console.log(postHelloDot);
    return { asdsa: 1245 };
  }
}
