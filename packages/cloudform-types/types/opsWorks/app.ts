/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class DataSource {
    Arn?: Value<string>
    DatabaseName?: Value<string>
    Type?: Value<string>

    constructor(properties: DataSource) {
        Object.assign(this, properties)
    }
}

export class EnvironmentVariable {
    Key!: Value<string>
    Secure?: Value<boolean>
    Value!: Value<string>

    constructor(properties: EnvironmentVariable) {
        Object.assign(this, properties)
    }
}

export class SslConfiguration {
    Certificate?: Value<string>
    Chain?: Value<string>
    PrivateKey?: Value<string>

    constructor(properties: SslConfiguration) {
        Object.assign(this, properties)
    }
}

export class Source {
    Password?: Value<string>
    Revision?: Value<string>
    SshKey?: Value<string>
    Type?: Value<string>
    Url?: Value<string>
    Username?: Value<string>

    constructor(properties: Source) {
        Object.assign(this, properties)
    }
}

export interface AppProperties {
    AppSource?: Source
    Attributes?: {[key: string]: Value<string>}
    DataSources?: List<DataSource>
    Description?: Value<string>
    Domains?: List<Value<string>>
    EnableSsl?: Value<boolean>
    Environment?: List<EnvironmentVariable>
    Name: Value<string>
    Shortname?: Value<string>
    SslConfiguration?: SslConfiguration
    StackId: Value<string>
    Type: Value<string>
}

export default class App extends ResourceBase {
    static DataSource = DataSource
    static EnvironmentVariable = EnvironmentVariable
    static SslConfiguration = SslConfiguration
    static Source = Source

    constructor(properties?: AppProperties) {
        super('AWS::OpsWorks::App', properties)
    }
}
