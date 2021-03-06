// Code generated by Prisma (prisma@1.34.1). DO NOT EDIT.
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
  event: (where?: EventWhereInput) => Promise<boolean>;
  people: (where?: PeopleWhereInput) => Promise<boolean>;
  ship: (where?: ShipWhereInput) => Promise<boolean>;
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

  event: (where: EventWhereUniqueInput) => EventNullablePromise;
  events: (args?: {
    where?: EventWhereInput;
    orderBy?: EventOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Event>;
  eventsConnection: (args?: {
    where?: EventWhereInput;
    orderBy?: EventOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => EventConnectionPromise;
  people: (where: PeopleWhereUniqueInput) => PeopleNullablePromise;
  peoples: (args?: {
    where?: PeopleWhereInput;
    orderBy?: PeopleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<People>;
  peoplesConnection: (args?: {
    where?: PeopleWhereInput;
    orderBy?: PeopleOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PeopleConnectionPromise;
  ship: (where: ShipWhereUniqueInput) => ShipNullablePromise;
  ships: (args?: {
    where?: ShipWhereInput;
    orderBy?: ShipOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Ship>;
  shipsConnection: (args?: {
    where?: ShipWhereInput;
    orderBy?: ShipOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ShipConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createEvent: (data: EventCreateInput) => EventPromise;
  updateEvent: (args: {
    data: EventUpdateInput;
    where: EventWhereUniqueInput;
  }) => EventPromise;
  updateManyEvents: (args: {
    data: EventUpdateManyMutationInput;
    where?: EventWhereInput;
  }) => BatchPayloadPromise;
  upsertEvent: (args: {
    where: EventWhereUniqueInput;
    create: EventCreateInput;
    update: EventUpdateInput;
  }) => EventPromise;
  deleteEvent: (where: EventWhereUniqueInput) => EventPromise;
  deleteManyEvents: (where?: EventWhereInput) => BatchPayloadPromise;
  createPeople: (data: PeopleCreateInput) => PeoplePromise;
  updatePeople: (args: {
    data: PeopleUpdateInput;
    where: PeopleWhereUniqueInput;
  }) => PeoplePromise;
  updateManyPeoples: (args: {
    data: PeopleUpdateManyMutationInput;
    where?: PeopleWhereInput;
  }) => BatchPayloadPromise;
  upsertPeople: (args: {
    where: PeopleWhereUniqueInput;
    create: PeopleCreateInput;
    update: PeopleUpdateInput;
  }) => PeoplePromise;
  deletePeople: (where: PeopleWhereUniqueInput) => PeoplePromise;
  deleteManyPeoples: (where?: PeopleWhereInput) => BatchPayloadPromise;
  createShip: (data: ShipCreateInput) => ShipPromise;
  updateShip: (args: {
    data: ShipUpdateInput;
    where: ShipWhereUniqueInput;
  }) => ShipPromise;
  updateManyShips: (args: {
    data: ShipUpdateManyMutationInput;
    where?: ShipWhereInput;
  }) => BatchPayloadPromise;
  upsertShip: (args: {
    where: ShipWhereUniqueInput;
    create: ShipCreateInput;
    update: ShipUpdateInput;
  }) => ShipPromise;
  deleteShip: (where: ShipWhereUniqueInput) => ShipPromise;
  deleteManyShips: (where?: ShipWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  event: (
    where?: EventSubscriptionWhereInput
  ) => EventSubscriptionPayloadSubscription;
  people: (
    where?: PeopleSubscriptionWhereInput
  ) => PeopleSubscriptionPayloadSubscription;
  ship: (
    where?: ShipSubscriptionWhereInput
  ) => ShipSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type EventOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "subtitle_ASC"
  | "subtitle_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type PeopleOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "nation_ASC"
  | "nation_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type ShipOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export interface PeopleUpdateInput {
  name?: Maybe<String>;
  nation?: Maybe<String>;
}

export interface PeopleWhereInput {
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
  nation?: Maybe<String>;
  nation_not?: Maybe<String>;
  nation_in?: Maybe<String[] | String>;
  nation_not_in?: Maybe<String[] | String>;
  nation_lt?: Maybe<String>;
  nation_lte?: Maybe<String>;
  nation_gt?: Maybe<String>;
  nation_gte?: Maybe<String>;
  nation_contains?: Maybe<String>;
  nation_not_contains?: Maybe<String>;
  nation_starts_with?: Maybe<String>;
  nation_not_starts_with?: Maybe<String>;
  nation_ends_with?: Maybe<String>;
  nation_not_ends_with?: Maybe<String>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<PeopleWhereInput[] | PeopleWhereInput>;
  OR?: Maybe<PeopleWhereInput[] | PeopleWhereInput>;
  NOT?: Maybe<PeopleWhereInput[] | PeopleWhereInput>;
}

export type EventWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface PeopleSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PeopleWhereInput>;
  AND?: Maybe<PeopleSubscriptionWhereInput[] | PeopleSubscriptionWhereInput>;
  OR?: Maybe<PeopleSubscriptionWhereInput[] | PeopleSubscriptionWhereInput>;
  NOT?: Maybe<PeopleSubscriptionWhereInput[] | PeopleSubscriptionWhereInput>;
}

export interface EventWhereInput {
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
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  subtitle?: Maybe<String>;
  subtitle_not?: Maybe<String>;
  subtitle_in?: Maybe<String[] | String>;
  subtitle_not_in?: Maybe<String[] | String>;
  subtitle_lt?: Maybe<String>;
  subtitle_lte?: Maybe<String>;
  subtitle_gt?: Maybe<String>;
  subtitle_gte?: Maybe<String>;
  subtitle_contains?: Maybe<String>;
  subtitle_not_contains?: Maybe<String>;
  subtitle_starts_with?: Maybe<String>;
  subtitle_not_starts_with?: Maybe<String>;
  subtitle_ends_with?: Maybe<String>;
  subtitle_not_ends_with?: Maybe<String>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<EventWhereInput[] | EventWhereInput>;
  OR?: Maybe<EventWhereInput[] | EventWhereInput>;
  NOT?: Maybe<EventWhereInput[] | EventWhereInput>;
}

export interface EventUpdateManyMutationInput {
  title?: Maybe<String>;
  subtitle?: Maybe<String>;
}

export interface ShipUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface EventUpdateInput {
  title?: Maybe<String>;
  subtitle?: Maybe<String>;
}

export interface ShipCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
}

export interface ShipSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ShipWhereInput>;
  AND?: Maybe<ShipSubscriptionWhereInput[] | ShipSubscriptionWhereInput>;
  OR?: Maybe<ShipSubscriptionWhereInput[] | ShipSubscriptionWhereInput>;
  NOT?: Maybe<ShipSubscriptionWhereInput[] | ShipSubscriptionWhereInput>;
}

export interface ShipWhereInput {
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
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<ShipWhereInput[] | ShipWhereInput>;
  OR?: Maybe<ShipWhereInput[] | ShipWhereInput>;
  NOT?: Maybe<ShipWhereInput[] | ShipWhereInput>;
}

export type ShipWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface EventCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  subtitle: String;
}

export type PeopleWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface PeopleUpdateManyMutationInput {
  name?: Maybe<String>;
  nation?: Maybe<String>;
}

export interface ShipUpdateInput {
  name?: Maybe<String>;
}

export interface EventSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<EventWhereInput>;
  AND?: Maybe<EventSubscriptionWhereInput[] | EventSubscriptionWhereInput>;
  OR?: Maybe<EventSubscriptionWhereInput[] | EventSubscriptionWhereInput>;
  NOT?: Maybe<EventSubscriptionWhereInput[] | EventSubscriptionWhereInput>;
}

export interface PeopleCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  nation: String;
}

export interface NodeNode {
  id: ID_Output;
}

export interface ShipConnection {
  pageInfo: PageInfo;
  edges: ShipEdge[];
}

export interface ShipConnectionPromise
  extends Promise<ShipConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ShipEdge>>() => T;
  aggregate: <T = AggregateShipPromise>() => T;
}

export interface ShipConnectionSubscription
  extends Promise<AsyncIterator<ShipConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ShipEdgeSubscription>>>() => T;
  aggregate: <T = AggregateShipSubscription>() => T;
}

export interface AggregateEvent {
  count: Int;
}

export interface AggregateEventPromise
  extends Promise<AggregateEvent>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateEventSubscription
  extends Promise<AsyncIterator<AggregateEvent>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PeopleSubscriptionPayload {
  mutation: MutationType;
  node: People;
  updatedFields: String[];
  previousValues: PeoplePreviousValues;
}

export interface PeopleSubscriptionPayloadPromise
  extends Promise<PeopleSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PeoplePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PeoplePreviousValuesPromise>() => T;
}

export interface PeopleSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PeopleSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PeopleSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PeoplePreviousValuesSubscription>() => T;
}

export interface EventEdge {
  node: Event;
  cursor: String;
}

export interface EventEdgePromise extends Promise<EventEdge>, Fragmentable {
  node: <T = EventPromise>() => T;
  cursor: () => Promise<String>;
}

export interface EventEdgeSubscription
  extends Promise<AsyncIterator<EventEdge>>,
    Fragmentable {
  node: <T = EventSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ShipPreviousValues {
  id: ID_Output;
  name: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface ShipPreviousValuesPromise
  extends Promise<ShipPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface ShipPreviousValuesSubscription
  extends Promise<AsyncIterator<ShipPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ShipEdge {
  node: Ship;
  cursor: String;
}

export interface ShipEdgePromise extends Promise<ShipEdge>, Fragmentable {
  node: <T = ShipPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ShipEdgeSubscription
  extends Promise<AsyncIterator<ShipEdge>>,
    Fragmentable {
  node: <T = ShipSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Ship {
  id: ID_Output;
  name: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface ShipPromise extends Promise<Ship>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface ShipSubscription
  extends Promise<AsyncIterator<Ship>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ShipNullablePromise
  extends Promise<Ship | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
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

export interface PeopleEdge {
  node: People;
  cursor: String;
}

export interface PeopleEdgePromise extends Promise<PeopleEdge>, Fragmentable {
  node: <T = PeoplePromise>() => T;
  cursor: () => Promise<String>;
}

export interface PeopleEdgeSubscription
  extends Promise<AsyncIterator<PeopleEdge>>,
    Fragmentable {
  node: <T = PeopleSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface EventConnection {
  pageInfo: PageInfo;
  edges: EventEdge[];
}

export interface EventConnectionPromise
  extends Promise<EventConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<EventEdge>>() => T;
  aggregate: <T = AggregateEventPromise>() => T;
}

export interface EventConnectionSubscription
  extends Promise<AsyncIterator<EventConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<EventEdgeSubscription>>>() => T;
  aggregate: <T = AggregateEventSubscription>() => T;
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

export interface People {
  id: ID_Output;
  name: String;
  nation: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface PeoplePromise extends Promise<People>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  nation: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface PeopleSubscription
  extends Promise<AsyncIterator<People>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  nation: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface PeopleNullablePromise
  extends Promise<People | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  nation: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface EventPreviousValues {
  id: ID_Output;
  title: String;
  subtitle: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface EventPreviousValuesPromise
  extends Promise<EventPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  subtitle: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface EventPreviousValuesSubscription
  extends Promise<AsyncIterator<EventPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  subtitle: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface EventSubscriptionPayload {
  mutation: MutationType;
  node: Event;
  updatedFields: String[];
  previousValues: EventPreviousValues;
}

export interface EventSubscriptionPayloadPromise
  extends Promise<EventSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = EventPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = EventPreviousValuesPromise>() => T;
}

export interface EventSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EventSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = EventSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = EventPreviousValuesSubscription>() => T;
}

export interface PeoplePreviousValues {
  id: ID_Output;
  name: String;
  nation: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface PeoplePreviousValuesPromise
  extends Promise<PeoplePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  nation: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface PeoplePreviousValuesSubscription
  extends Promise<AsyncIterator<PeoplePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  nation: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface Event {
  id: ID_Output;
  title: String;
  subtitle: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface EventPromise extends Promise<Event>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  subtitle: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface EventSubscription
  extends Promise<AsyncIterator<Event>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  subtitle: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface EventNullablePromise
  extends Promise<Event | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  subtitle: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface AggregateShip {
  count: Int;
}

export interface AggregateShipPromise
  extends Promise<AggregateShip>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateShipSubscription
  extends Promise<AsyncIterator<AggregateShip>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ShipSubscriptionPayload {
  mutation: MutationType;
  node: Ship;
  updatedFields: String[];
  previousValues: ShipPreviousValues;
}

export interface ShipSubscriptionPayloadPromise
  extends Promise<ShipSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ShipPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ShipPreviousValuesPromise>() => T;
}

export interface ShipSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ShipSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ShipSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ShipPreviousValuesSubscription>() => T;
}

export interface PeopleConnection {
  pageInfo: PageInfo;
  edges: PeopleEdge[];
}

export interface PeopleConnectionPromise
  extends Promise<PeopleConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PeopleEdge>>() => T;
  aggregate: <T = AggregatePeoplePromise>() => T;
}

export interface PeopleConnectionSubscription
  extends Promise<AsyncIterator<PeopleConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PeopleEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePeopleSubscription>() => T;
}

export interface AggregatePeople {
  count: Int;
}

export interface AggregatePeoplePromise
  extends Promise<AggregatePeople>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePeopleSubscription
  extends Promise<AsyncIterator<AggregatePeople>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Ship",
    embedded: false
  },
  {
    name: "People",
    embedded: false
  },
  {
    name: "Event",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
