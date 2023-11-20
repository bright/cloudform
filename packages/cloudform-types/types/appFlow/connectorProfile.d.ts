import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AmplitudeConnectorProfileCredentials {
    SecretKey: Value<string>;
    ApiKey: Value<string>;
    constructor(properties: AmplitudeConnectorProfileCredentials);
}
export declare class ApiKeyCredentials {
    ApiSecretKey?: Value<string>;
    ApiKey: Value<string>;
    constructor(properties: ApiKeyCredentials);
}
export declare class BasicAuthCredentials {
    Username: Value<string>;
    Password: Value<string>;
    constructor(properties: BasicAuthCredentials);
}
export declare class ConnectorOAuthRequest {
    AuthCode?: Value<string>;
    RedirectUri?: Value<string>;
    constructor(properties: ConnectorOAuthRequest);
}
export declare class ConnectorProfileConfig {
    ConnectorProfileCredentials?: ConnectorProfileCredentials;
    ConnectorProfileProperties?: ConnectorProfileProperties;
    constructor(properties: ConnectorProfileConfig);
}
export declare class ConnectorProfileCredentials {
    Amplitude?: AmplitudeConnectorProfileCredentials;
    GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials;
    ServiceNow?: ServiceNowConnectorProfileCredentials;
    CustomConnector?: CustomConnectorProfileCredentials;
    SAPOData?: SAPODataConnectorProfileCredentials;
    Pardot?: PardotConnectorProfileCredentials;
    Veeva?: VeevaConnectorProfileCredentials;
    Trendmicro?: TrendmicroConnectorProfileCredentials;
    Datadog?: DatadogConnectorProfileCredentials;
    Marketo?: MarketoConnectorProfileCredentials;
    Redshift?: RedshiftConnectorProfileCredentials;
    Singular?: SingularConnectorProfileCredentials;
    Slack?: SlackConnectorProfileCredentials;
    Snowflake?: SnowflakeConnectorProfileCredentials;
    Dynatrace?: DynatraceConnectorProfileCredentials;
    Zendesk?: ZendeskConnectorProfileCredentials;
    InforNexus?: InforNexusConnectorProfileCredentials;
    Salesforce?: SalesforceConnectorProfileCredentials;
    constructor(properties: ConnectorProfileCredentials);
}
export declare class ConnectorProfileProperties {
    ServiceNow?: ServiceNowConnectorProfileProperties;
    CustomConnector?: CustomConnectorProfileProperties;
    SAPOData?: SAPODataConnectorProfileProperties;
    Pardot?: PardotConnectorProfileProperties;
    Veeva?: VeevaConnectorProfileProperties;
    Datadog?: DatadogConnectorProfileProperties;
    Marketo?: MarketoConnectorProfileProperties;
    Redshift?: RedshiftConnectorProfileProperties;
    Slack?: SlackConnectorProfileProperties;
    Snowflake?: SnowflakeConnectorProfileProperties;
    Dynatrace?: DynatraceConnectorProfileProperties;
    Zendesk?: ZendeskConnectorProfileProperties;
    InforNexus?: InforNexusConnectorProfileProperties;
    Salesforce?: SalesforceConnectorProfileProperties;
    constructor(properties: ConnectorProfileProperties);
}
export declare class CustomAuthCredentials {
    CredentialsMap?: {
        [key: string]: Value<string>;
    };
    CustomAuthenticationType: Value<string>;
    constructor(properties: CustomAuthCredentials);
}
export declare class CustomConnectorProfileCredentials {
    Basic?: BasicAuthCredentials;
    ApiKey?: ApiKeyCredentials;
    Oauth2?: OAuth2Credentials;
    Custom?: CustomAuthCredentials;
    AuthenticationType: Value<string>;
    constructor(properties: CustomConnectorProfileCredentials);
}
export declare class CustomConnectorProfileProperties {
    OAuth2Properties?: OAuth2Properties;
    ProfileProperties?: {
        [key: string]: Value<string>;
    };
    constructor(properties: CustomConnectorProfileProperties);
}
export declare class DatadogConnectorProfileCredentials {
    ApplicationKey: Value<string>;
    ApiKey: Value<string>;
    constructor(properties: DatadogConnectorProfileCredentials);
}
export declare class DatadogConnectorProfileProperties {
    InstanceUrl: Value<string>;
    constructor(properties: DatadogConnectorProfileProperties);
}
export declare class DynatraceConnectorProfileCredentials {
    ApiToken: Value<string>;
    constructor(properties: DynatraceConnectorProfileCredentials);
}
export declare class DynatraceConnectorProfileProperties {
    InstanceUrl: Value<string>;
    constructor(properties: DynatraceConnectorProfileProperties);
}
export declare class GoogleAnalyticsConnectorProfileCredentials {
    RefreshToken?: Value<string>;
    ClientSecret: Value<string>;
    AccessToken?: Value<string>;
    ClientId: Value<string>;
    ConnectorOAuthRequest?: ConnectorOAuthRequest;
    constructor(properties: GoogleAnalyticsConnectorProfileCredentials);
}
export declare class InforNexusConnectorProfileCredentials {
    AccessKeyId: Value<string>;
    UserId: Value<string>;
    SecretAccessKey: Value<string>;
    Datakey: Value<string>;
    constructor(properties: InforNexusConnectorProfileCredentials);
}
export declare class InforNexusConnectorProfileProperties {
    InstanceUrl: Value<string>;
    constructor(properties: InforNexusConnectorProfileProperties);
}
export declare class MarketoConnectorProfileCredentials {
    ClientSecret: Value<string>;
    AccessToken?: Value<string>;
    ClientId: Value<string>;
    ConnectorOAuthRequest?: ConnectorOAuthRequest;
    constructor(properties: MarketoConnectorProfileCredentials);
}
export declare class MarketoConnectorProfileProperties {
    InstanceUrl: Value<string>;
    constructor(properties: MarketoConnectorProfileProperties);
}
export declare class OAuth2Credentials {
    OAuthRequest?: ConnectorOAuthRequest;
    RefreshToken?: Value<string>;
    ClientSecret?: Value<string>;
    AccessToken?: Value<string>;
    ClientId?: Value<string>;
    constructor(properties: OAuth2Credentials);
}
export declare class OAuth2Properties {
    TokenUrlCustomProperties?: {
        [key: string]: Value<string>;
    };
    TokenUrl?: Value<string>;
    OAuth2GrantType?: Value<string>;
    constructor(properties: OAuth2Properties);
}
export declare class OAuthCredentials {
    RefreshToken?: Value<string>;
    AccessToken?: Value<string>;
    ClientSecret?: Value<string>;
    ClientId?: Value<string>;
    ConnectorOAuthRequest?: ConnectorOAuthRequest;
    constructor(properties: OAuthCredentials);
}
export declare class OAuthProperties {
    AuthCodeUrl?: Value<string>;
    TokenUrl?: Value<string>;
    OAuthScopes?: List<Value<string>>;
    constructor(properties: OAuthProperties);
}
export declare class PardotConnectorProfileCredentials {
    RefreshToken?: Value<string>;
    AccessToken?: Value<string>;
    ClientCredentialsArn?: Value<string>;
    ConnectorOAuthRequest?: ConnectorOAuthRequest;
    constructor(properties: PardotConnectorProfileCredentials);
}
export declare class PardotConnectorProfileProperties {
    InstanceUrl?: Value<string>;
    IsSandboxEnvironment?: Value<boolean>;
    BusinessUnitId: Value<string>;
    constructor(properties: PardotConnectorProfileProperties);
}
export declare class RedshiftConnectorProfileCredentials {
    Username?: Value<string>;
    Password?: Value<string>;
    constructor(properties: RedshiftConnectorProfileCredentials);
}
export declare class RedshiftConnectorProfileProperties {
    DatabaseUrl?: Value<string>;
    BucketName: Value<string>;
    IsRedshiftServerless?: Value<boolean>;
    DataApiRoleArn?: Value<string>;
    DatabaseName?: Value<string>;
    WorkgroupName?: Value<string>;
    BucketPrefix?: Value<string>;
    ClusterIdentifier?: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: RedshiftConnectorProfileProperties);
}
export declare class SAPODataConnectorProfileCredentials {
    BasicAuthCredentials?: BasicAuthCredentials;
    OAuthCredentials?: OAuthCredentials;
    constructor(properties: SAPODataConnectorProfileCredentials);
}
export declare class SAPODataConnectorProfileProperties {
    ApplicationServicePath?: Value<string>;
    ApplicationHostUrl?: Value<string>;
    OAuthProperties?: OAuthProperties;
    DisableSSO?: Value<boolean>;
    LogonLanguage?: Value<string>;
    PrivateLinkServiceName?: Value<string>;
    PortNumber?: Value<number>;
    ClientNumber?: Value<string>;
    constructor(properties: SAPODataConnectorProfileProperties);
}
export declare class SalesforceConnectorProfileCredentials {
    JwtToken?: Value<string>;
    RefreshToken?: Value<string>;
    AccessToken?: Value<string>;
    ClientCredentialsArn?: Value<string>;
    ConnectorOAuthRequest?: ConnectorOAuthRequest;
    OAuth2GrantType?: Value<string>;
    constructor(properties: SalesforceConnectorProfileCredentials);
}
export declare class SalesforceConnectorProfileProperties {
    InstanceUrl?: Value<string>;
    isSandboxEnvironment?: Value<boolean>;
    usePrivateLinkForMetadataAndAuthorization?: Value<boolean>;
    constructor(properties: SalesforceConnectorProfileProperties);
}
export declare class ServiceNowConnectorProfileCredentials {
    Username?: Value<string>;
    OAuth2Credentials?: OAuth2Credentials;
    Password?: Value<string>;
    constructor(properties: ServiceNowConnectorProfileCredentials);
}
export declare class ServiceNowConnectorProfileProperties {
    InstanceUrl: Value<string>;
    constructor(properties: ServiceNowConnectorProfileProperties);
}
export declare class SingularConnectorProfileCredentials {
    ApiKey: Value<string>;
    constructor(properties: SingularConnectorProfileCredentials);
}
export declare class SlackConnectorProfileCredentials {
    ClientSecret: Value<string>;
    AccessToken?: Value<string>;
    ClientId: Value<string>;
    ConnectorOAuthRequest?: ConnectorOAuthRequest;
    constructor(properties: SlackConnectorProfileCredentials);
}
export declare class SlackConnectorProfileProperties {
    InstanceUrl: Value<string>;
    constructor(properties: SlackConnectorProfileProperties);
}
export declare class SnowflakeConnectorProfileCredentials {
    Username: Value<string>;
    Password: Value<string>;
    constructor(properties: SnowflakeConnectorProfileCredentials);
}
export declare class SnowflakeConnectorProfileProperties {
    Warehouse: Value<string>;
    BucketName: Value<string>;
    PrivateLinkServiceName?: Value<string>;
    Stage: Value<string>;
    Region?: Value<string>;
    BucketPrefix?: Value<string>;
    AccountName?: Value<string>;
    constructor(properties: SnowflakeConnectorProfileProperties);
}
export declare class TrendmicroConnectorProfileCredentials {
    ApiSecretKey: Value<string>;
    constructor(properties: TrendmicroConnectorProfileCredentials);
}
export declare class VeevaConnectorProfileCredentials {
    Username: Value<string>;
    Password: Value<string>;
    constructor(properties: VeevaConnectorProfileCredentials);
}
export declare class VeevaConnectorProfileProperties {
    InstanceUrl: Value<string>;
    constructor(properties: VeevaConnectorProfileProperties);
}
export declare class ZendeskConnectorProfileCredentials {
    ClientSecret: Value<string>;
    AccessToken?: Value<string>;
    ClientId: Value<string>;
    ConnectorOAuthRequest?: ConnectorOAuthRequest;
    constructor(properties: ZendeskConnectorProfileCredentials);
}
export declare class ZendeskConnectorProfileProperties {
    InstanceUrl: Value<string>;
    constructor(properties: ZendeskConnectorProfileProperties);
}
export interface ConnectorProfileProperties {
    ConnectorLabel?: Value<string>;
    ConnectorProfileName: Value<string>;
    KMSArn?: Value<string>;
    ConnectorType: Value<string>;
    ConnectionMode: Value<string>;
    ConnectorProfileConfig?: ConnectorProfileConfig;
}
export default class ConnectorProfile extends ResourceBase<ConnectorProfileProperties> {
    static AmplitudeConnectorProfileCredentials: typeof AmplitudeConnectorProfileCredentials;
    static ApiKeyCredentials: typeof ApiKeyCredentials;
    static BasicAuthCredentials: typeof BasicAuthCredentials;
    static ConnectorOAuthRequest: typeof ConnectorOAuthRequest;
    static ConnectorProfileConfig: typeof ConnectorProfileConfig;
    static ConnectorProfileCredentials: typeof ConnectorProfileCredentials;
    static ConnectorProfileProperties: typeof ConnectorProfileProperties;
    static CustomAuthCredentials: typeof CustomAuthCredentials;
    static CustomConnectorProfileCredentials: typeof CustomConnectorProfileCredentials;
    static CustomConnectorProfileProperties: typeof CustomConnectorProfileProperties;
    static DatadogConnectorProfileCredentials: typeof DatadogConnectorProfileCredentials;
    static DatadogConnectorProfileProperties: typeof DatadogConnectorProfileProperties;
    static DynatraceConnectorProfileCredentials: typeof DynatraceConnectorProfileCredentials;
    static DynatraceConnectorProfileProperties: typeof DynatraceConnectorProfileProperties;
    static GoogleAnalyticsConnectorProfileCredentials: typeof GoogleAnalyticsConnectorProfileCredentials;
    static InforNexusConnectorProfileCredentials: typeof InforNexusConnectorProfileCredentials;
    static InforNexusConnectorProfileProperties: typeof InforNexusConnectorProfileProperties;
    static MarketoConnectorProfileCredentials: typeof MarketoConnectorProfileCredentials;
    static MarketoConnectorProfileProperties: typeof MarketoConnectorProfileProperties;
    static OAuth2Credentials: typeof OAuth2Credentials;
    static OAuth2Properties: typeof OAuth2Properties;
    static OAuthCredentials: typeof OAuthCredentials;
    static OAuthProperties: typeof OAuthProperties;
    static PardotConnectorProfileCredentials: typeof PardotConnectorProfileCredentials;
    static PardotConnectorProfileProperties: typeof PardotConnectorProfileProperties;
    static RedshiftConnectorProfileCredentials: typeof RedshiftConnectorProfileCredentials;
    static RedshiftConnectorProfileProperties: typeof RedshiftConnectorProfileProperties;
    static SAPODataConnectorProfileCredentials: typeof SAPODataConnectorProfileCredentials;
    static SAPODataConnectorProfileProperties: typeof SAPODataConnectorProfileProperties;
    static SalesforceConnectorProfileCredentials: typeof SalesforceConnectorProfileCredentials;
    static SalesforceConnectorProfileProperties: typeof SalesforceConnectorProfileProperties;
    static ServiceNowConnectorProfileCredentials: typeof ServiceNowConnectorProfileCredentials;
    static ServiceNowConnectorProfileProperties: typeof ServiceNowConnectorProfileProperties;
    static SingularConnectorProfileCredentials: typeof SingularConnectorProfileCredentials;
    static SlackConnectorProfileCredentials: typeof SlackConnectorProfileCredentials;
    static SlackConnectorProfileProperties: typeof SlackConnectorProfileProperties;
    static SnowflakeConnectorProfileCredentials: typeof SnowflakeConnectorProfileCredentials;
    static SnowflakeConnectorProfileProperties: typeof SnowflakeConnectorProfileProperties;
    static TrendmicroConnectorProfileCredentials: typeof TrendmicroConnectorProfileCredentials;
    static VeevaConnectorProfileCredentials: typeof VeevaConnectorProfileCredentials;
    static VeevaConnectorProfileProperties: typeof VeevaConnectorProfileProperties;
    static ZendeskConnectorProfileCredentials: typeof ZendeskConnectorProfileCredentials;
    static ZendeskConnectorProfileProperties: typeof ZendeskConnectorProfileProperties;
    constructor(properties: ConnectorProfileProperties);
}
