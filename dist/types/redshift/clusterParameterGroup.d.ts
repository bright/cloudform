import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
export interface ParameterProperties {
    ParameterName: Value<string>;
    ParameterValue: Value<string>;
}
export declare class Parameter extends ResourceBase {
    constructor(properties: ParameterProperties, dependsOn?: Value<string>);
}
export interface ClusterParameterGroupProperties {
    Description: Value<string>;
    ParameterGroupFamily: Value<string>;
    Parameters?: Parameter[];
    Tags?: ResourceTag[];
}
export default class ClusterParameterGroup extends ResourceBase {
    constructor(properties: ClusterParameterGroupProperties, dependsOn?: Value<string>);
}
