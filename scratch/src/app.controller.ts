import { Controller, Get } from '@nestjs/common'

@Controller('/app')
export class AppController {
  @Get('/asdf')
  getRootRoute() {
    return 'Hey Bubster!';
  }

  @Get('/bye')
  getByeThere() {
    return 'Bye Bubbatron';
  }
}