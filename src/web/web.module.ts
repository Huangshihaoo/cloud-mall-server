import { Module } from '@nestjs/common';
import { GoodsController } from './goods/goods.controller';
import { GoodsService } from './goods/goods.service';
@Module({
  imports: [GoodsService],
  controllers: [GoodsController],
  providers: [GoodsService],
  exports: [GoodsService],
})
export class WebModule {}
