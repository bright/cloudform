/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class OrganizationAggregationSource {
    AllAwsRegions?: Value<boolean>
    AwsRegions?: List<Value<string>>
    RoleArn!: Value<string>

    constructor(properties: OrganizationAggregationSource) {
        Object.assign(this, properties)
    }
}

export class AccountAggregationSource {
    AllAwsRegions?: Value<boolean>
    AwsRegions?: List<Value<string>>
    AccountIds!: List<Value<string>>

    constructor(properties: AccountAggregationSource) {
        Object.assign(this, properties)
    }
}

export interface ConfigurationAggregatorProperties {
    AccountAggregationSources?: List<AccountAggregationSource>
    ConfigurationAggregatorName: Value<string>
    OrganizationAggregationSource?: OrganizationAggregationSource
}

export default class ConfigurationAggregator extends ResourceBase<ConfigurationAggregatorProperties> {
    static OrganizationAggregationSource = OrganizationAggregationSource
    static AccountAggregationSource = AccountAggregationSource

    constructor(properties: ConfigurationAggregatorProperties) {
        super('AWS::Config::ConfigurationAggregator', properties)
    }
}
