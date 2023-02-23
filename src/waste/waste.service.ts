import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Waste } from './waste.entity';

@Injectable()
export class WasteService extends TypeOrmCrudService<Waste> {
    constructor(@InjectRepository(Waste) repo) {
        super(repo)
    }
}
