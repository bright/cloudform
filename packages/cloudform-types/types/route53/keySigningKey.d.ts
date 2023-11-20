import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface KeySigningKeyProperties {
    Status: Value<string>;
    KeyManagementServiceArn: Value<string>;
    HostedZoneId: Value<string>;
    Name: Value<string>;
}
export default class KeySigningKey extends ResourceBase<KeySigningKeyProperties> {
    constructor(properties: KeySigningKeyProperties);
}
