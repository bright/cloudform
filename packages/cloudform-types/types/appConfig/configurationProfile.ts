/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Validators {
    Type?: Value<string>
    Content?: Value<string>

    constructor(properties: Validators) {
        Object.assign(this, properties)
    }
}

export class Tags {
    Value?: Value<string>
    Key?: Value<string>

    constructor(properties: Tags) {
        Object.assign(this, properties)
    }
}

export interface ConfigurationProfileProperties {
    LocationUri: Value<string>
    Description?: Value<string>
    RetrievalRoleArn?: Value<string>
    ApplicationId: Value<string>
    Name: Value<string>
}

export default class ConfigurationProfile extends ResourceBase<ConfigurationProfileProperties> {
    static Validators = Validators
    static Tags = Tags

    constructor(properties: ConfigurationProfileProperties) {
        super('AWS::AppConfig::ConfigurationProfile', properties)
    }
}
