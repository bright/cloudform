import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface VariableProperties {
    DefaultValue: Value<string>;
    Description?: Value<string>;
    VariableType?: Value<string>;
    DataType: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
    DataSource: Value<string>;
}
export default class Variable extends ResourceBase<VariableProperties> {
    constructor(properties: VariableProperties);
}
