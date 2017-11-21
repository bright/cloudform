import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface DomainValidationOptionsProperties {
    DomainName: Value<string>;
    ValidationDomain?: Value<string>[];
}
export default class DomainValidationOptions extends ResourceBase {
    constructor(properties: DomainValidationOptionsProperties, dependsOn?: Value<string>);
}
