import { ResourceBase } from '../resource';
import { Value } from '../internal';
import ShutdownEventConfiguration from './shutdownEventConfiguration';
export interface LifecycleEventConfigurationProperties {
    ShutdownEventConfiguration: ShutdownEventConfiguration;
}
export default class LifecycleEventConfiguration extends ResourceBase {
    constructor(properties: LifecycleEventConfigurationProperties, dependsOn?: Value<string>);
}
