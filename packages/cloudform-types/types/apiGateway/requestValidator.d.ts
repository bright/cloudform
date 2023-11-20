import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface RequestValidatorProperties {
    ValidateRequestParameters?: Value<boolean>;
    RestApiId: Value<string>;
    ValidateRequestBody?: Value<boolean>;
    Name?: Value<string>;
}
export default class RequestValidator extends ResourceBase<RequestValidatorProperties> {
    constructor(properties: RequestValidatorProperties);
}
