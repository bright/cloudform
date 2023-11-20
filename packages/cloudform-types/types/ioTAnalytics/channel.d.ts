import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ChannelStorage {
    CustomerManagedS3?: CustomerManagedS3;
    ServiceManagedS3?: {
        [key: string]: any;
    };
    constructor(properties: ChannelStorage);
}
export declare class CustomerManagedS3 {
    Bucket: Value<string>;
    RoleArn: Value<string>;
    KeyPrefix?: Value<string>;
    constructor(properties: CustomerManagedS3);
}
export declare class RetentionPeriod {
    NumberOfDays?: Value<number>;
    Unlimited?: Value<boolean>;
    constructor(properties: RetentionPeriod);
}
export interface ChannelProperties {
    ChannelName?: Value<string>;
    ChannelStorage?: ChannelStorage;
    RetentionPeriod?: RetentionPeriod;
    Tags?: List<ResourceTag>;
}
export default class Channel extends ResourceBase<ChannelProperties> {
    static ChannelStorage: typeof ChannelStorage;
    static CustomerManagedS3: typeof CustomerManagedS3;
    static RetentionPeriod: typeof RetentionPeriod;
    constructor(properties?: ChannelProperties);
}
