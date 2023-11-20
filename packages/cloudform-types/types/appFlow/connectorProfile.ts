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
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class AmplitudeConnectorProfileCredentials {
    SecretKey!: Value<string>
    ApiKey!: Value<string>

    constructor(properties: AmplitudeConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class ApiKeyCredentials {
    ApiSecretKey?: Value<string>
    ApiKey!: Value<string>

    constructor(properties: ApiKeyCredentials) {
        Object.assign(this, properties)
    }
}

export class BasicAuthCredentials {
    Username!: Value<string>
    Password!: Value<string>

    constructor(properties: BasicAuthCredentials) {
        Object.assign(this, properties)
    }
}

export class ConnectorOAuthRequest {
    AuthCode?: Value<string>
    RedirectUri?: Value<string>

    constructor(properties: ConnectorOAuthRequest) {
        Object.assign(this, properties)
    }
}

export class ConnectorProfileConfig {
    ConnectorProfileCredentials?: ConnectorProfileCredentials
    ConnectorProfileProperties?: ConnectorProfileProperties

    constructor(properties: ConnectorProfileConfig) {
        Object.assign(this, properties)
    }
}

export class ConnectorProfileCredentials {
    Amplitude?: AmplitudeConnectorProfileCredentials
    GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials
    ServiceNow?: ServiceNowConnectorProfileCredentials
    CustomConnector?: CustomConnectorProfileCredentials
    SAPOData?: SAPODataConnectorProfileCredentials
    Pardot?: PardotConnectorProfileCredentials
    Veeva?: VeevaConnectorProfileCredentials
    Trendmicro?: TrendmicroConnectorProfileCredentials
    Datadog?: DatadogConnectorProfileCredentials
    Marketo?: MarketoConnectorProfileCredentials
    Redshift?: RedshiftConnectorProfileCredentials
    Singular?: SingularConnectorProfileCredentials
    Slack?: SlackConnectorProfileCredentials
    Snowflake?: SnowflakeConnectorProfileCredentials
    Dynatrace?: DynatraceConnectorProfileCredentials
    Zendesk?: ZendeskConnectorProfileCredentials
    InforNexus?: InforNexusConnectorProfileCredentials
    Salesforce?: SalesforceConnectorProfileCredentials

    constructor(properties: ConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class ConnectorProfileProperties {
    ServiceNow?: ServiceNowConnectorProfileProperties
    CustomConnector?: CustomConnectorProfileProperties
    SAPOData?: SAPODataConnectorProfileProperties
    Pardot?: PardotConnectorProfileProperties
    Veeva?: VeevaConnectorProfileProperties
    Datadog?: DatadogConnectorProfileProperties
    Marketo?: MarketoConnectorProfileProperties
    Redshift?: RedshiftConnectorProfileProperties
    Slack?: SlackConnectorProfileProperties
    Snowflake?: SnowflakeConnectorProfileProperties
    Dynatrace?: DynatraceConnectorProfileProperties
    Zendesk?: ZendeskConnectorProfileProperties
    InforNexus?: InforNexusConnectorProfileProperties
    Salesforce?: SalesforceConnectorProfileProperties

    constructor(properties: ConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class CustomAuthCredentials {
    CredentialsMap?: {[key: string]: Value<string>}
    CustomAuthenticationType!: Value<string>

    constructor(properties: CustomAuthCredentials) {
        Object.assign(this, properties)
    }
}

export class CustomConnectorProfileCredentials {
    Basic?: BasicAuthCredentials
    ApiKey?: ApiKeyCredentials
    Oauth2?: OAuth2Credentials
    Custom?: CustomAuthCredentials
    AuthenticationType!: Value<string>

    constructor(properties: CustomConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class CustomConnectorProfileProperties {
    OAuth2Properties?: OAuth2Properties
    ProfileProperties?: {[key: string]: Value<string>}

    constructor(properties: CustomConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class DatadogConnectorProfileCredentials {
    ApplicationKey!: Value<string>
    ApiKey!: Value<string>

    constructor(properties: DatadogConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class DatadogConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: DatadogConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class DynatraceConnectorProfileCredentials {
    ApiToken!: Value<string>

    constructor(properties: DynatraceConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class DynatraceConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: DynatraceConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class GoogleAnalyticsConnectorProfileCredentials {
    RefreshToken?: Value<string>
    ClientSecret!: Value<string>
    AccessToken?: Value<string>
    ClientId!: Value<string>
    ConnectorOAuthRequest?: ConnectorOAuthRequest

    constructor(properties: GoogleAnalyticsConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class InforNexusConnectorProfileCredentials {
    AccessKeyId!: Value<string>
    UserId!: Value<string>
    SecretAccessKey!: Value<string>
    Datakey!: Value<string>

    constructor(properties: InforNexusConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class InforNexusConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: InforNexusConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class MarketoConnectorProfileCredentials {
    ClientSecret!: Value<string>
    AccessToken?: Value<string>
    ClientId!: Value<string>
    ConnectorOAuthRequest?: ConnectorOAuthRequest

    constructor(properties: MarketoConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class MarketoConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: MarketoConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class OAuth2Credentials {
    OAuthRequest?: ConnectorOAuthRequest
    RefreshToken?: Value<string>
    ClientSecret?: Value<string>
    AccessToken?: Value<string>
    ClientId?: Value<string>

    constructor(properties: OAuth2Credentials) {
        Object.assign(this, properties)
    }
}

export class OAuth2Properties {
    TokenUrlCustomProperties?: {[key: string]: Value<string>}
    TokenUrl?: Value<string>
    OAuth2GrantType?: Value<string>

    constructor(properties: OAuth2Properties) {
        Object.assign(this, properties)
    }
}

export class OAuthCredentials {
    RefreshToken?: Value<string>
    AccessToken?: Value<string>
    ClientSecret?: Value<string>
    ClientId?: Value<string>
    ConnectorOAuthRequest?: ConnectorOAuthRequest

    constructor(properties: OAuthCredentials) {
        Object.assign(this, properties)
    }
}

export class OAuthProperties {
    AuthCodeUrl?: Value<string>
    TokenUrl?: Value<string>
    OAuthScopes?: List<Value<string>>

    constructor(properties: OAuthProperties) {
        Object.assign(this, properties)
    }
}

export class PardotConnectorProfileCredentials {
    RefreshToken?: Value<string>
    AccessToken?: Value<string>
    ClientCredentialsArn?: Value<string>
    ConnectorOAuthRequest?: ConnectorOAuthRequest

    constructor(properties: PardotConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class PardotConnectorProfileProperties {
    InstanceUrl?: Value<string>
    IsSandboxEnvironment?: Value<boolean>
    BusinessUnitId!: Value<string>

    constructor(properties: PardotConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class RedshiftConnectorProfileCredentials {
    Username?: Value<string>
    Password?: Value<string>

    constructor(properties: RedshiftConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class RedshiftConnectorProfileProperties {
    DatabaseUrl?: Value<string>
    BucketName!: Value<string>
    IsRedshiftServerless?: Value<boolean>
    DataApiRoleArn?: Value<string>
    DatabaseName?: Value<string>
    WorkgroupName?: Value<string>
    BucketPrefix?: Value<string>
    ClusterIdentifier?: Value<string>
    RoleArn!: Value<string>

    constructor(properties: RedshiftConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class SAPODataConnectorProfileCredentials {
    BasicAuthCredentials?: BasicAuthCredentials
    OAuthCredentials?: OAuthCredentials

    constructor(properties: SAPODataConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class SAPODataConnectorProfileProperties {
    ApplicationServicePath?: Value<string>
    ApplicationHostUrl?: Value<string>
    OAuthProperties?: OAuthProperties
    DisableSSO?: Value<boolean>
    LogonLanguage?: Value<string>
    PrivateLinkServiceName?: Value<string>
    PortNumber?: Value<number>
    ClientNumber?: Value<string>

    constructor(properties: SAPODataConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class SalesforceConnectorProfileCredentials {
    JwtToken?: Value<string>
    RefreshToken?: Value<string>
    AccessToken?: Value<string>
    ClientCredentialsArn?: Value<string>
    ConnectorOAuthRequest?: ConnectorOAuthRequest
    OAuth2GrantType?: Value<string>

    constructor(properties: SalesforceConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class SalesforceConnectorProfileProperties {
    InstanceUrl?: Value<string>
    isSandboxEnvironment?: Value<boolean>
    usePrivateLinkForMetadataAndAuthorization?: Value<boolean>

    constructor(properties: SalesforceConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class ServiceNowConnectorProfileCredentials {
    Username?: Value<string>
    OAuth2Credentials?: OAuth2Credentials
    Password?: Value<string>

    constructor(properties: ServiceNowConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class ServiceNowConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: ServiceNowConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class SingularConnectorProfileCredentials {
    ApiKey!: Value<string>

    constructor(properties: SingularConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class SlackConnectorProfileCredentials {
    ClientSecret!: Value<string>
    AccessToken?: Value<string>
    ClientId!: Value<string>
    ConnectorOAuthRequest?: ConnectorOAuthRequest

    constructor(properties: SlackConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class SlackConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: SlackConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class SnowflakeConnectorProfileCredentials {
    Username!: Value<string>
    Password!: Value<string>

    constructor(properties: SnowflakeConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class SnowflakeConnectorProfileProperties {
    Warehouse!: Value<string>
    BucketName!: Value<string>
    PrivateLinkServiceName?: Value<string>
    Stage!: Value<string>
    Region?: Value<string>
    BucketPrefix?: Value<string>
    AccountName?: Value<string>

    constructor(properties: SnowflakeConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class TrendmicroConnectorProfileCredentials {
    ApiSecretKey!: Value<string>

    constructor(properties: TrendmicroConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class VeevaConnectorProfileCredentials {
    Username!: Value<string>
    Password!: Value<string>

    constructor(properties: VeevaConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class VeevaConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: VeevaConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export class ZendeskConnectorProfileCredentials {
    ClientSecret!: Value<string>
    AccessToken?: Value<string>
    ClientId!: Value<string>
    ConnectorOAuthRequest?: ConnectorOAuthRequest

    constructor(properties: ZendeskConnectorProfileCredentials) {
        Object.assign(this, properties)
    }
}

export class ZendeskConnectorProfileProperties {
    InstanceUrl!: Value<string>

    constructor(properties: ZendeskConnectorProfileProperties) {
        Object.assign(this, properties)
    }
}

export interface ConnectorProfileProperties {
    ConnectorLabel?: Value<string>
    ConnectorProfileName: Value<string>
    KMSArn?: Value<string>
    ConnectorType: Value<string>
    ConnectionMode: Value<string>
    ConnectorProfileConfig?: ConnectorProfileConfig
}

export default class ConnectorProfile extends ResourceBase<ConnectorProfileProperties> {
    static AmplitudeConnectorProfileCredentials = AmplitudeConnectorProfileCredentials
    static ApiKeyCredentials = ApiKeyCredentials
    static BasicAuthCredentials = BasicAuthCredentials
    static ConnectorOAuthRequest = ConnectorOAuthRequest
    static ConnectorProfileConfig = ConnectorProfileConfig
    static ConnectorProfileCredentials = ConnectorProfileCredentials
    static ConnectorProfileProperties = ConnectorProfileProperties
    static CustomAuthCredentials = CustomAuthCredentials
    static CustomConnectorProfileCredentials = CustomConnectorProfileCredentials
    static CustomConnectorProfileProperties = CustomConnectorProfileProperties
    static DatadogConnectorProfileCredentials = DatadogConnectorProfileCredentials
    static DatadogConnectorProfileProperties = DatadogConnectorProfileProperties
    static DynatraceConnectorProfileCredentials = DynatraceConnectorProfileCredentials
    static DynatraceConnectorProfileProperties = DynatraceConnectorProfileProperties
    static GoogleAnalyticsConnectorProfileCredentials = GoogleAnalyticsConnectorProfileCredentials
    static InforNexusConnectorProfileCredentials = InforNexusConnectorProfileCredentials
    static InforNexusConnectorProfileProperties = InforNexusConnectorProfileProperties
    static MarketoConnectorProfileCredentials = MarketoConnectorProfileCredentials
    static MarketoConnectorProfileProperties = MarketoConnectorProfileProperties
    static OAuth2Credentials = OAuth2Credentials
    static OAuth2Properties = OAuth2Properties
    static OAuthCredentials = OAuthCredentials
    static OAuthProperties = OAuthProperties
    static PardotConnectorProfileCredentials = PardotConnectorProfileCredentials
    static PardotConnectorProfileProperties = PardotConnectorProfileProperties
    static RedshiftConnectorProfileCredentials = RedshiftConnectorProfileCredentials
    static RedshiftConnectorProfileProperties = RedshiftConnectorProfileProperties
    static SAPODataConnectorProfileCredentials = SAPODataConnectorProfileCredentials
    static SAPODataConnectorProfileProperties = SAPODataConnectorProfileProperties
    static SalesforceConnectorProfileCredentials = SalesforceConnectorProfileCredentials
    static SalesforceConnectorProfileProperties = SalesforceConnectorProfileProperties
    static ServiceNowConnectorProfileCredentials = ServiceNowConnectorProfileCredentials
    static ServiceNowConnectorProfileProperties = ServiceNowConnectorProfileProperties
    static SingularConnectorProfileCredentials = SingularConnectorProfileCredentials
    static SlackConnectorProfileCredentials = SlackConnectorProfileCredentials
    static SlackConnectorProfileProperties = SlackConnectorProfileProperties
    static SnowflakeConnectorProfileCredentials = SnowflakeConnectorProfileCredentials
    static SnowflakeConnectorProfileProperties = SnowflakeConnectorProfileProperties
    static TrendmicroConnectorProfileCredentials = TrendmicroConnectorProfileCredentials
    static VeevaConnectorProfileCredentials = VeevaConnectorProfileCredentials
    static VeevaConnectorProfileProperties = VeevaConnectorProfileProperties
    static ZendeskConnectorProfileCredentials = ZendeskConnectorProfileCredentials
    static ZendeskConnectorProfileProperties = ZendeskConnectorProfileProperties

    constructor(properties: ConnectorProfileProperties) {
        super('AWS::AppFlow::ConnectorProfile', properties)
    }
}
