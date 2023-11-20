/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AutoBranchCreationConfig {
    EnvironmentVariables?: List<EnvironmentVariable>
    AutoBranchCreationPatterns?: List<Value<string>>
    EnableAutoBranchCreation?: Value<boolean>
    PullRequestEnvironmentName?: Value<string>
    EnablePullRequestPreview?: Value<boolean>
    EnableAutoBuild?: Value<boolean>
    EnablePerformanceMode?: Value<boolean>
    BuildSpec?: Value<string>
    Stage?: Value<string>
    BasicAuthConfig?: BasicAuthConfig
    Framework?: Value<string>

    constructor(properties: AutoBranchCreationConfig) {
        Object.assign(this, properties)
    }
}

export class BasicAuthConfig {
    Username?: Value<string>
    EnableBasicAuth?: Value<boolean>
    Password?: Value<string>

    constructor(properties: BasicAuthConfig) {
        Object.assign(this, properties)
    }
}

export class CustomRule {
    Condition?: Value<string>
    Status?: Value<string>
    Target!: Value<string>
    Source!: Value<string>

    constructor(properties: CustomRule) {
        Object.assign(this, properties)
    }
}

export class EnvironmentVariable {
    Value!: Value<string>
    Name!: Value<string>

    constructor(properties: EnvironmentVariable) {
        Object.assign(this, properties)
    }
}

export interface AppProperties {
    AutoBranchCreationConfig?: AutoBranchCreationConfig
    OauthToken?: Value<string>
    Description?: Value<string>
    Platform?: Value<string>
    EnableBranchAutoDeletion?: Value<boolean>
    Name: Value<string>
    Repository?: Value<string>
    EnvironmentVariables?: List<EnvironmentVariable>
    AccessToken?: Value<string>
    BuildSpec?: Value<string>
    CustomRules?: List<CustomRule>
    BasicAuthConfig?: BasicAuthConfig
    CustomHeaders?: Value<string>
    Tags?: List<ResourceTag>
    IAMServiceRole?: Value<string>
}

export default class App extends ResourceBase<AppProperties> {
    static AutoBranchCreationConfig = AutoBranchCreationConfig
    static BasicAuthConfig = BasicAuthConfig
    static CustomRule = CustomRule
    static EnvironmentVariable = EnvironmentVariable

    constructor(properties: AppProperties) {
        super('AWS::Amplify::App', properties)
    }
}
