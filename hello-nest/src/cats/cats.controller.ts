import { Controller, Get, Post, Param } from '@nestjs/common';
import { getDefaultWatermarks } from 'istanbul-lib-report';

@Controller('cats')
export class CatsController {
    @Post()
    create(): string {
        return 'This action adds a new cat';
    }

    @Get()
    findAll(): string {
        return 'This action return all cats'
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }
}
