/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class DataSource {
    DataLocation?: Value<string>

    constructor(properties: DataSource) {
        Object.assign(this, properties)
    }
}

export class DatasetImportJob {
    DatasetArn?: Value<string>
    JobName?: Value<string>
    DatasetImportJobArn?: Value<string>
    RoleArn?: Value<string>
    DataSource?: DataSource

    constructor(properties: DatasetImportJob) {
        Object.assign(this, properties)
    }
}

export interface DatasetProperties {
    DatasetGroupArn: Value<string>
    DatasetType: Value<string>
    DatasetImportJob?: DatasetImportJob
    SchemaArn: Value<string>
    Name: Value<string>
}

export default class Dataset extends ResourceBase<DatasetProperties> {
    static DataSource = DataSource
    static DatasetImportJob = DatasetImportJob

    constructor(properties: DatasetProperties) {
        super('AWS::Personalize::Dataset', properties)
    }
}
