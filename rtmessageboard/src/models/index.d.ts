import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Message {
  readonly id: string;
  readonly title: string;
  readonly color?: string;
  readonly image?: string;
  readonly createAt?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}