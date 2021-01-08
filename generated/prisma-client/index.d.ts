// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  atom: (where?: AtomWhereInput) => Promise<boolean>;
  description: (where?: DescriptionWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  atom: (where: AtomWhereUniqueInput) => AtomNullablePromise;
  atoms: (args?: {
    where?: AtomWhereInput;
    orderBy?: AtomOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Atom>;
  atomsConnection: (args?: {
    where?: AtomWhereInput;
    orderBy?: AtomOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => AtomConnectionPromise;
  description: (
    where: DescriptionWhereUniqueInput
  ) => DescriptionNullablePromise;
  descriptions: (args?: {
    where?: DescriptionWhereInput;
    orderBy?: DescriptionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Description>;
  descriptionsConnection: (args?: {
    where?: DescriptionWhereInput;
    orderBy?: DescriptionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => DescriptionConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAtom: (data: AtomCreateInput) => AtomPromise;
  updateAtom: (args: {
    data: AtomUpdateInput;
    where: AtomWhereUniqueInput;
  }) => AtomPromise;
  updateManyAtoms: (args: {
    data: AtomUpdateManyMutationInput;
    where?: AtomWhereInput;
  }) => BatchPayloadPromise;
  upsertAtom: (args: {
    where: AtomWhereUniqueInput;
    create: AtomCreateInput;
    update: AtomUpdateInput;
  }) => AtomPromise;
  deleteAtom: (where: AtomWhereUniqueInput) => AtomPromise;
  deleteManyAtoms: (where?: AtomWhereInput) => BatchPayloadPromise;
  createDescription: (data: DescriptionCreateInput) => DescriptionPromise;
  updateDescription: (args: {
    data: DescriptionUpdateInput;
    where: DescriptionWhereUniqueInput;
  }) => DescriptionPromise;
  updateManyDescriptions: (args: {
    data: DescriptionUpdateManyMutationInput;
    where?: DescriptionWhereInput;
  }) => BatchPayloadPromise;
  upsertDescription: (args: {
    where: DescriptionWhereUniqueInput;
    create: DescriptionCreateInput;
    update: DescriptionUpdateInput;
  }) => DescriptionPromise;
  deleteDescription: (where: DescriptionWhereUniqueInput) => DescriptionPromise;
  deleteManyDescriptions: (
    where?: DescriptionWhereInput
  ) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  atom: (
    where?: AtomSubscriptionWhereInput
  ) => AtomSubscriptionPayloadSubscription;
  description: (
    where?: DescriptionSubscriptionWhereInput
  ) => DescriptionSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type AtomOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "Number_ASC"
  | "Number_DESC"
  | "Name_ASC"
  | "Name_DESC"
  | "locationX_ASC"
  | "locationX_DESC"
  | "locationY_ASC"
  | "locationY_DESC";

export type DescriptionOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "Subtitle_ASC"
  | "Subtitle_DESC"
  | "Text_ASC"
  | "Text_DESC"
  | "From_ASC"
  | "From_DESC"
  | "Author_ASC"
  | "Author_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type AtomWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  Number?: Maybe<String>;
  Name?: Maybe<String>;
}>;

export interface AtomWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  Number?: Maybe<String>;
  Number_not?: Maybe<String>;
  Number_in?: Maybe<String[] | String>;
  Number_not_in?: Maybe<String[] | String>;
  Number_lt?: Maybe<String>;
  Number_lte?: Maybe<String>;
  Number_gt?: Maybe<String>;
  Number_gte?: Maybe<String>;
  Number_contains?: Maybe<String>;
  Number_not_contains?: Maybe<String>;
  Number_starts_with?: Maybe<String>;
  Number_not_starts_with?: Maybe<String>;
  Number_ends_with?: Maybe<String>;
  Number_not_ends_with?: Maybe<String>;
  Name?: Maybe<String>;
  Name_not?: Maybe<String>;
  Name_in?: Maybe<String[] | String>;
  Name_not_in?: Maybe<String[] | String>;
  Name_lt?: Maybe<String>;
  Name_lte?: Maybe<String>;
  Name_gt?: Maybe<String>;
  Name_gte?: Maybe<String>;
  Name_contains?: Maybe<String>;
  Name_not_contains?: Maybe<String>;
  Name_starts_with?: Maybe<String>;
  Name_not_starts_with?: Maybe<String>;
  Name_ends_with?: Maybe<String>;
  Name_not_ends_with?: Maybe<String>;
  locationX?: Maybe<String>;
  locationX_not?: Maybe<String>;
  locationX_in?: Maybe<String[] | String>;
  locationX_not_in?: Maybe<String[] | String>;
  locationX_lt?: Maybe<String>;
  locationX_lte?: Maybe<String>;
  locationX_gt?: Maybe<String>;
  locationX_gte?: Maybe<String>;
  locationX_contains?: Maybe<String>;
  locationX_not_contains?: Maybe<String>;
  locationX_starts_with?: Maybe<String>;
  locationX_not_starts_with?: Maybe<String>;
  locationX_ends_with?: Maybe<String>;
  locationX_not_ends_with?: Maybe<String>;
  locationY?: Maybe<String>;
  locationY_not?: Maybe<String>;
  locationY_in?: Maybe<String[] | String>;
  locationY_not_in?: Maybe<String[] | String>;
  locationY_lt?: Maybe<String>;
  locationY_lte?: Maybe<String>;
  locationY_gt?: Maybe<String>;
  locationY_gte?: Maybe<String>;
  locationY_contains?: Maybe<String>;
  locationY_not_contains?: Maybe<String>;
  locationY_starts_with?: Maybe<String>;
  locationY_not_starts_with?: Maybe<String>;
  locationY_ends_with?: Maybe<String>;
  locationY_not_ends_with?: Maybe<String>;
  AND?: Maybe<AtomWhereInput[] | AtomWhereInput>;
  OR?: Maybe<AtomWhereInput[] | AtomWhereInput>;
  NOT?: Maybe<AtomWhereInput[] | AtomWhereInput>;
}

export type DescriptionWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface DescriptionWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  Subtitle?: Maybe<String>;
  Subtitle_not?: Maybe<String>;
  Subtitle_in?: Maybe<String[] | String>;
  Subtitle_not_in?: Maybe<String[] | String>;
  Subtitle_lt?: Maybe<String>;
  Subtitle_lte?: Maybe<String>;
  Subtitle_gt?: Maybe<String>;
  Subtitle_gte?: Maybe<String>;
  Subtitle_contains?: Maybe<String>;
  Subtitle_not_contains?: Maybe<String>;
  Subtitle_starts_with?: Maybe<String>;
  Subtitle_not_starts_with?: Maybe<String>;
  Subtitle_ends_with?: Maybe<String>;
  Subtitle_not_ends_with?: Maybe<String>;
  Text?: Maybe<String>;
  Text_not?: Maybe<String>;
  Text_in?: Maybe<String[] | String>;
  Text_not_in?: Maybe<String[] | String>;
  Text_lt?: Maybe<String>;
  Text_lte?: Maybe<String>;
  Text_gt?: Maybe<String>;
  Text_gte?: Maybe<String>;
  Text_contains?: Maybe<String>;
  Text_not_contains?: Maybe<String>;
  Text_starts_with?: Maybe<String>;
  Text_not_starts_with?: Maybe<String>;
  Text_ends_with?: Maybe<String>;
  Text_not_ends_with?: Maybe<String>;
  From?: Maybe<String>;
  From_not?: Maybe<String>;
  From_in?: Maybe<String[] | String>;
  From_not_in?: Maybe<String[] | String>;
  From_lt?: Maybe<String>;
  From_lte?: Maybe<String>;
  From_gt?: Maybe<String>;
  From_gte?: Maybe<String>;
  From_contains?: Maybe<String>;
  From_not_contains?: Maybe<String>;
  From_starts_with?: Maybe<String>;
  From_not_starts_with?: Maybe<String>;
  From_ends_with?: Maybe<String>;
  From_not_ends_with?: Maybe<String>;
  Author?: Maybe<String>;
  Author_not?: Maybe<String>;
  Author_in?: Maybe<String[] | String>;
  Author_not_in?: Maybe<String[] | String>;
  Author_lt?: Maybe<String>;
  Author_lte?: Maybe<String>;
  Author_gt?: Maybe<String>;
  Author_gte?: Maybe<String>;
  Author_contains?: Maybe<String>;
  Author_not_contains?: Maybe<String>;
  Author_starts_with?: Maybe<String>;
  Author_not_starts_with?: Maybe<String>;
  Author_ends_with?: Maybe<String>;
  Author_not_ends_with?: Maybe<String>;
  AND?: Maybe<DescriptionWhereInput[] | DescriptionWhereInput>;
  OR?: Maybe<DescriptionWhereInput[] | DescriptionWhereInput>;
  NOT?: Maybe<DescriptionWhereInput[] | DescriptionWhereInput>;
}

export interface AtomCreateInput {
  id?: Maybe<ID_Input>;
  Number: String;
  Name: String;
  locationX: String;
  locationY: String;
}

export interface AtomUpdateInput {
  Number?: Maybe<String>;
  Name?: Maybe<String>;
  locationX?: Maybe<String>;
  locationY?: Maybe<String>;
}

export interface AtomUpdateManyMutationInput {
  Number?: Maybe<String>;
  Name?: Maybe<String>;
  locationX?: Maybe<String>;
  locationY?: Maybe<String>;
}

export interface DescriptionCreateInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
  Subtitle?: Maybe<String>;
  Text?: Maybe<String>;
  From?: Maybe<String>;
  Author?: Maybe<String>;
}

export interface DescriptionUpdateInput {
  name?: Maybe<String>;
  Subtitle?: Maybe<String>;
  Text?: Maybe<String>;
  From?: Maybe<String>;
  Author?: Maybe<String>;
}

export interface DescriptionUpdateManyMutationInput {
  name?: Maybe<String>;
  Subtitle?: Maybe<String>;
  Text?: Maybe<String>;
  From?: Maybe<String>;
  Author?: Maybe<String>;
}

export interface AtomSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<AtomWhereInput>;
  AND?: Maybe<AtomSubscriptionWhereInput[] | AtomSubscriptionWhereInput>;
  OR?: Maybe<AtomSubscriptionWhereInput[] | AtomSubscriptionWhereInput>;
  NOT?: Maybe<AtomSubscriptionWhereInput[] | AtomSubscriptionWhereInput>;
}

export interface DescriptionSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<DescriptionWhereInput>;
  AND?: Maybe<
    DescriptionSubscriptionWhereInput[] | DescriptionSubscriptionWhereInput
  >;
  OR?: Maybe<
    DescriptionSubscriptionWhereInput[] | DescriptionSubscriptionWhereInput
  >;
  NOT?: Maybe<
    DescriptionSubscriptionWhereInput[] | DescriptionSubscriptionWhereInput
  >;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Atom {
  id: ID_Output;
  Number: String;
  Name: String;
  locationX: String;
  locationY: String;
}

export interface AtomPromise extends Promise<Atom>, Fragmentable {
  id: () => Promise<ID_Output>;
  Number: () => Promise<String>;
  Name: () => Promise<String>;
  locationX: () => Promise<String>;
  locationY: () => Promise<String>;
}

export interface AtomSubscription
  extends Promise<AsyncIterator<Atom>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  Number: () => Promise<AsyncIterator<String>>;
  Name: () => Promise<AsyncIterator<String>>;
  locationX: () => Promise<AsyncIterator<String>>;
  locationY: () => Promise<AsyncIterator<String>>;
}

export interface AtomNullablePromise
  extends Promise<Atom | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  Number: () => Promise<String>;
  Name: () => Promise<String>;
  locationX: () => Promise<String>;
  locationY: () => Promise<String>;
}

export interface AtomConnection {
  pageInfo: PageInfo;
  edges: AtomEdge[];
}

export interface AtomConnectionPromise
  extends Promise<AtomConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AtomEdge>>() => T;
  aggregate: <T = AggregateAtomPromise>() => T;
}

export interface AtomConnectionSubscription
  extends Promise<AsyncIterator<AtomConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AtomEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAtomSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AtomEdge {
  node: Atom;
  cursor: String;
}

export interface AtomEdgePromise extends Promise<AtomEdge>, Fragmentable {
  node: <T = AtomPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AtomEdgeSubscription
  extends Promise<AsyncIterator<AtomEdge>>,
    Fragmentable {
  node: <T = AtomSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateAtom {
  count: Int;
}

export interface AggregateAtomPromise
  extends Promise<AggregateAtom>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAtomSubscription
  extends Promise<AsyncIterator<AggregateAtom>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Description {
  id: ID_Output;
  name?: String;
  Subtitle?: String;
  Text?: String;
  From?: String;
  Author?: String;
}

export interface DescriptionPromise extends Promise<Description>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  Subtitle: () => Promise<String>;
  Text: () => Promise<String>;
  From: () => Promise<String>;
  Author: () => Promise<String>;
}

export interface DescriptionSubscription
  extends Promise<AsyncIterator<Description>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  Subtitle: () => Promise<AsyncIterator<String>>;
  Text: () => Promise<AsyncIterator<String>>;
  From: () => Promise<AsyncIterator<String>>;
  Author: () => Promise<AsyncIterator<String>>;
}

export interface DescriptionNullablePromise
  extends Promise<Description | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  Subtitle: () => Promise<String>;
  Text: () => Promise<String>;
  From: () => Promise<String>;
  Author: () => Promise<String>;
}

