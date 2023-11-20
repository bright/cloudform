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

export class AnalysisParameter {
    DefaultValue?: Value<string>
    Type!: Value<string>
    Name!: Value<string>

    constructor(properties: AnalysisParameter) {
        Object.assign(this, properties)
    }
}

export class AnalysisSchema {
    ReferencedTables!: List<Value<string>>

    constructor(properties: AnalysisSchema) {
        Object.assign(this, properties)
    }
}

export class AnalysisSource {
    Text!: Value<string>

    constructor(properties: AnalysisSource) {
        Object.assign(this, properties)
    }
}

export interface AnalysisTemplateProperties {
    MembershipIdentifier: Value<string>
    Description?: Value<string>
    Format: Value<string>
    AnalysisParameters?: List<AnalysisParameter>
    Source: AnalysisSource
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class AnalysisTemplate extends ResourceBase<AnalysisTemplateProperties> {
    static AnalysisParameter = AnalysisParameter
    static AnalysisSchema = AnalysisSchema
    static AnalysisSource = AnalysisSource

    constructor(properties: AnalysisTemplateProperties) {
        super('AWS::CleanRooms::AnalysisTemplate', properties)
    }
}
