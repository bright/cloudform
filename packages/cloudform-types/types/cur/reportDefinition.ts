/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface ReportDefinitionProperties {
    AdditionalArtifacts?: List<Value<string>>
    ReportName: Value<string>
    Compression: Value<string>
    Format: Value<string>
    RefreshClosedReports: Value<boolean>
    S3Bucket: Value<string>
    ReportVersioning: Value<string>
    S3Region: Value<string>
    TimeUnit: Value<string>
    BillingViewArn?: Value<string>
    S3Prefix: Value<string>
    AdditionalSchemaElements?: List<Value<string>>
}

export default class ReportDefinition extends ResourceBase<ReportDefinitionProperties> {


    constructor(properties: ReportDefinitionProperties) {
        super('AWS::CUR::ReportDefinition', properties)
    }
}
