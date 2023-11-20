import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PhoneNumberProperties {
    Type: Value<string>;
    Description?: Value<string>;
    TargetArn: Value<string>;
    Prefix?: Value<string>;
    CountryCode: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class PhoneNumber extends ResourceBase<PhoneNumberProperties> {
    constructor(properties: PhoneNumberProperties);
}
