/**
 * 根模块
 */
import { Module } from '@nestjs/common';

import { AdminController } from './admin/controller/admin.controller'; // 后台总控制器
import { WebController } from './web/controller/web.controller'; // 前台总控制器
import { AdminService } from './admin/service/admin.service'; // 前台总控制器
import { WebService } from './web/service/web.service'; // 前台总控制器

@Module({
  imports: [],
  controllers: [AdminController, WebController],
  providers: [AdminService, WebService],
})
export class AppModule {}
