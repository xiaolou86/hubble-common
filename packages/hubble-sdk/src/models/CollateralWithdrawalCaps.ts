import Decimal from 'decimal.js';
import WithdrawalCaps from './WithdrawalCaps';

export type CollateralWithdrawalCaps = {
  token: number;
  tokenCap: WithdrawalCaps;
};

export default CollateralWithdrawalCaps;
