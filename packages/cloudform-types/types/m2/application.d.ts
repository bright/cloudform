import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class Definition {
    Content?: Value<string>;
    S3Location?: Value<string>;
    constructor(properties: Definition);
}
export interface ApplicationProperties {
    Description?: Value<string>;
    KmsKeyId?: Value<string>;
    Definition: Definition;
    EngineType: Value<string>;
    RoleArn?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class Application extends ResourceBase<ApplicationProperties> {
    static Definition: typeof Definition;
    constructor(properties: ApplicationProperties);
}
