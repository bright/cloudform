import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface HostedConfigurationVersionProperties {
    ConfigurationProfileId: Value<string>;
    Description?: Value<string>;
    ContentType: Value<string>;
    LatestVersionNumber?: Value<number>;
    Content: Value<string>;
    ApplicationId: Value<string>;
}
export default class HostedConfigurationVersion extends ResourceBase<HostedConfigurationVersionProperties> {
    constructor(properties: HostedConfigurationVersionProperties);
}