export interface DescriptionConnection {
  pageInfo: PageInfo;
  edges: DescriptionEdge[];
}

export interface DescriptionConnectionPromise
  extends Promise<DescriptionConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<DescriptionEdge>>() => T;
  aggregate: <T = AggregateDescriptionPromise>() => T;
}

export interface DescriptionConnectionSubscription
  extends Promise<AsyncIterator<DescriptionConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<DescriptionEdgeSubscription>>>() => T;
  aggregate: <T = AggregateDescriptionSubscription>() => T;
}

export interface DescriptionEdge {
  node: Description;
  cursor: String;
}

export interface DescriptionEdgePromise
  extends Promise<DescriptionEdge>,
    Fragmentable {
  node: <T = DescriptionPromise>() => T;
  cursor: () => Promise<String>;
}

export interface DescriptionEdgeSubscription
  extends Promise<AsyncIterator<DescriptionEdge>>,
    Fragmentable {
  node: <T = DescriptionSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateDescription {
  count: Int;
}

export interface AggregateDescriptionPromise
  extends Promise<AggregateDescription>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateDescriptionSubscription
  extends Promise<AsyncIterator<AggregateDescription>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AtomSubscriptionPayload {
  mutation: MutationType;
  node: Atom;
  updatedFields: String[];
  previousValues: AtomPreviousValues;
}

export interface AtomSubscriptionPayloadPromise
  extends Promise<AtomSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AtomPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AtomPreviousValuesPromise>() => T;
}

