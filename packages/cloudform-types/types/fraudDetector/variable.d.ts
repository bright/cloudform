import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface VariableProperties {
    Name: Value<string>;
    DataSource: Value<string>;
    DataType: Value<string>;
    DefaultValue: Value<string>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    VariableType?: Value<string>;
}
export default class Variable extends ResourceBase<VariableProperties> {
    constructor(properties: VariableProperties);
}
