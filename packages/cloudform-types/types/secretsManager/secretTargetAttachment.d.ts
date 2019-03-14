import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SecretTargetAttachmentProperties {
    SecretId: Value<string>;
    TargetType: Value<string>;
    TargetId: Value<string>;
}
export default class SecretTargetAttachment extends ResourceBase<SecretTargetAttachmentProperties> {
    constructor(properties: SecretTargetAttachmentProperties);
}
