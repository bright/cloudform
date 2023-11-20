import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Credential {
    SecretId?: Value<string>;
    DatabaseName?: Value<string>;
    CredentialType?: Value<string>;
    constructor(properties: Credential);
}
export interface ApplicationProperties {
    Instances?: List<Value<string>>;
    ApplicationType: Value<string>;
    SapInstanceNumber?: Value<string>;
    ApplicationId: Value<string>;
    Credentials?: List<Credential>;
    Tags?: List<ResourceTag>;
    Sid?: Value<string>;
}
export default class Application extends ResourceBase<ApplicationProperties> {
    static Credential: typeof Credential;
    constructor(properties: ApplicationProperties);
}
