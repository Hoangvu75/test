import { Injectable } from '@nestjs/common';
import { OrderDto } from './order.dto';

@Injectable()
export class AppService {
  handleOrderPlaced(order: OrderDto) {
    console.log(`Received: ${JSON.stringify(order)}`);
    return {
      message: 'Order placed successfully!',
      orderData: order,
    };
  }
}
