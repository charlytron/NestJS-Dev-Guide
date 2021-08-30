import { Injectable } from '@nestjs/common'
import { readFile, writeFile } from 'fs/promises'
import { floor } from '../../../../../charlestompkins/Library/Caches/typescript/4.3/node_modules/@types/lodash';

@Injectable()
export class MessagesRepository {
  // async here bec we need to read a file from the HD
  async findOne (id: string) {
    const contents = await readFile('messages.json', 'utf8')
    const messages = JSON.parse(contents)

    return messages[id]
  }

  async findAll () {
    const contents = await readFile('messages.json', 'utf8')
    const messages = JSON.parse(contents)

    return messages
  }

  async create (content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
