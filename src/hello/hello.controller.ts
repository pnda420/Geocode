
import { Controller, Get, Post, Body } from '@nestjs/common';


@Controller('example')
export class HelloController {

    private objects: any[] = [
        {
          name: 'Object 1',
          description: 'This is the first object'
        },
        {
          name: 'Object 2',
          description: 'This is the second object'
        },
        {
          name: 'Object 3',
          description: 'This is the third object'
        }
      ];

  @Post()
  createObject(@Body() object: any): any {
    this.objects.push(object);
    return object;
  }

  @Get()
  getObjects(): any[] {
    return this.objects;
  }

}
