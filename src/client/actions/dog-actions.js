// @flow
import { createAction } from 'redux-actions';

// アクションタイプの定義
export const MAKE_BARK = 'MAKE_BARK';
// action creatorアクションのトリガー関数を定義
export const makeBark = createAction(MAKE_BARK, () => true);
