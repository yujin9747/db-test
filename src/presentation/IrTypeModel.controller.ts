import { Body, Controller, Post } from '@nestjs/common';
import { IrTypeModelService } from '../infra/IrTypeModel.service';
import { CreateIrTypeModelDto } from './dto/CreateIrTypeModel.dto';

@Controller('ir_type_model')
export class IrTypeModelController {
  constructor(private irTypeModelService: IrTypeModelService) {}

  @Post()
  async createUser(@Body() body: CreateIrTypeModelDto) {
    return await this.irTypeModelService.create(body.type, body.model);
  }
}
