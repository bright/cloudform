import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface MethodResponsesProperties {
    ResponseModels?: any;
    ResponseParameters?: any;
    StatusCode: Value<string>;
}
export default class MethodResponses extends ResourceBase {
    constructor(properties: MethodResponsesProperties, dependsOn?: Value<string>);
}
