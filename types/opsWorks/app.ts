import {ResourceBase} from '../resource'
import {Value} from '../internal'
import AppSource from './appSource'
import DataSource from './dataSource'
import Environment from './environment'
import SslConfiguration from './sslConfiguration'



export interface AppProperties {
    AppSource?: AppSource
    Attributes?: any
    Description?: Value<string>
    DataSources?: DataSource[]
    Domains?: Value<string>[]
    EnableSsl?: Value<boolean>
    Environment?: Environment
    Name?: Value<string>
    Shortname?: Value<string>
    SslConfiguration?: SslConfiguration
    StackId: Value<string>
    Type?: Value<string>
}

export default class App extends ResourceBase {
    constructor(properties: AppProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::App', properties, dependsOn)
    }
}