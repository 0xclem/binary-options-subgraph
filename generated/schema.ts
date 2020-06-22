// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Market extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Market entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Market entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Market", id.toString(), this);
  }

  static load(id: string): Market | null {
    return store.get("Market", id) as Market | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get currencyKey(): Bytes {
    let value = this.get("currencyKey");
    return value.toBytes();
  }

  set currencyKey(value: Bytes) {
    this.set("currencyKey", Value.fromBytes(value));
  }

  get strikePrice(): BigInt {
    let value = this.get("strikePrice");
    return value.toBigInt();
  }

  set strikePrice(value: BigInt) {
    this.set("strikePrice", Value.fromBigInt(value));
  }

  get biddingEndDate(): BigInt {
    let value = this.get("biddingEndDate");
    return value.toBigInt();
  }

  set biddingEndDate(value: BigInt) {
    this.set("biddingEndDate", Value.fromBigInt(value));
  }

  get maturityDate(): BigInt {
    let value = this.get("maturityDate");
    return value.toBigInt();
  }

  set maturityDate(value: BigInt) {
    this.set("maturityDate", Value.fromBigInt(value));
  }

  get expiryDate(): BigInt {
    let value = this.get("expiryDate");
    return value.toBigInt();
  }

  set expiryDate(value: BigInt) {
    this.set("expiryDate", Value.fromBigInt(value));
  }

  get isOpen(): boolean {
    let value = this.get("isOpen");
    return value.toBoolean();
  }

  set isOpen(value: boolean) {
    this.set("isOpen", Value.fromBoolean(value));
  }

  get prices(): Array<BigInt> | null {
    let value = this.get("prices");
    if (value === null) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set prices(value: Array<BigInt> | null) {
    if (value === null) {
      this.unset("prices");
    } else {
      this.set("prices", Value.fromBigIntArray(value as Array<BigInt>));
    }
  }

  get poolSize(): BigInt | null {
    let value = this.get("poolSize");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set poolSize(value: BigInt | null) {
    if (value === null) {
      this.unset("poolSize");
    } else {
      this.set("poolSize", Value.fromBigInt(value as BigInt));
    }
  }
}

export class OptionTransaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OptionTransaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OptionTransaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OptionTransaction", id.toString(), this);
  }

  static load(id: string): OptionTransaction | null {
    return store.get("OptionTransaction", id) as OptionTransaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get type(): string {
    let value = this.get("type");
    return value.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get currencyKey(): Bytes {
    let value = this.get("currencyKey");
    return value.toBytes();
  }

  set currencyKey(value: Bytes) {
    this.set("currencyKey", Value.fromBytes(value));
  }

  get side(): BigInt {
    let value = this.get("side");
    return value.toBigInt();
  }

  set side(value: BigInt) {
    this.set("side", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get market(): Bytes {
    let value = this.get("market");
    return value.toBytes();
  }

  set market(value: Bytes) {
    this.set("market", Value.fromBytes(value));
  }
}