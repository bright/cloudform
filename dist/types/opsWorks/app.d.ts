import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface DataSourceProperties {
    Arn?: Value<string>;
    DatabaseName?: Value<string>;
    Type?: Value<string>;
}
export declare class DataSource extends ResourceBase {
    constructor(properties: DataSourceProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface EnvironmentVariableProperties {
    Key: Value<string>;
    Secure?: Value<boolean>;
    Value: Value<string>;
}
export declare class EnvironmentVariable extends ResourceBase {
    constructor(properties: EnvironmentVariableProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SslConfigurationProperties {
    Certificate?: Value<string>;
    Chain?: Value<string>;
    PrivateKey?: Value<string>;
}
export declare class SslConfiguration extends ResourceBase {
    constructor(properties: SslConfigurationProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SourceProperties {
    Password?: Value<string>;
    Revision?: Value<string>;
    SshKey?: Value<string>;
    Type?: Value<string>;
    Url?: Value<string>;
    Username?: Value<string>;
}
export declare class Source extends ResourceBase {
    constructor(properties: SourceProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface AppProperties {
    AppSource?: Source;
    Attributes?: {
        [key: string]: Value<string>;
    };
    DataSources?: List<DataSource>;
    Description?: Value<string>;
    Domains?: List<Value<string>>;
    EnableSsl?: Value<boolean>;
    Environment?: List<EnvironmentVariable>;
    Name: Value<string>;
    Shortname?: Value<string>;
    SslConfiguration?: SslConfiguration;
    StackId: Value<string>;
    Type: Value<string>;
}
export default class App extends ResourceBase {
    constructor(properties: AppProperties, dependsOn?: Value<string> | Value<string>[]);
}
