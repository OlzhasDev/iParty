import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PartyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Comment {
  readonly id: string;
  readonly comment: string;
  readonly likes: number;
  readonly dislikes: number;
  readonly partyID?: string;
  readonly User?: User;
  readonly Party?: Party;
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly username: string;
  readonly email?: string;
  readonly number?: string;
  readonly image?: string;
  readonly friends?: number;
  readonly Parties?: (Party | null)[];
  readonly Comments?: (Comment | null)[];
  readonly sub: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Party {
  readonly id: string;
  readonly image?: string;
  readonly type: string;
  readonly title: string;
  readonly description?: string;
  readonly date: string;
  readonly entryfee?: number;
  readonly age: number;
  readonly drinkinking?: string;
  readonly User?: User;
  readonly Comments?: (Comment | null)[];
  readonly latitude: number;
  readonly longitude: number;
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Party, PartyMetaData>);
  static copyOf(source: Party, mutator: (draft: MutableModel<Party, PartyMetaData>) => MutableModel<Party, PartyMetaData> | void): Party;
}