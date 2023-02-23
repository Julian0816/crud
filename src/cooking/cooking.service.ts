import { Cooking } from './cooking.entity';
import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CookingService extends TypeOrmCrudService<Cooking>{
    constructor(@InjectRepository(Cooking) repo) {
        super(repo)
    }
}
