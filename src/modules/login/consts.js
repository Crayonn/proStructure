import { asyncEffectConsts } from 'utils/redux_utils';

export const nameSapce = 'login';

export const VALUE_CHANGED = `${nameSapce}/VALUE_CHANGED`;
export const LOGIN_REQUEST = asyncEffectConsts(`${nameSapce}/LOGIN_REQUEST`);
export const LOGOUT_REQUEST = asyncEffectConsts(`${nameSapce}/LOGOUT_REQUEST`);