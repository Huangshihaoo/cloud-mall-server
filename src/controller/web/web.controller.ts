import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { PostHelloDot } from 'src/dot/web/WebDto';
import { WebService } from 'src/service/web/web.service';

@Controller('web')
export class WebController {
  constructor(private webService: WebService) {
    // super(webService);
  }
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
