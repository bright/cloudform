import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class StudioEncryptionConfiguration {
    KeyArn?: Value<string>;
    KeyType: Value<string>;
    constructor(properties: StudioEncryptionConfiguration);
}
export interface StudioProperties {
    AdminRoleArn: Value<string>;
    DisplayName: Value<string>;
    StudioName: Value<string>;
    UserRoleArn: Value<string>;
    StudioEncryptionConfiguration?: StudioEncryptionConfiguration;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class Studio extends ResourceBase<StudioProperties> {
    static StudioEncryptionConfiguration: typeof StudioEncryptionConfiguration;
    constructor(properties: StudioProperties);
}
