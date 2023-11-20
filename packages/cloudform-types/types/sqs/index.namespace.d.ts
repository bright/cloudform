import Queue_ from './queue';
import QueueInlinePolicy_ from './queueInlinePolicy';
import QueuePolicy_ from './queuePolicy';
export declare namespace SQS {
    const Queue: typeof Queue_;
    const QueueInlinePolicy: typeof QueueInlinePolicy_;
    const QueuePolicy: typeof QueuePolicy_;
    type Queue = Queue_;
    type QueueInlinePolicy = QueueInlinePolicy_;
    type QueuePolicy = QueuePolicy_;
}
