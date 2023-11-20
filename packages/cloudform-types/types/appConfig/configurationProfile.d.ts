import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Tags {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: Tags);
}
export declare class Validators {
    Type?: Value<string>;
    Content?: Value<string>;
    constructor(properties: Validators);
}
export interface ConfigurationProfileProperties {
    LocationUri: Value<string>;
    Type?: Value<string>;
    KmsKeyIdentifier?: Value<string>;
    Description?: Value<string>;
    Validators?: List<Validators>;
    RetrievalRoleArn?: Value<string>;
    ApplicationId: Value<string>;
    Tags?: List<Tags>;
    Name: Value<string>;
}
export default class ConfigurationProfile extends ResourceBase<ConfigurationProfileProperties> {
    static Tags: typeof Tags;
    static Validators: typeof Validators;
    constructor(properties: ConfigurationProfileProperties);
}
