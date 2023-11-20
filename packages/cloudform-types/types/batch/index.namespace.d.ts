import ComputeEnvironment_ from './computeEnvironment';
import JobDefinition_ from './jobDefinition';
import JobQueue_ from './jobQueue';
import SchedulingPolicy_ from './schedulingPolicy';
export declare namespace Batch {
    const ComputeEnvironment: typeof ComputeEnvironment_;
    const JobDefinition: typeof JobDefinition_;
    const JobQueue: typeof JobQueue_;
    const SchedulingPolicy: typeof SchedulingPolicy_;
    type ComputeEnvironment = ComputeEnvironment_;
    type JobDefinition = JobDefinition_;
    type JobQueue = JobQueue_;
    type SchedulingPolicy = SchedulingPolicy_;
}
