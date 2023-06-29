/**
 * 根模块
 */
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { AdminModule } from './app/admin/admin.module'; // 后台模块
import { WebModule } from './app/web/web.module'; // 前台模块
import { RouterModule } from '@nestjs/core';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'admin',
        module: AdminModule,
      },
      {
        path: 'web',
        module: WebModule,
      },
    ]),
    AdminModule,
    WebModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
