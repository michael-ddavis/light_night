import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorshipNightMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Comment {
  readonly id: string;
  readonly blogID?: string;
  readonly author: string;
  readonly dateTime?: string;
  readonly comment: string;
  readonly likes?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Blog {
  readonly id: string;
  readonly title: string;
  readonly author: string;
  readonly tags?: (string | null)[];
  readonly openingParagraph?: string;
  readonly scriptureOne?: string;
  readonly middleParagraph?: string;
  readonly scriptureTwo?: string;
  readonly lastParagraph?: string;
  readonly scriptureThree?: string;
  readonly fourthParagraph?: string;
  readonly Comments?: (Comment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Blog, BlogMetaData>);
  static copyOf(source: Blog, mutator: (draft: MutableModel<Blog, BlogMetaData>) => MutableModel<Blog, BlogMetaData> | void): Blog;
}

export declare class Team {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly role: string;
  readonly instagramLink?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Team, TeamMetaData>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team, TeamMetaData>) => MutableModel<Team, TeamMetaData> | void): Team;
}

export declare class WorshipNight {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly address: string;
  readonly location: string;
  readonly image: string;
  readonly googleMapLink?: string;
  readonly registrationLink?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<WorshipNight, WorshipNightMetaData>);
  static copyOf(source: WorshipNight, mutator: (draft: MutableModel<WorshipNight, WorshipNightMetaData>) => MutableModel<WorshipNight, WorshipNightMetaData> | void): WorshipNight;
}