import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ParameterGroupProperties {
    ParameterNameValues?: {
        [key: string]: any;
    };
    Description?: Value<string>;
    ParameterGroupName?: Value<string>;
}
export default class ParameterGroup extends ResourceBase<ParameterGroupProperties> {
    constructor(properties?: ParameterGroupProperties);
}
