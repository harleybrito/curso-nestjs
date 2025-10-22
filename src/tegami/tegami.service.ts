import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Tegami } from './entity/tegami.entity';

@Injectable()
export class TegamiService {
  private lastId = 0;
  private tegamis: Tegami[] = [
    {
      id: 0,
      text: 'Hello, this is a sample tegami.',
      from: 'Alice',
      to: 'Bob',
      readen: false,
      date: new Date(),
    },
  ];

  readAll(): Tegami[] {
    return this.tegamis;
  }

  read(id: number): Tegami {
    const tegami = this.tegamis.find((tegami) => tegami.id === id);
    if (tegami) return tegami;
    throw new NotFoundException('Tegami not found');
  }

  create(body: any): Tegami {
    this.lastId++;
    const newTegami: Tegami = {
      id: this.lastId,
      ...body,
    };
    this.tegamis.push(newTegami);
    return newTegami;
  }

  update(id: number, body: any): Tegami {
    const index = this.tegamis.findIndex((tegami) => tegami.id === id);
    if (index >= 0) {
      const oldTegami = this.tegamis[index];
      this.tegamis[index] = {
        ...oldTegami,
        ...body,
      };
      return this.tegamis[index];
    } else {
      throw new NotFoundException('Tegami not found');
    }
  }

  delete(id: number): boolean {
    const index = this.tegamis.findIndex((tegami) => tegami.id === id);
    if (index >= 0) {
      this.tegamis.splice(index, 1);
      return true;
    } else {
      throw new NotFoundException('Tegami not found');
    }
  }
}
