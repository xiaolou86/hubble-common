import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface KaminoPriceFields {
  value: BN
  exp: BN
}

export interface KaminoPriceJSON {
  value: string
  exp: string
}

export class KaminoPrice {
  readonly value: BN
  readonly exp: BN

  constructor(fields: KaminoPriceFields) {
    this.value = fields.value
    this.exp = fields.exp
  }

  static layout(property?: string) {
    return borsh.struct([borsh.u64("value"), borsh.u64("exp")], property)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new KaminoPrice({
      value: obj.value,
      exp: obj.exp,
    })
  }

  static toEncodable(fields: KaminoPriceFields) {
    return {
      value: fields.value,
      exp: fields.exp,
    }
  }

  toJSON(): KaminoPriceJSON {
    return {
      value: this.value.toString(),
      exp: this.exp.toString(),
    }
  }

  static fromJSON(obj: KaminoPriceJSON): KaminoPrice {
    return new KaminoPrice({
      value: new BN(obj.value),
      exp: new BN(obj.exp),
    })
  }

  toEncodable() {
    return KaminoPrice.toEncodable(this)
  }
}
