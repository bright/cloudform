import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ConnectionProperties {
    ConnectionName: Value<string>;
    ProviderType: Value<string>;
}
export default class Connection extends ResourceBase<ConnectionProperties> {
    constructor(properties: ConnectionProperties);
}
