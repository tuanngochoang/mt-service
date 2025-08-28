import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from '../shops/entities/shop.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>,
  ) {}

  // Lấy tất cả cửa hàng
  async findAll(): Promise<Shop[]> {
    return this.shopRepository.find();
  }

  async findOne(id: number): Promise<Shop> {
    const shop = await this.shopRepository.findOneBy({ id });
    if (!shop) {
      throw new NotFoundException(`Shop with ID ${id} not found`);
    }
    return shop;
  }

  async create(shopData: Partial<Shop>): Promise<Shop> {
    const newShop = this.shopRepository.create(shopData);
    return this.shopRepository.save(newShop);
  }

  async update(id: number, shopData: Partial<Shop>): Promise<Shop> {
    const shop = await this.findOne(id); 
    Object.assign(shop, shopData); 
    return this.shopRepository.save(shop);
  }

  async remove(id: number): Promise<void> {
    const shop = await this.findOne(id); 
    await this.shopRepository.remove(shop);
  }
}