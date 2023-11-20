import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface CustomDataIdentifierProperties {
    Description?: Value<string>;
    Keywords?: List<Value<string>>;
    Regex: Value<string>;
    IgnoreWords?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
    MaximumMatchDistance?: Value<number>;
}
export default class CustomDataIdentifier extends ResourceBase<CustomDataIdentifierProperties> {
    constructor(properties: CustomDataIdentifierProperties);
}
