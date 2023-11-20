/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class IdMappingTechniques {
    ProviderProperties?: ProviderProperties
    IdMappingType?: Value<string>

    constructor(properties: IdMappingTechniques) {
        Object.assign(this, properties)
    }
}

export class IdMappingWorkflowInputSource {
    InputSourceARN!: Value<string>
    SchemaArn!: Value<string>

    constructor(properties: IdMappingWorkflowInputSource) {
        Object.assign(this, properties)
    }
}

export class IdMappingWorkflowOutputSource {
    KMSArn?: Value<string>
    OutputS3Path!: Value<string>

    constructor(properties: IdMappingWorkflowOutputSource) {
        Object.assign(this, properties)
    }
}

export class IntermediateSourceConfiguration {
    IntermediateS3Path!: Value<string>

    constructor(properties: IntermediateSourceConfiguration) {
        Object.assign(this, properties)
    }
}

export class ProviderProperties {
    IntermediateSourceConfiguration?: IntermediateSourceConfiguration
    ProviderServiceArn!: Value<string>
    ProviderConfiguration?: {[key: string]: Value<string>}

    constructor(properties: ProviderProperties) {
        Object.assign(this, properties)
    }
}

export interface IdMappingWorkflowProperties {
    Description?: Value<string>
    InputSourceConfig: List<IdMappingWorkflowInputSource>
    IdMappingTechniques: IdMappingTechniques
    WorkflowName: Value<string>
    OutputSourceConfig: List<IdMappingWorkflowOutputSource>
    RoleArn: Value<string>
    Tags?: List<ResourceTag>
}

export default class IdMappingWorkflow extends ResourceBase<IdMappingWorkflowProperties> {
    static IdMappingTechniques = IdMappingTechniques
    static IdMappingWorkflowInputSource = IdMappingWorkflowInputSource
    static IdMappingWorkflowOutputSource = IdMappingWorkflowOutputSource
    static IntermediateSourceConfiguration = IntermediateSourceConfiguration
    static ProviderProperties = ProviderProperties

    constructor(properties: IdMappingWorkflowProperties) {
        super('AWS::EntityResolution::IdMappingWorkflow', properties)
    }
}
