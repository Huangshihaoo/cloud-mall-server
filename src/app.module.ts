/**
 * 根模块
 */
import { Module } from '@nestjs/common';

import { AdminModule } from './admin/admin.module'; // 后台模块
import { WebModule } from './web/web.module'; // 前台模块
import { RouterModule } from '@nestjs/core';

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
export class AppModule {}
