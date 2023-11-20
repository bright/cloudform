/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class FileConfiguration {
    Filters?: {[key: string]: any}
    Folders!: List<Value<string>>

    constructor(properties: FileConfiguration) {
        Object.assign(this, properties)
    }
}

export class ScheduleConfig {
    FirstExecutionFrom?: Value<string>
    ScheduleExpression!: Value<string>
    Object?: Value<string>

    constructor(properties: ScheduleConfig) {
        Object.assign(this, properties)
    }
}

export interface DataIntegrationProperties {
    ScheduleConfig?: ScheduleConfig
    FileConfiguration?: FileConfiguration
    Description?: Value<string>
    SourceURI: Value<string>
    ObjectConfiguration?: {[key: string]: any}
    KmsKey: Value<string>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class DataIntegration extends ResourceBase<DataIntegrationProperties> {
    static FileConfiguration = FileConfiguration
    static ScheduleConfig = ScheduleConfig

    constructor(properties: DataIntegrationProperties) {
        super('AWS::AppIntegrations::DataIntegration', properties)
    }
}
