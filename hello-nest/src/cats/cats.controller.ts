import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/create-cat.dto';
@Controller('cats')
export class CatsController {
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat';
    }

    @Get()
    async findAll(): Promise<any[]> {
        return [];
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} cat`;
    }
}
