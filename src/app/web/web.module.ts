import { Module } from '@nestjs/common';
import { GoodsController } from './goods/goods.controller';
import { GoodsService } from './goods/goods.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
@Module({
  controllers: [GoodsController, UsersController],
  providers: [GoodsService, UsersService],
  exports: [GoodsService],
})
export class WebModule {}
