import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface InviteMessageTemplateProperties {
    EmailMessage?: Value<string>;
    EmailSubject?: Value<string>;
    SMSMessage?: Value<string>;
}
export default class InviteMessageTemplate extends ResourceBase {
    constructor(properties: InviteMessageTemplateProperties, dependsOn?: Value<string>);
}
