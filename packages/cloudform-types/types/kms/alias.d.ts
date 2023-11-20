import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface AliasProperties {
    TargetKeyId: Value<string>;
    AliasName: Value<string>;
}
export default class Alias extends ResourceBase<AliasProperties> {
    constructor(properties: AliasProperties);
}
