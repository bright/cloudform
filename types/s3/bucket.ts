import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'
import CorsConfiguration from './corsConfiguration'
import LifecycleConfiguration from './lifecycleConfiguration'
import LoggingConfiguration from './loggingConfiguration'
import NotificationConfiguration from './notificationConfiguration'
import ReplicationConfiguration from './replicationConfiguration'
import VersioningConfiguration from './versioningConfiguration'
import WebsiteConfiguration from './websiteConfiguration'

export type AccessControl = "*" | "Private" | "PublicRead" | "PublicReadWrite" | "AuthenticatedRead" | "LogDeliveryWrite" | "BucketOwnerRead" | "BucketOwnerFullControl"

export interface BucketProperties {
    AccessControl?: Value<AccessControl>
    BucketName?: Value<string>
    CorsConfiguration?: CorsConfiguration
    LifecycleConfiguration?: LifecycleConfiguration
    LoggingConfiguration?: LoggingConfiguration
    NotificationConfiguration?: NotificationConfiguration
    ReplicationConfiguration?: ReplicationConfiguration
    VersioningConfiguration?: VersioningConfiguration
    WebsiteConfiguration?: WebsiteConfiguration
    Tags?: ResourceTag[]
}

export default class Bucket extends ResourceBase {
    constructor(properties: BucketProperties, dependsOn?: Value<string>) {
        super('AWS::S3::Bucket', properties, dependsOn)
    }
}