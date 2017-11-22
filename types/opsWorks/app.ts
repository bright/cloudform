/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface DataSourceProperties {
    Arn?: Value<string>
    DatabaseName?: Value<string>
    Type?: Value<string>
}

export class DataSource extends ResourceBase {
    constructor(properties: DataSourceProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::DataSource', properties, dependsOn)
    }
}

export interface EnvironmentVariableProperties {
    Key: Value<string>
    Secure?: Value<boolean>
    Value: Value<string>
}

export class EnvironmentVariable extends ResourceBase {
    constructor(properties: EnvironmentVariableProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::EnvironmentVariable', properties, dependsOn)
    }
}

export interface SslConfigurationProperties {
    Certificate?: Value<string>
    Chain?: Value<string>
    PrivateKey?: Value<string>
}

export class SslConfiguration extends ResourceBase {
    constructor(properties: SslConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::SslConfiguration', properties, dependsOn)
    }
}

export interface SourceProperties {
    Password?: Value<string>
    Revision?: Value<string>
    SshKey?: Value<string>
    Type?: Value<string>
    Url?: Value<string>
    Username?: Value<string>
}

export class Source extends ResourceBase {
    constructor(properties: SourceProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::Source', properties, dependsOn)
    }
}

export interface AppProperties {
    AppSource?: Source
    Attributes?: {[key: string]: Value<string>}
    DataSources?: DataSource[]
    Description?: Value<string>
    Domains?: Value<string>[]
    EnableSsl?: Value<boolean>
    Environment?: EnvironmentVariable[]
    Name: Value<string>
    Shortname?: Value<string>
    SslConfiguration?: SslConfiguration
    StackId: Value<string>
    Type: Value<string>
}

export default class App extends ResourceBase {
    constructor(properties: AppProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::App', properties, dependsOn)
    }
}