/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AppConfigResourceObject {
    EnvironmentId!: Value<string>
    ApplicationId!: Value<string>

    constructor(properties: AppConfigResourceObject) {
        Object.assign(this, properties)
    }
}

export class DataDeliveryObject {
    S3?: S3Destination
    LogGroup?: Value<string>

    constructor(properties: DataDeliveryObject) {
        Object.assign(this, properties)
    }
}

export class S3Destination {
    BucketName!: Value<string>
    Prefix?: Value<string>

    constructor(properties: S3Destination) {
        Object.assign(this, properties)
    }
}

export interface ProjectProperties {
    DataDelivery?: DataDeliveryObject
    Description?: Value<string>
    AppConfigResource?: AppConfigResourceObject
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Project extends ResourceBase<ProjectProperties> {
    static AppConfigResourceObject = AppConfigResourceObject
    static DataDeliveryObject = DataDeliveryObject
    static S3Destination = S3Destination

    constructor(properties: ProjectProperties) {
        super('AWS::Evidently::Project', properties)
    }
}
