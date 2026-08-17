import { Body, Controller, Get, Post } from '@nestjs/common';
import { Ingredient } from '@prisma/client';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';

// Thin controller: routing only, no Prisma calls or business logic here.
@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredients: IngredientsService) {}

  @Get()
  findAll(): Promise<Ingredient[]> {
    return this.ingredients.findAll();
  }

  @Post()
  create(@Body() dto: CreateIngredientDto): Promise<Ingredient> {
    return this.ingredients.create(dto);
  }
}
