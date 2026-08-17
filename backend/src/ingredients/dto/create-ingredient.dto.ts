import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { Transform } from 'class-transformer';

// Validates the POST body. With the global ValidationPipe (whitelist +
// forbidNonWhitelisted), a missing/blank `name` or any extra field is
// rejected with a 400 before the controller runs.
//
// @Transform trims first so a whitespace-only name ("   ") becomes "" and is
// then caught by @IsNotEmpty — otherwise it would slip past validation.
export class CreateIngredientDto {
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name!: string;
}
