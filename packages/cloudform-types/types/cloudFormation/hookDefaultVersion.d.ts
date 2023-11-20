import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface HookDefaultVersionProperties {
    VersionId?: Value<string>;
    TypeName?: Value<string>;
    TypeVersionArn?: Value<string>;
}
export default class HookDefaultVersion extends ResourceBase<HookDefaultVersionProperties> {
    constructor(properties?: HookDefaultVersionProperties);
}
