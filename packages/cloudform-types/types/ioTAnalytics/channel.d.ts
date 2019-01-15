import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export declare class RetentionPeriod {
    NumberOfDays?: Value<number>;
    Unlimited?: Value<boolean>;
    constructor(properties: RetentionPeriod);
}
export interface ChannelProperties {
    ChannelName?: Value<string>;
    RetentionPeriod?: RetentionPeriod;
    Tags?: ResourceTag[];
}
export default class Channel extends ResourceBase {
    static RetentionPeriod: typeof RetentionPeriod;
    constructor(properties?: ChannelProperties);
}
