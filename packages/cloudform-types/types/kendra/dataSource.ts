/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AccessControlListConfiguration {
    KeyPath?: Value<string>

    constructor(properties: AccessControlListConfiguration) {
        Object.assign(this, properties)
    }
}

export class AclConfiguration {
    AllowedGroupsColumnName!: Value<string>

    constructor(properties: AclConfiguration) {
        Object.assign(this, properties)
    }
}

export class ColumnConfiguration {
    ChangeDetectingColumns!: List<Value<string>>
    DocumentTitleColumnName?: Value<string>
    DocumentIdColumnName!: Value<string>
    DocumentDataColumnName!: Value<string>
    FieldMappings?: List<DataSourceToIndexFieldMapping>

    constructor(properties: ColumnConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConfluenceAttachmentConfiguration {
    AttachmentFieldMappings?: List<ConfluenceAttachmentToIndexFieldMapping>
    CrawlAttachments?: Value<boolean>

    constructor(properties: ConfluenceAttachmentConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConfluenceAttachmentToIndexFieldMapping {
    DateFieldFormat?: Value<string>
    IndexFieldName!: Value<string>
    DataSourceFieldName!: Value<string>

    constructor(properties: ConfluenceAttachmentToIndexFieldMapping) {
        Object.assign(this, properties)
    }
}

export class ConfluenceBlogConfiguration {
    BlogFieldMappings?: List<ConfluenceBlogToIndexFieldMapping>

    constructor(properties: ConfluenceBlogConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConfluenceBlogToIndexFieldMapping {
    DateFieldFormat?: Value<string>
    IndexFieldName!: Value<string>
    DataSourceFieldName!: Value<string>

    constructor(properties: ConfluenceBlogToIndexFieldMapping) {
        Object.assign(this, properties)
    }
}

export class ConfluenceConfiguration {
    SecretArn!: Value<string>
    AttachmentConfiguration?: ConfluenceAttachmentConfiguration
    ServerUrl!: Value<string>
    PageConfiguration?: ConfluencePageConfiguration
    BlogConfiguration?: ConfluenceBlogConfiguration
    Version!: Value<string>
    VpcConfiguration?: DataSourceVpcConfiguration
    InclusionPatterns?: List<Value<string>>
    ExclusionPatterns?: List<Value<string>>
    SpaceConfiguration?: ConfluenceSpaceConfiguration

    constructor(properties: ConfluenceConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConfluencePageConfiguration {
    PageFieldMappings?: List<ConfluencePageToIndexFieldMapping>

    constructor(properties: ConfluencePageConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConfluencePageToIndexFieldMapping {
    DateFieldFormat?: Value<string>
    IndexFieldName!: Value<string>
    DataSourceFieldName!: Value<string>

    constructor(properties: ConfluencePageToIndexFieldMapping) {
        Object.assign(this, properties)
    }
}

export class ConfluenceSpaceConfiguration {
    ExcludeSpaces?: List<Value<string>>
    SpaceFieldMappings?: List<ConfluenceSpaceToIndexFieldMapping>
    CrawlPersonalSpaces?: Value<boolean>
    CrawlArchivedSpaces?: Value<boolean>
    IncludeSpaces?: List<Value<string>>

    constructor(properties: ConfluenceSpaceConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConfluenceSpaceToIndexFieldMapping {
    DateFieldFormat?: Value<string>
    IndexFieldName!: Value<string>
    DataSourceFieldName!: Value<string>

    constructor(properties: ConfluenceSpaceToIndexFieldMapping) {
        Object.assign(this, properties)
    }
}

export class ConnectionConfiguration {
    SecretArn!: Value<string>
    TableName!: Value<string>
    DatabasePort!: Value<number>
    DatabaseHost!: Value<string>
    DatabaseName!: Value<string>

    constructor(properties: ConnectionConfiguration) {
        Object.assign(this, properties)
    }
}

export class CustomDocumentEnrichmentConfiguration {
    InlineConfigurations?: List<InlineCustomDocumentEnrichmentConfiguration>
    PreExtractionHookConfiguration?: HookConfiguration
    PostExtractionHookConfiguration?: HookConfiguration
    RoleArn?: Value<string>

    constructor(properties: CustomDocumentEnrichmentConfiguration) {
        Object.assign(this, properties)
    }
}

export class DataSourceConfiguration {
    GoogleDriveConfiguration?: GoogleDriveConfiguration
    WebCrawlerConfiguration?: WebCrawlerConfiguration
    S3Configuration?: S3DataSourceConfiguration
    SalesforceConfiguration?: SalesforceConfiguration
    DatabaseConfiguration?: DatabaseConfiguration
    SharePointConfiguration?: SharePointConfiguration
    ConfluenceConfiguration?: ConfluenceConfiguration
    WorkDocsConfiguration?: WorkDocsConfiguration
    OneDriveConfiguration?: OneDriveConfiguration
    ServiceNowConfiguration?: ServiceNowConfiguration

    constructor(properties: DataSourceConfiguration) {
        Object.assign(this, properties)
    }
}

export class DataSourceToIndexFieldMapping {
    DateFieldFormat?: Value<string>
    IndexFieldName!: Value<string>
    DataSourceFieldName!: Value<string>

    constructor(properties: DataSourceToIndexFieldMapping) {
        Object.assign(this, properties)
    }
}

export class DataSourceVpcConfiguration {
    SubnetIds!: List<Value<string>>
    SecurityGroupIds!: List<Value<string>>

    constructor(properties: DataSourceVpcConfiguration) {
        Object.assign(this, properties)
    }
}

export class DatabaseConfiguration {
    SqlConfiguration?: SqlConfiguration
    DatabaseEngineType!: Value<string>
    ConnectionConfiguration!: ConnectionConfiguration
    ColumnConfiguration!: ColumnConfiguration
    VpcConfiguration?: DataSourceVpcConfiguration
    AclConfiguration?: AclConfiguration

    constructor(properties: DatabaseConfiguration) {
        Object.assign(this, properties)
    }
}

export class DocumentAttributeCondition {
    Operator!: Value<string>
    ConditionDocumentAttributeKey!: Value<string>
    ConditionOnValue?: DocumentAttributeValue

    constructor(properties: DocumentAttributeCondition) {
        Object.assign(this, properties)
    }
}

export class DocumentAttributeTarget {
    TargetDocumentAttributeKey!: Value<string>
    TargetDocumentAttributeValueDeletion?: Value<boolean>
    TargetDocumentAttributeValue?: DocumentAttributeValue

    constructor(properties: DocumentAttributeTarget) {
        Object.assign(this, properties)
    }
}

export class DocumentAttributeValue {
    DateValue?: Value<string>
    LongValue?: Value<number>
    StringValue?: Value<string>
    StringListValue?: List<Value<string>>

    constructor(properties: DocumentAttributeValue) {
        Object.assign(this, properties)
    }
}

export class DocumentsMetadataConfiguration {
    S3Prefix?: Value<string>

    constructor(properties: DocumentsMetadataConfiguration) {
        Object.assign(this, properties)
    }
}

export class GoogleDriveConfiguration {
    SecretArn!: Value<string>
    ExcludeSharedDrives?: List<Value<string>>
    ExcludeUserAccounts?: List<Value<string>>
    InclusionPatterns?: List<Value<string>>
    ExcludeMimeTypes?: List<Value<string>>
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    ExclusionPatterns?: List<Value<string>>

    constructor(properties: GoogleDriveConfiguration) {
        Object.assign(this, properties)
    }
}

export class HookConfiguration {
    S3Bucket!: Value<string>
    LambdaArn!: Value<string>
    InvocationCondition?: DocumentAttributeCondition

    constructor(properties: HookConfiguration) {
        Object.assign(this, properties)
    }
}

export class InlineCustomDocumentEnrichmentConfiguration {
    Condition?: DocumentAttributeCondition
    Target?: DocumentAttributeTarget
    DocumentContentDeletion?: Value<boolean>

    constructor(properties: InlineCustomDocumentEnrichmentConfiguration) {
        Object.assign(this, properties)
    }
}

export class OneDriveConfiguration {
    TenantDomain!: Value<string>
    SecretArn!: Value<string>
    DisableLocalGroups?: Value<boolean>
    OneDriveUsers!: OneDriveUsers
    InclusionPatterns?: List<Value<string>>
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    ExclusionPatterns?: List<Value<string>>

    constructor(properties: OneDriveConfiguration) {
        Object.assign(this, properties)
    }
}

export class OneDriveUsers {
    OneDriveUserList?: List<Value<string>>
    OneDriveUserS3Path?: S3Path

    constructor(properties: OneDriveUsers) {
        Object.assign(this, properties)
    }
}

export class ProxyConfiguration {
    Port!: Value<number>
    Host!: Value<string>
    Credentials?: Value<string>

    constructor(properties: ProxyConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3DataSourceConfiguration {
    BucketName!: Value<string>
    InclusionPatterns?: List<Value<string>>
    InclusionPrefixes?: List<Value<string>>
    AccessControlListConfiguration?: AccessControlListConfiguration
    ExclusionPatterns?: List<Value<string>>
    DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration

    constructor(properties: S3DataSourceConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3Path {
    Bucket!: Value<string>
    Key!: Value<string>

    constructor(properties: S3Path) {
        Object.assign(this, properties)
    }
}

export class SalesforceChatterFeedConfiguration {
    DocumentTitleFieldName?: Value<string>
    IncludeFilterTypes?: List<Value<string>>
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    DocumentDataFieldName!: Value<string>

    constructor(properties: SalesforceChatterFeedConfiguration) {
        Object.assign(this, properties)
    }
}

export class SalesforceConfiguration {
    SecretArn!: Value<string>
    ServerUrl!: Value<string>
    IncludeAttachmentFilePatterns?: List<Value<string>>
    StandardObjectConfigurations?: List<SalesforceStandardObjectConfiguration>
    StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration
    ExcludeAttachmentFilePatterns?: List<Value<string>>
    CrawlAttachments?: Value<boolean>
    ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration
    KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration

    constructor(properties: SalesforceConfiguration) {
        Object.assign(this, properties)
    }
}

export class SalesforceCustomKnowledgeArticleTypeConfiguration {
    DocumentTitleFieldName?: Value<string>
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    Name!: Value<string>
    DocumentDataFieldName!: Value<string>

    constructor(properties: SalesforceCustomKnowledgeArticleTypeConfiguration) {
        Object.assign(this, properties)
    }
}

export class SalesforceKnowledgeArticleConfiguration {
    IncludedStates!: List<Value<string>>
    StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration
    CustomKnowledgeArticleTypeConfigurations?: List<SalesforceCustomKnowledgeArticleTypeConfiguration>

    constructor(properties: SalesforceKnowledgeArticleConfiguration) {
        Object.assign(this, properties)
    }
}

export class SalesforceStandardKnowledgeArticleTypeConfiguration {
    DocumentTitleFieldName?: Value<string>
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    DocumentDataFieldName!: Value<string>

    constructor(properties: SalesforceStandardKnowledgeArticleTypeConfiguration) {
        Object.assign(this, properties)
    }
}

export class SalesforceStandardObjectAttachmentConfiguration {
    DocumentTitleFieldName?: Value<string>
    FieldMappings?: List<DataSourceToIndexFieldMapping>

    constructor(properties: SalesforceStandardObjectAttachmentConfiguration) {
        Object.assign(this, properties)
    }
}

export class SalesforceStandardObjectConfiguration {
    DocumentTitleFieldName?: Value<string>
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    Name!: Value<string>
    DocumentDataFieldName!: Value<string>

    constructor(properties: SalesforceStandardObjectConfiguration) {
        Object.assign(this, properties)
    }
}

export class ServiceNowConfiguration {
    SecretArn!: Value<string>
    HostUrl!: Value<string>
    ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration
    ServiceNowBuildVersion!: Value<string>
    KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration
    AuthenticationType?: Value<string>

    constructor(properties: ServiceNowConfiguration) {
        Object.assign(this, properties)
    }
}

export class ServiceNowKnowledgeArticleConfiguration {
    DocumentTitleFieldName?: Value<string>
    IncludeAttachmentFilePatterns?: List<Value<string>>
    ExcludeAttachmentFilePatterns?: List<Value<string>>
    FilterQuery?: Value<string>
    CrawlAttachments?: Value<boolean>
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    DocumentDataFieldName!: Value<string>

    constructor(properties: ServiceNowKnowledgeArticleConfiguration) {
        Object.assign(this, properties)
    }
}

export class ServiceNowServiceCatalogConfiguration {
    DocumentTitleFieldName?: Value<string>
    IncludeAttachmentFilePatterns?: List<Value<string>>
    ExcludeAttachmentFilePatterns?: List<Value<string>>
    CrawlAttachments?: Value<boolean>
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    DocumentDataFieldName!: Value<string>

    constructor(properties: ServiceNowServiceCatalogConfiguration) {
        Object.assign(this, properties)
    }
}

export class SharePointConfiguration {
    SecretArn!: Value<string>
    DocumentTitleFieldName?: Value<string>
    SslCertificateS3Path?: S3Path
    DisableLocalGroups?: Value<boolean>
    CrawlAttachments?: Value<boolean>
    InclusionPatterns?: List<Value<string>>
    VpcConfiguration?: DataSourceVpcConfiguration
    Urls!: List<Value<string>>
    UseChangeLog?: Value<boolean>
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    ExclusionPatterns?: List<Value<string>>
    SharePointVersion!: Value<string>

    constructor(properties: SharePointConfiguration) {
        Object.assign(this, properties)
    }
}

export class SqlConfiguration {
    QueryIdentifiersEnclosingOption?: Value<string>

    constructor(properties: SqlConfiguration) {
        Object.assign(this, properties)
    }
}

export class WebCrawlerAuthenticationConfiguration {
    BasicAuthentication?: List<WebCrawlerBasicAuthentication>

    constructor(properties: WebCrawlerAuthenticationConfiguration) {
        Object.assign(this, properties)
    }
}

export class WebCrawlerBasicAuthentication {
    Port!: Value<number>
    Host!: Value<string>
    Credentials!: Value<string>

    constructor(properties: WebCrawlerBasicAuthentication) {
        Object.assign(this, properties)
    }
}

export class WebCrawlerConfiguration {
    AuthenticationConfiguration?: WebCrawlerAuthenticationConfiguration
    MaxLinksPerPage?: Value<number>
    ProxyConfiguration?: ProxyConfiguration
    UrlExclusionPatterns?: List<Value<string>>
    MaxUrlsPerMinuteCrawlRate?: Value<number>
    UrlInclusionPatterns?: List<Value<string>>
    Urls!: WebCrawlerUrls
    MaxContentSizePerPageInMegaBytes?: Value<number>
    CrawlDepth?: Value<number>

    constructor(properties: WebCrawlerConfiguration) {
        Object.assign(this, properties)
    }
}

export class WebCrawlerSeedUrlConfiguration {
    WebCrawlerMode?: Value<string>
    SeedUrls!: List<Value<string>>

    constructor(properties: WebCrawlerSeedUrlConfiguration) {
        Object.assign(this, properties)
    }
}

export class WebCrawlerSiteMapsConfiguration {
    SiteMaps!: List<Value<string>>

    constructor(properties: WebCrawlerSiteMapsConfiguration) {
        Object.assign(this, properties)
    }
}

export class WebCrawlerUrls {
    SiteMapsConfiguration?: WebCrawlerSiteMapsConfiguration
    SeedUrlConfiguration?: WebCrawlerSeedUrlConfiguration

    constructor(properties: WebCrawlerUrls) {
        Object.assign(this, properties)
    }
}

export class WorkDocsConfiguration {
    CrawlComments?: Value<boolean>
    OrganizationId!: Value<string>
    InclusionPatterns?: List<Value<string>>
    UseChangeLog?: Value<boolean>
    FieldMappings?: List<DataSourceToIndexFieldMapping>
    ExclusionPatterns?: List<Value<string>>

    constructor(properties: WorkDocsConfiguration) {
        Object.assign(this, properties)
    }
}

export interface DataSourceProperties {
    CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration
    IndexId: Value<string>
    LanguageCode?: Value<string>
    Type: Value<string>
    Description?: Value<string>
    Schedule?: Value<string>
    DataSourceConfiguration?: DataSourceConfiguration
    RoleArn?: Value<string>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class DataSource extends ResourceBase<DataSourceProperties> {
    static AccessControlListConfiguration = AccessControlListConfiguration
    static AclConfiguration = AclConfiguration
    static ColumnConfiguration = ColumnConfiguration
    static ConfluenceAttachmentConfiguration = ConfluenceAttachmentConfiguration
    static ConfluenceAttachmentToIndexFieldMapping = ConfluenceAttachmentToIndexFieldMapping
    static ConfluenceBlogConfiguration = ConfluenceBlogConfiguration
    static ConfluenceBlogToIndexFieldMapping = ConfluenceBlogToIndexFieldMapping
    static ConfluenceConfiguration = ConfluenceConfiguration
    static ConfluencePageConfiguration = ConfluencePageConfiguration
    static ConfluencePageToIndexFieldMapping = ConfluencePageToIndexFieldMapping
    static ConfluenceSpaceConfiguration = ConfluenceSpaceConfiguration
    static ConfluenceSpaceToIndexFieldMapping = ConfluenceSpaceToIndexFieldMapping
    static ConnectionConfiguration = ConnectionConfiguration
    static CustomDocumentEnrichmentConfiguration = CustomDocumentEnrichmentConfiguration
    static DataSourceConfiguration = DataSourceConfiguration
    static DataSourceToIndexFieldMapping = DataSourceToIndexFieldMapping
    static DataSourceVpcConfiguration = DataSourceVpcConfiguration
    static DatabaseConfiguration = DatabaseConfiguration
    static DocumentAttributeCondition = DocumentAttributeCondition
    static DocumentAttributeTarget = DocumentAttributeTarget
    static DocumentAttributeValue = DocumentAttributeValue
    static DocumentsMetadataConfiguration = DocumentsMetadataConfiguration
    static GoogleDriveConfiguration = GoogleDriveConfiguration
    static HookConfiguration = HookConfiguration
    static InlineCustomDocumentEnrichmentConfiguration = InlineCustomDocumentEnrichmentConfiguration
    static OneDriveConfiguration = OneDriveConfiguration
    static OneDriveUsers = OneDriveUsers
    static ProxyConfiguration = ProxyConfiguration
    static S3DataSourceConfiguration = S3DataSourceConfiguration
    static S3Path = S3Path
    static SalesforceChatterFeedConfiguration = SalesforceChatterFeedConfiguration
    static SalesforceConfiguration = SalesforceConfiguration
    static SalesforceCustomKnowledgeArticleTypeConfiguration = SalesforceCustomKnowledgeArticleTypeConfiguration
    static SalesforceKnowledgeArticleConfiguration = SalesforceKnowledgeArticleConfiguration
    static SalesforceStandardKnowledgeArticleTypeConfiguration = SalesforceStandardKnowledgeArticleTypeConfiguration
    static SalesforceStandardObjectAttachmentConfiguration = SalesforceStandardObjectAttachmentConfiguration
    static SalesforceStandardObjectConfiguration = SalesforceStandardObjectConfiguration
    static ServiceNowConfiguration = ServiceNowConfiguration
    static ServiceNowKnowledgeArticleConfiguration = ServiceNowKnowledgeArticleConfiguration
    static ServiceNowServiceCatalogConfiguration = ServiceNowServiceCatalogConfiguration
    static SharePointConfiguration = SharePointConfiguration
    static SqlConfiguration = SqlConfiguration
    static WebCrawlerAuthenticationConfiguration = WebCrawlerAuthenticationConfiguration
    static WebCrawlerBasicAuthentication = WebCrawlerBasicAuthentication
    static WebCrawlerConfiguration = WebCrawlerConfiguration
    static WebCrawlerSeedUrlConfiguration = WebCrawlerSeedUrlConfiguration
    static WebCrawlerSiteMapsConfiguration = WebCrawlerSiteMapsConfiguration
    static WebCrawlerUrls = WebCrawlerUrls
    static WorkDocsConfiguration = WorkDocsConfiguration

    constructor(properties: DataSourceProperties) {
        super('AWS::Kendra::DataSource', properties)
    }
}
