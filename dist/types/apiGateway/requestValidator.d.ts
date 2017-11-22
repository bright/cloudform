import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface RequestValidatorProperties {
    Name?: Value<string>;
    RestApiId: Value<string>;
    ValidateRequestBody?: Value<boolean>;
    ValidateRequestParameters?: Value<boolean>;
}
export default class RequestValidator extends ResourceBase {
    constructor(properties: RequestValidatorProperties, dependsOn?: Value<string>);
}
