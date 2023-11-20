import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ParameterGroupProperties {
    Description?: Value<string>;
    Parameters?: {
        [key: string]: any;
    };
    ParameterGroupName: Value<string>;
    Family: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ParameterGroup extends ResourceBase<ParameterGroupProperties> {
    constructor(properties: ParameterGroupProperties);
}
