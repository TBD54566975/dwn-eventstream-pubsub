import {
  EventStream, MessageEvent,
  EventSubscription,
  EventListener,
} from '@tbd54566975/dwn-sdk-js';

import type { KeyValues } from './types.js';

export class EventStreamNoOp implements EventStream {

  /**
   * NoOp event stream.
   */
  async subscribe(_tenant: string, id: string, _listener: EventListener): Promise<EventSubscription> {

    return {
      id,
      close: async (): Promise<void> => {
        return;
      }
    };
  }

  async open(): Promise<void> {
    return;
  }

  async close(): Promise<void> {
    return;
  }

  emit(_tenant: string, _event: MessageEvent, _indexes: KeyValues): void {
    return;
  }
}