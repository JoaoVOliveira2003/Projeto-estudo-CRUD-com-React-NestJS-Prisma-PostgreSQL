import { PartialType } from '@nestjs/mapped-types';
import { CreateCachorroDto } from './create-cachorro.dto';

export class UpdateCachorroDto extends PartialType(CreateCachorroDto) {}
