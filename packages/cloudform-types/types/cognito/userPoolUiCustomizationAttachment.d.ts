import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface UserPoolUICustomizationAttachmentProperties {
    CSS?: Value<string>;
    UserPoolId: Value<string>;
    ClientId: Value<string>;
}
export default class UserPoolUICustomizationAttachment extends ResourceBase<UserPoolUICustomizationAttachmentProperties> {
    constructor(properties: UserPoolUICustomizationAttachmentProperties);
}
