import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface EmailConfigurationProperties {
    ReplyToEmailAddress?: Value<string>;
    SourceArn?: Value<string>;
}
export default class EmailConfiguration extends ResourceBase {
    constructor(properties: EmailConfigurationProperties, dependsOn?: Value<string>);
}
