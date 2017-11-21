import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Packaging = "*" | "NONE" | "ZIP"
export type Type = "*" | "CODEPIPELINE" | "S3" | "NO_ARTIFACTS"

export interface ArtifactsProperties {
    Location?: Value<string>
    Name?: Value<string>
    NamespaceType?: Value<string>
    Packaging?: Value<Packaging>
    Path?: Value<string>
    Type?: Value<Type>
}

export default class Artifacts extends ResourceBase {
    constructor(properties: ArtifactsProperties, dependsOn?: Value<string>) {
        super('AWS::CodeBuild::Artifacts', properties, dependsOn)
    }
}