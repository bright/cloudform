import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Validators {
    Type?: Value<string>;
    Content?: Value<string>;
    constructor(properties: Validators);
}
export declare class Tags {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: Tags);
}
export interface ConfigurationProfileProperties {
    LocationUri: Value<string>;
    Description?: Value<string>;
    Validators?: List<Validators>;
    RetrievalRoleArn?: Value<string>;
    ApplicationId: Value<string>;
    Tags?: List<Tags>;
    Name: Value<string>;
}
export default class ConfigurationProfile extends ResourceBase<ConfigurationProfileProperties> {
    static Validators: typeof Validators;
    static Tags: typeof Tags;
    constructor(properties: ConfigurationProfileProperties);
}
