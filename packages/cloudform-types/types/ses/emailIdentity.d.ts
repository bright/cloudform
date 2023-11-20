import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class ConfigurationSetAttributes {
    ConfigurationSetName?: Value<string>;
    constructor(properties: ConfigurationSetAttributes);
}
export declare class DkimAttributes {
    SigningEnabled?: Value<boolean>;
    constructor(properties: DkimAttributes);
}
export declare class DkimSigningAttributes {
    DomainSigningPrivateKey?: Value<string>;
    DomainSigningSelector?: Value<string>;
    NextSigningKeyLength?: Value<string>;
    constructor(properties: DkimSigningAttributes);
}
export declare class FeedbackAttributes {
    EmailForwardingEnabled?: Value<boolean>;
    constructor(properties: FeedbackAttributes);
}
export declare class MailFromAttributes {
    MailFromDomain?: Value<string>;
    BehaviorOnMxFailure?: Value<string>;
    constructor(properties: MailFromAttributes);
}
export interface EmailIdentityProperties {
    ConfigurationSetAttributes?: ConfigurationSetAttributes;
    EmailIdentity: Value<string>;
    DkimSigningAttributes?: DkimSigningAttributes;
    DkimAttributes?: DkimAttributes;
    FeedbackAttributes?: FeedbackAttributes;
    MailFromAttributes?: MailFromAttributes;
}
export default class EmailIdentity extends ResourceBase<EmailIdentityProperties> {
    static ConfigurationSetAttributes: typeof ConfigurationSetAttributes;
    static DkimAttributes: typeof DkimAttributes;
    static DkimSigningAttributes: typeof DkimSigningAttributes;
    static FeedbackAttributes: typeof FeedbackAttributes;
    static MailFromAttributes: typeof MailFromAttributes;
    constructor(properties: EmailIdentityProperties);
}
