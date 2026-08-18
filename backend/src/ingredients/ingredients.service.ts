import { Injectable, NotFoundException } from '@nestjs/common';
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

  async remove(id: string): Promise<void> {
    // 404 (not 500) if the id doesn't exist, so the API stays predictable.
    const existing = await this.prisma.ingredient.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundException('Ingredient not found.');
    }
    await this.prisma.ingredient.delete({ where: { id } });
  }
}
