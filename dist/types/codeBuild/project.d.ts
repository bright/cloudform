import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Artifacts {
    Path?: Value<string>;
    Type: Value<string>;
    Packaging?: Value<string>;
    Location?: Value<string>;
    Name?: Value<string>;
    NamespaceType?: Value<string>;
    constructor(properties: Artifacts);
}
export declare class SourceAuth {
    Type: Value<string>;
    Resource?: Value<string>;
    constructor(properties: SourceAuth);
}
export declare class Environment {
    Type: Value<string>;
    EnvironmentVariables?: List<EnvironmentVariable>;
    PrivilegedMode?: Value<boolean>;
    Image: Value<string>;
    ComputeType: Value<string>;
    constructor(properties: Environment);
}
export declare class EnvironmentVariable {
    Type?: Value<string>;
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: EnvironmentVariable);
}
export declare class Source {
    Type: Value<string>;
    Auth?: SourceAuth;
    BuildSpec?: Value<string>;
    Location?: Value<string>;
    constructor(properties: Source);
}
export interface ProjectProperties {
    Artifacts: Artifacts;
    Description?: Value<string>;
    ServiceRole: Value<string>;
    Environment: Environment;
    EncryptionKey?: Value<string>;
    Source: Source;
    Tags?: ResourceTag[];
    Name?: Value<string>;
    TimeoutInMinutes?: Value<number>;
}
export default class Project extends ResourceBase {
    constructor(properties: ProjectProperties, dependsOn?: Value<string> | Value<string>[]);
}
