import AutoScalingGroup_ from './autoScalingGroup';
import LaunchConfiguration_ from './launchConfiguration';
import LifecycleHook_ from './lifecycleHook';
import ScalingPolicy_ from './scalingPolicy';
import ScheduledAction_ from './scheduledAction';
import WarmPool_ from './warmPool';
export declare namespace AutoScaling {
    const AutoScalingGroup: typeof AutoScalingGroup_;
    const LaunchConfiguration: typeof LaunchConfiguration_;
    const LifecycleHook: typeof LifecycleHook_;
    const ScalingPolicy: typeof ScalingPolicy_;
    const ScheduledAction: typeof ScheduledAction_;
    const WarmPool: typeof WarmPool_;
    type AutoScalingGroup = AutoScalingGroup_;
    type LaunchConfiguration = LaunchConfiguration_;
    type LifecycleHook = LifecycleHook_;
    type ScalingPolicy = ScalingPolicy_;
    type ScheduledAction = ScheduledAction_;
    type WarmPool = WarmPool_;
}
