import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MailFromAttributes {
    MailFromDomain?: Value<string>;
    BehaviorOnMxFailure?: Value<string>;
    constructor(properties: MailFromAttributes);
}
export declare class Tags {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: Tags);
}
export interface IdentityProperties {
    FeedbackForwardingEnabled?: Value<boolean>;
    DkimSigningEnabled?: Value<boolean>;
    Tags?: List<Tags>;
    Name: Value<string>;
    MailFromAttributes?: MailFromAttributes;
}
export default class Identity extends ResourceBase<IdentityProperties> {
    static MailFromAttributes: typeof MailFromAttributes;
    static Tags: typeof Tags;
    constructor(properties: IdentityProperties);
}
