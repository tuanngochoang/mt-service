import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { ShopService } from './shops.service';
import { Shop } from '../shops/entities/shop.entity';

@Controller('/api/shops')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get()
  async findAll(): Promise<Shop[]> {
    return this.shopService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Shop> {
    return this.shopService.findOne(+id);
  }

  @Post()
  async create(@Body() shopData: Partial<Shop>): Promise<Shop> {
    return this.shopService.create(shopData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() shopData: Partial<Shop>): Promise<Shop> {
    return this.shopService.update(+id, shopData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.shopService.remove(+id);
  }
}