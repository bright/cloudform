import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface KeySigningKeyProperties {
    HostedZoneId: Value<string>;
    Status: Value<string>;
    Name: Value<string>;
    KeyManagementServiceArn: Value<string>;
}
export default class KeySigningKey extends ResourceBase<KeySigningKeyProperties> {
    constructor(properties: KeySigningKeyProperties);
}
