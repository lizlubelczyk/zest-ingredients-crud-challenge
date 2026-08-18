import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
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

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    return this.ingredients.remove(id);
  }
}
