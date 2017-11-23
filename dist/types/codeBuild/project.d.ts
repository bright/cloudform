import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface ArtifactsProperties {
    Path?: Value<string>;
    Type: Value<string>;
    Packaging?: Value<string>;
    Location?: Value<string>;
    Name?: Value<string>;
    NamespaceType?: Value<string>;
}
export declare class Artifacts extends ResourceBase {
    constructor(properties: ArtifactsProperties, dependsOn?: Value<string>);
}
export interface SourceAuthProperties {
    Type: Value<string>;
    Resource?: Value<string>;
}
export declare class SourceAuth extends ResourceBase {
    constructor(properties: SourceAuthProperties, dependsOn?: Value<string>);
}
export interface EnvironmentProperties {
    Type: Value<string>;
    EnvironmentVariables?: EnvironmentVariable[];
    PrivilegedMode?: Value<boolean>;
    Image: Value<string>;
    ComputeType: Value<string>;
}
export declare class Environment extends ResourceBase {
    constructor(properties: EnvironmentProperties, dependsOn?: Value<string>);
}
export interface EnvironmentVariableProperties {
    Type?: Value<string>;
    Value: Value<string>;
    Name: Value<string>;
}
export declare class EnvironmentVariable extends ResourceBase {
    constructor(properties: EnvironmentVariableProperties, dependsOn?: Value<string>);
}
export interface SourceProperties {
    Type: Value<string>;
    Auth?: SourceAuth;
    BuildSpec?: Value<string>;
    Location?: Value<string>;
}
export declare class Source extends ResourceBase {
    constructor(properties: SourceProperties, dependsOn?: Value<string>);
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
    constructor(properties: ProjectProperties, dependsOn?: Value<string>);
}
