import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class InforNexusConnectorProfileProperties {
    InstanceUrl: Value<string>;
    constructor(properties: InforNexusConnectorProfileProperties);
}
export declare class DynatraceConnectorProfileCredentials {
    ApiToken: Value<string>;
    constructor(properties: DynatraceConnectorProfileCredentials);
}
export declare class MarketoConnectorProfileCredentials {
    ClientId: Value<string>;
    ClientSecret: Value<string>;
    AccessToken?: Value<string>;
    ConnectorOAuthRequest?: ConnectorOAuthRequest;
    constructor(properties: MarketoConnectorProfileCredentials);
}
export declare class RedshiftConnectorProfileCredentials {
    Username: Value<string>;
    Password: Value<string>;
    constructor(properties: RedshiftConnectorProfileCredentials);
}
export declare class ZendeskConnectorProfileProperties {
    InstanceUrl: Value<string>;
    constructor(properties: ZendeskConnectorProfileProperties);
}
export declare class GoogleAnalyticsConnectorProfileCredentials {
    ClientId: Value<string>;
    ClientSecret: Value<string>;
    AccessToken?: Value<string>;
    RefreshToken?: Value<string>;
    ConnectorOAuthRequest?: ConnectorOAuthRequest;
    constructor(properties: GoogleAnalyticsConnectorProfileCredentials);
}
export declare class DynatraceConnectorProfileProperties {
    InstanceUrl: Value<string>;
    constructor(properties: DynatraceConnectorProfileProperties);
}
export declare class SalesforceConnectorProfileCredentials {
    AccessToken?: Value<string>;
    RefreshToken?: Value<string>;
    ConnectorOAuthRequest?: ConnectorOAuthRequest;
    ClientCredentialsArn?: Value<string>;
    constructor(properties: SalesforceConnectorProfileCredentials);
}
export declare class RedshiftConnectorProfileProperties {
    DatabaseUrl: Value<string>;
    BucketName: Value<string>;
    BucketPrefix?: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: RedshiftConnectorProfileProperties);
}
export declare class ConnectorProfileCredentials {
    Amplitude?: AmplitudeConnectorProfileCredentials;
    Datadog?: DatadogConnectorProfileCredentials;
    Dynatrace?: DynatraceConnectorProfileCredentials;
    GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials;
    InforNexus?: InforNexusConnectorProfileCredentials;
    Marketo?: MarketoConnectorProfileCredentials;
    Redshift?: RedshiftConnectorProfileCredentials;
    Salesforce?: SalesforceConnectorProfileCredentials;
    ServiceNow?: ServiceNowConnectorProfileCredentials;
    Singular?: SingularConnectorProfileCredentials;
    Slack?: SlackConnectorProfileCredentials;
    Snowflake?: SnowflakeConnectorProfileCredentials;
    Trendmicro?: TrendmicroConnectorProfileCredentials;
    Veeva?: VeevaConnectorProfileCredentials;
    Zendesk?: ZendeskConnectorProfileCredentials;
    constructor(properties: ConnectorProfileCredentials);
}
export declare class SingularConnectorProfileCredentials {
    ApiKey: Value<string>;
    constructor(properties: SingularConnectorProfileCredentials);
}
export declare class ServiceNowConnectorProfileCredentials {
    Username: Value<string>;
    Password: Value<string>;
    constructor(properties: ServiceNowConnectorProfileCredentials);
}
export declare class SnowflakeConnectorProfileCredentials {
    Username: Value<string>;
    Password: Value<string>;
    constructor(properties: SnowflakeConnectorProfileCredentials);
}
export declare class ZendeskConnectorProfileCredentials {
    ClientId: Value<string>;
    ClientSecret: Value<string>;
    AccessToken?: Value<string>;
    ConnectorOAuthRequest?: ConnectorOAuthRequest;
    constructor(properties: ZendeskConnectorProfileCredentials);
}
export declare class SnowflakeConnectorProfileProperties {
    Warehouse: Value<string>;
    Stage: Value<string>;
    BucketName: Value<string>;
    BucketPrefix?: Value<string>;
    PrivateLinkServiceName?: Value<string>;
    AccountName?: Value<string>;
    Region?: Value<string>;
    constructor(properties: SnowflakeConnectorProfileProperties);
}
export declare class SalesforceConnectorProfileProperties {
    InstanceUrl?: Value<string>;
    isSandboxEnvironment?: Value<boolean>;
    constructor(properties: SalesforceConnectorProfileProperties);
}
export declare class ConnectorProfileConfig {
    ConnectorProfileProperties?: ConnectorProfileProperties;
    ConnectorProfileCredentials: ConnectorProfileCredentials;
    constructor(properties: ConnectorProfileConfig);
}
export declare class AmplitudeConnectorProfileCredentials {
    ApiKey: Value<string>;
    SecretKey: Value<string>;
    constructor(properties: AmplitudeConnectorProfileCredentials);
}
export declare class ConnectorOAuthRequest {
    AuthCode?: Value<string>;
    RedirectUri?: Value<string>;
    constructor(properties: ConnectorOAuthRequest);
}
export declare class DatadogConnectorProfileCredentials {
    ApiKey: Value<string>;
    ApplicationKey: Value<string>;
    constructor(properties: DatadogConnectorProfileCredentials);
}
export declare class SlackConnectorProfileCredentials {
    ClientId: Value<string>;
    ClientSecret: Value<string>;
    AccessToken?: Value<string>;
    ConnectorOAuthRequest?: ConnectorOAuthRequest;
    constructor(properties: SlackConnectorProfileCredentials);
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
export declare class SlackConnectorProfileProperties {
    InstanceUrl: Value<string>;
    constructor(properties: SlackConnectorProfileProperties);
}
export declare class MarketoConnectorProfileProperties {
    InstanceUrl: Value<string>;
    constructor(properties: MarketoConnectorProfileProperties);
}
export declare class InforNexusConnectorProfileCredentials {
    AccessKeyId: Value<string>;
    UserId: Value<string>;
    SecretAccessKey: Value<string>;
    Datakey: Value<string>;
    constructor(properties: InforNexusConnectorProfileCredentials);
}
export declare class DatadogConnectorProfileProperties {
    InstanceUrl: Value<string>;
    constructor(properties: DatadogConnectorProfileProperties);
}
export declare class ServiceNowConnectorProfileProperties {
    InstanceUrl: Value<string>;
    constructor(properties: ServiceNowConnectorProfileProperties);
}
export declare class ConnectorProfileProperties {
    Datadog?: DatadogConnectorProfileProperties;
    Dynatrace?: DynatraceConnectorProfileProperties;
    InforNexus?: InforNexusConnectorProfileProperties;
    Marketo?: MarketoConnectorProfileProperties;
    Redshift?: RedshiftConnectorProfileProperties;
    Salesforce?: SalesforceConnectorProfileProperties;
    ServiceNow?: ServiceNowConnectorProfileProperties;
    Slack?: SlackConnectorProfileProperties;
    Snowflake?: SnowflakeConnectorProfileProperties;
    Veeva?: VeevaConnectorProfileProperties;
    Zendesk?: ZendeskConnectorProfileProperties;
    constructor(properties: ConnectorProfileProperties);
}
export interface ConnectorProfileProperties {
    ConnectorProfileName: Value<string>;
    KMSArn?: Value<string>;
    ConnectorType: Value<string>;
    ConnectionMode: Value<string>;
    ConnectorProfileConfig?: ConnectorProfileConfig;
}
export default class ConnectorProfile extends ResourceBase<ConnectorProfileProperties> {
    static InforNexusConnectorProfileProperties: typeof InforNexusConnectorProfileProperties;
    static DynatraceConnectorProfileCredentials: typeof DynatraceConnectorProfileCredentials;
    static MarketoConnectorProfileCredentials: typeof MarketoConnectorProfileCredentials;
    static RedshiftConnectorProfileCredentials: typeof RedshiftConnectorProfileCredentials;
    static ZendeskConnectorProfileProperties: typeof ZendeskConnectorProfileProperties;
    static GoogleAnalyticsConnectorProfileCredentials: typeof GoogleAnalyticsConnectorProfileCredentials;
    static DynatraceConnectorProfileProperties: typeof DynatraceConnectorProfileProperties;
    static SalesforceConnectorProfileCredentials: typeof SalesforceConnectorProfileCredentials;
    static RedshiftConnectorProfileProperties: typeof RedshiftConnectorProfileProperties;
    static ConnectorProfileCredentials: typeof ConnectorProfileCredentials;
    static SingularConnectorProfileCredentials: typeof SingularConnectorProfileCredentials;
    static ServiceNowConnectorProfileCredentials: typeof ServiceNowConnectorProfileCredentials;
    static SnowflakeConnectorProfileCredentials: typeof SnowflakeConnectorProfileCredentials;
    static ZendeskConnectorProfileCredentials: typeof ZendeskConnectorProfileCredentials;
    static SnowflakeConnectorProfileProperties: typeof SnowflakeConnectorProfileProperties;
    static SalesforceConnectorProfileProperties: typeof SalesforceConnectorProfileProperties;
    static ConnectorProfileConfig: typeof ConnectorProfileConfig;
    static AmplitudeConnectorProfileCredentials: typeof AmplitudeConnectorProfileCredentials;
    static ConnectorOAuthRequest: typeof ConnectorOAuthRequest;
    static DatadogConnectorProfileCredentials: typeof DatadogConnectorProfileCredentials;
    static SlackConnectorProfileCredentials: typeof SlackConnectorProfileCredentials;
    static TrendmicroConnectorProfileCredentials: typeof TrendmicroConnectorProfileCredentials;
    static VeevaConnectorProfileCredentials: typeof VeevaConnectorProfileCredentials;
    static VeevaConnectorProfileProperties: typeof VeevaConnectorProfileProperties;
    static SlackConnectorProfileProperties: typeof SlackConnectorProfileProperties;
    static MarketoConnectorProfileProperties: typeof MarketoConnectorProfileProperties;
    static InforNexusConnectorProfileCredentials: typeof InforNexusConnectorProfileCredentials;
    static DatadogConnectorProfileProperties: typeof DatadogConnectorProfileProperties;
    static ServiceNowConnectorProfileProperties: typeof ServiceNowConnectorProfileProperties;
    static ConnectorProfileProperties: typeof ConnectorProfileProperties;
    constructor(properties: ConnectorProfileProperties);
}
