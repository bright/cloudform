import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Tags {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: Tags);
}
export declare class MailFromAttributes {
    MailFromDomain?: Value<string>;
    BehaviorOnMxFailure?: Value<string>;
    constructor(properties: MailFromAttributes);
}
export interface IdentityProperties {
    FeedbackForwardingEnabled?: Value<boolean>;
    DkimSigningEnabled?: Value<boolean>;
    Tags?: List<Tags>;
    Name: Value<string>;
    MailFromAttributes?: MailFromAttributes;
}
export default class Identity extends ResourceBase<IdentityProperties> {
    static Tags: typeof Tags;
    static MailFromAttributes: typeof MailFromAttributes;
    constructor(properties: IdentityProperties);
}
