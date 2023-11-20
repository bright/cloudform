import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Parameter {
    ParameterValue: Value<string>;
    ParameterName: Value<string>;
    constructor(properties: Parameter);
}
export interface ClusterParameterGroupProperties {
    Description: Value<string>;
    Parameters?: List<Parameter>;
    ParameterGroupName?: Value<string>;
    ParameterGroupFamily: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ClusterParameterGroup extends ResourceBase<ClusterParameterGroupProperties> {
    static Parameter: typeof Parameter;
    constructor(properties: ClusterParameterGroupProperties);
}
