import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DefinitionParameter {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: DefinitionParameter);
}
export interface ServiceActionProperties {
    Description?: Value<string>;
    Definition: List<DefinitionParameter>;
    AcceptLanguage?: Value<string>;
    DefinitionType: Value<string>;
    Name: Value<string>;
}
export default class ServiceAction extends ResourceBase<ServiceActionProperties> {
    static DefinitionParameter: typeof DefinitionParameter;
    constructor(properties: ServiceActionProperties);
}
