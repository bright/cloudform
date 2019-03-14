import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class NotebookInstanceLifecycleHook {
    Content?: Value<string>;
    constructor(properties: NotebookInstanceLifecycleHook);
}
export interface NotebookInstanceLifecycleConfigProperties {
    OnStart?: List<NotebookInstanceLifecycleHook>;
    NotebookInstanceLifecycleConfigName?: Value<string>;
    OnCreate?: List<NotebookInstanceLifecycleHook>;
}
export default class NotebookInstanceLifecycleConfig extends ResourceBase<NotebookInstanceLifecycleConfigProperties> {
    static NotebookInstanceLifecycleHook: typeof NotebookInstanceLifecycleHook;
    constructor(properties?: NotebookInstanceLifecycleConfigProperties);
}
