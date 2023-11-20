/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class InputSource {
    ApplyNormalization?: Value<boolean>
    InputSourceARN!: Value<string>
    SchemaArn!: Value<string>

    constructor(properties: InputSource) {
        Object.assign(this, properties)
    }
}

export class IntermediateSourceConfiguration {
    IntermediateS3Path!: Value<string>

    constructor(properties: IntermediateSourceConfiguration) {
        Object.assign(this, properties)
    }
}

export class OutputAttribute {
    Hashed?: Value<boolean>
    Name!: Value<string>

    constructor(properties: OutputAttribute) {
        Object.assign(this, properties)
    }
}

export class OutputSource {
    KMSArn?: Value<string>
    OutputS3Path!: Value<string>
    Output!: List<OutputAttribute>
    ApplyNormalization?: Value<boolean>

    constructor(properties: OutputSource) {
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

export class ResolutionTechniques {
    RuleBasedProperties?: RuleBasedProperties
    ProviderProperties?: ProviderProperties
    ResolutionType?: Value<string>

    constructor(properties: ResolutionTechniques) {
        Object.assign(this, properties)
    }
}

export class Rule {
    MatchingKeys!: List<Value<string>>
    RuleName!: Value<string>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class RuleBasedProperties {
    AttributeMatchingModel!: Value<string>
    Rules!: List<Rule>

    constructor(properties: RuleBasedProperties) {
        Object.assign(this, properties)
    }
}

export interface MatchingWorkflowProperties {
    ResolutionTechniques: ResolutionTechniques
    Description?: Value<string>
    InputSourceConfig: List<InputSource>
    WorkflowName: Value<string>
    OutputSourceConfig: List<OutputSource>
    RoleArn: Value<string>
    Tags?: List<ResourceTag>
}

export default class MatchingWorkflow extends ResourceBase<MatchingWorkflowProperties> {
    static InputSource = InputSource
    static IntermediateSourceConfiguration = IntermediateSourceConfiguration
    static OutputAttribute = OutputAttribute
    static OutputSource = OutputSource
    static ProviderProperties = ProviderProperties
    static ResolutionTechniques = ResolutionTechniques
    static Rule = Rule
    static RuleBasedProperties = RuleBasedProperties

    constructor(properties: MatchingWorkflowProperties) {
        super('AWS::EntityResolution::MatchingWorkflow', properties)
    }
}
