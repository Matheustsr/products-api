import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAllProducts(): string {
    return 'All products';
  }

  @Get(':id')
  getProduct(@Param() params): string {
    return `This product with id ${params.id}`;
  }

  @Post()
  createProduct(@Body() produto): string {
    return `This action adds a new ${produto}`;
  }

  @Put(':id')
  updateProduct(@Body() produto): string {
    return `This action updates a ${produto.id}`;
  }

  @Delete(':id')
  deleteProduct(@Param() params): string {
    return `This action removes a ${params.id}`;
  }
}
