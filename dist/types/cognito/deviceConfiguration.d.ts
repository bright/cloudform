import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface DeviceConfigurationProperties {
    ChallengeRequiredOnNewDevice?: Value<boolean>;
    DeviceOnlyRememberedOnUserPrompt?: Value<boolean>;
}
export default class DeviceConfiguration extends ResourceBase {
    constructor(properties: DeviceConfigurationProperties, dependsOn?: Value<string>);
}
