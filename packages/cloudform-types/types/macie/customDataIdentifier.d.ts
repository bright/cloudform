import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface CustomDataIdentifierProperties {
    Name: Value<string>;
    Description?: Value<string>;
    Regex: Value<string>;
    MaximumMatchDistance?: Value<number>;
    Keywords?: List<Value<string>>;
    IgnoreWords?: List<Value<string>>;
}
export default class CustomDataIdentifier extends ResourceBase<CustomDataIdentifierProperties> {
    constructor(properties: CustomDataIdentifierProperties);
}
