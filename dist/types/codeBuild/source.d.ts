import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Type = "*" | "CODEPIPELINE" | "S3" | "NO_ARTIFACTS" | "GITHUB";
export interface SourceProperties {
    BuildSpec: Value<string>;
    Location: Value<string>;
    Type: Value<Type>;
}
export default class Source extends ResourceBase {
    constructor(properties: SourceProperties, dependsOn?: Value<string>);
}
