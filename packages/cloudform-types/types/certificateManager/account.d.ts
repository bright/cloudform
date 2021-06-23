import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class ExpiryEventsConfiguration {
    DaysBeforeExpiry?: Value<number>;
    constructor(properties: ExpiryEventsConfiguration);
}
export interface AccountProperties {
    ExpiryEventsConfiguration: ExpiryEventsConfiguration;
}
export default class Account extends ResourceBase<AccountProperties> {
    static ExpiryEventsConfiguration: typeof ExpiryEventsConfiguration;
    constructor(properties: AccountProperties);
}
