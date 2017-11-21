import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Type = "*" | "S3"

export interface ArtifactStoreProperties {
    EncryptionKey?: Value<string>
    Location: Value<string>
    Type: Value<Type>
}

export default class ArtifactStore extends ResourceBase {
    constructor(properties: ArtifactStoreProperties, dependsOn?: Value<string>) {
        super('AWS::CodePipeline::ArtifactStore', properties, dependsOn)
    }
}