export interface AtomSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AtomSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AtomSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AtomPreviousValuesSubscription>() => T;
}

export interface AtomPreviousValues {
  id: ID_Output;
  Number: String;
  Name: String;
  locationX: String;
  locationY: String;
}

export interface AtomPreviousValuesPromise
  extends Promise<AtomPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  Number: () => Promise<String>;
  Name: () => Promise<String>;
  locationX: () => Promise<String>;
  locationY: () => Promise<String>;
}

export interface AtomPreviousValuesSubscription
  extends Promise<AsyncIterator<AtomPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  Number: () => Promise<AsyncIterator<String>>;
  Name: () => Promise<AsyncIterator<String>>;
  locationX: () => Promise<AsyncIterator<String>>;
  locationY: () => Promise<AsyncIterator<String>>;
}

export interface DescriptionSubscriptionPayload {
  mutation: MutationType;
  node: Description;
  updatedFields: String[];
  previousValues: DescriptionPreviousValues;
}

export interface DescriptionSubscriptionPayloadPromise
  extends Promise<DescriptionSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = DescriptionPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = DescriptionPreviousValuesPromise>() => T;
}

export interface DescriptionSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<DescriptionSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = DescriptionSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = DescriptionPreviousValuesSubscription>() => T;
}

export interface DescriptionPreviousValues {
  id: ID_Output;
  name?: String;
  Subtitle?: String;
  Text?: String;
  From?: String;
  Author?: String;
}

export interface DescriptionPreviousValuesPromise
  extends Promise<DescriptionPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  Subtitle: () => Promise<String>;
  Text: () => Promise<String>;
  From: () => Promise<String>;
  Author: () => Promise<String>;
}

export interface DescriptionPreviousValuesSubscription
  extends Promise<AsyncIterator<DescriptionPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  Subtitle: () => Promise<AsyncIterator<String>>;
  Text: () => Promise<AsyncIterator<String>>;
  From: () => Promise<AsyncIterator<String>>;
  Author: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Atom",
    embedded: false
  },
  {
    name: "Description",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
