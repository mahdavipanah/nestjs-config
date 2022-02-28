import { FactoryProvider } from '@nestjs/common/interfaces';
import { v4 as uuid } from 'uuid';
import { ConfigFactory } from '../interfaces';
import { getConfigToken } from './get-config-token.util';
import { ConfigFactoryKeyHost } from './register-as.util';

export type CustomConfig = ConfigFactory & Partial<ConfigFactoryKeyHost>;

export function createConfigProvider(factory: CustomConfig): FactoryProvider {
  const uniqId = uuid();
  return {
    provide: factory.KEY || getConfigToken(uniqId),
    useFactory: factory,
    inject: [],
  };
}
