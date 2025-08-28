import { Module } from '@nestjs/common';
import { Shop } from '../shops/entities/shop.entity';
import { ShopService } from './shops.service';
import { ShopController } from './shops.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Shop])],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopsModule {}
