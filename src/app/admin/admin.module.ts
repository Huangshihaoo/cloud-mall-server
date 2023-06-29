import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class AdminModule {}