/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTegamiDto {
  @IsString({ message: 'Text must be a string.' })
  @IsNotEmpty({ message: 'Text should not be empty.' })
  @MaxLength(500, { message: 'Text must be at most 500 characters long.' })
  @MinLength(5, { message: 'Text must be at least 5 characters long.' })
  readonly text: string;

  @IsString({ message: 'From must be a string.' })
  @IsNotEmpty({ message: 'From should not be empty.' })
  @MaxLength(50, { message: 'From must be at most 50 characters long.' })
  @MinLength(2, { message: 'From must be at least 2 characters long.' })
  readonly from: string;

  @IsString({ message: 'To must be a string.' })
  @IsNotEmpty({ message: 'To should not be empty.' })
  @MaxLength(50, { message: 'To must be at most 50 characters long.' })
  @MinLength(2, { message: 'To must be at least 2 characters long.' })
  readonly to: string;
}
