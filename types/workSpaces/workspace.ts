/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface WorkspaceProperties {
    BundleId: Value<string>
    DirectoryId: Value<string>
    RootVolumeEncryptionEnabled?: Value<boolean>
    UserName: Value<string>
    UserVolumeEncryptionEnabled?: Value<boolean>
    VolumeEncryptionKey?: Value<string>
}

export default class Workspace extends ResourceBase {
    constructor(properties: WorkspaceProperties, dependsOn?: Value<string>) {
        super('AWS::WorkSpaces::Workspace', properties, dependsOn)
    }
}