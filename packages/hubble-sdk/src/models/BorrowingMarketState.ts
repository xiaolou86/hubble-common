import { PublicKey } from '@solana/web3.js';
import CollateralAmounts from './CollateralAmounts';
import Decimal from 'decimal.js';
import SupportedCollateral from './SupportedCollateral';
import CollateralWithdrawalCaps from './CollateralWithdrawalCaps';
import WithdrawalCaps from './WithdrawalCaps';

export type BorrowingMarketState = {
  version: number;
  initialMarketOwner: PublicKey;
  redemptionsQueue: PublicKey;
  redemption_candidates_queue: PublicKey;
  stablecoinMint: PublicKey;
  stablecoinMintAuthority: PublicKey;
  stablecoinMintSeed: number;
  hbbMint: PublicKey;
  hbbMintAuthority: PublicKey;
  hbbMintSeed: number;
  numUsers: Decimal;
  numActiveUsers: Decimal;
  stablecoinBorrowed: Decimal;
  depositedCollateral: { amounts: Decimal[] };
  inactiveCollateral: { amounts: Decimal[] };
  baseRateBps: number;
  lastFeeEvent: Decimal;
  redistributedStablecoin: Decimal;
  totalStake: Decimal;
  collateralRewardPerToken: CollateralAmounts;
  stablecoinRewardPerToken: Decimal;
  totalStakeSnapshot: Decimal;
  borrowedStablecoinSnapshot: Decimal;
  supportedCollaterals: SupportedCollateral[];
  marketMcr: Decimal;
  withdrawalCap: WithdrawalCaps;
  withdrawalCapsCollateral: CollateralWithdrawalCaps[];
};

export default BorrowingMarketState;
