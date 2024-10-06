import { Inject, Injectable } from '@nestjs/common';
import { OrderDto } from './order.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDERS_SERVICE') private readonly rabbitClient: ClientProxy,
  ) {}
  async placeOrder(order: OrderDto): Promise<any> {
    const result = await this.rabbitClient
      .send('order-placed', order)
      .toPromise();
    return result;
  }
}
