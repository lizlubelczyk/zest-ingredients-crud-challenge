import { Module } from '@nestjs/common';
import { IngredientsController } from './ingredients.controller';
import { IngredientsService } from './ingredients.service';

// PrismaService comes from the @Global() PrismaModule, so no need to import it.
@Module({
  controllers: [IngredientsController],
  providers: [IngredientsService],
})
export class IngredientsModule {}
