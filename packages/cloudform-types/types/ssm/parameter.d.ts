import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ParameterProperties {
    Type: Value<string>;
    Description?: Value<string>;
    Policies?: Value<string>;
    AllowedPattern?: Value<string>;
    Tier?: Value<string>;
    Value: Value<string>;
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class Parameter extends ResourceBase<ParameterProperties> {
    constructor(properties: ParameterProperties);
}
