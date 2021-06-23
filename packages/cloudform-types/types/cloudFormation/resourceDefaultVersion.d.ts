import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResourceDefaultVersionProperties {
    TypeVersionArn?: Value<string>;
    TypeName?: Value<string>;
    VersionId?: Value<string>;
}
export default class ResourceDefaultVersion extends ResourceBase<ResourceDefaultVersionProperties> {
    constructor(properties?: ResourceDefaultVersionProperties);
}
