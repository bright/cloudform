import JobDefinition_ from './jobDefinition';
import JobQueue_ from './jobQueue';
import ComputeEnvironment_ from './computeEnvironment';
export declare namespace Batch {
    const JobDefinition: typeof JobDefinition_;
    const JobQueue: typeof JobQueue_;
    const ComputeEnvironment: typeof ComputeEnvironment_;
    type JobDefinition = JobDefinition_;
    type JobQueue = JobQueue_;
    type ComputeEnvironment = ComputeEnvironment_;
}
