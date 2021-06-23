import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DefinitionParameter {
    Key: Value<string>;
    Value: Value<string>;
    constructor(properties: DefinitionParameter);
}
export interface ServiceActionProperties {
    AcceptLanguage?: Value<string>;
    Name: Value<string>;
    DefinitionType: Value<string>;
    Definition: List<DefinitionParameter>;
    Description?: Value<string>;
}
export default class ServiceAction extends ResourceBase<ServiceActionProperties> {
    static DefinitionParameter: typeof DefinitionParameter;
    constructor(properties: ServiceActionProperties);
}
