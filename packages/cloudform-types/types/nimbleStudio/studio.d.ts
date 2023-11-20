import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class StudioEncryptionConfiguration {
    KeyType: Value<string>;
    KeyArn?: Value<string>;
    constructor(properties: StudioEncryptionConfiguration);
}
export interface StudioProperties {
    UserRoleArn: Value<string>;
    DisplayName: Value<string>;
    StudioName: Value<string>;
    AdminRoleArn: Value<string>;
    StudioEncryptionConfiguration?: StudioEncryptionConfiguration;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class Studio extends ResourceBase<StudioProperties> {
    static StudioEncryptionConfiguration: typeof StudioEncryptionConfiguration;
    constructor(properties: StudioProperties);
}
