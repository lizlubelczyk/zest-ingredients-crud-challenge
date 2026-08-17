import { Injectable } from '@nestjs/common';
import { Ingredient, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';

// Business logic + all Prisma access lives here, not in the controller.
@Injectable()
export class IngredientsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Ingredient[]> {
    return this.prisma.ingredient.findMany({ orderBy: { name: 'asc' } });
  }

  create(dto: CreateIngredientDto): Promise<Ingredient> {
    const data: Prisma.IngredientCreateInput = { name: dto.name };
    return this.prisma.ingredient.create({ data });
  }
}
