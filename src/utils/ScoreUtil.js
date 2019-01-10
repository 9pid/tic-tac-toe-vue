import { GAME_CONST } from '../consts/GameConst.js';

export function calculateWinner(spaces) {
  // 勝利条件
  const lines = [
    [GAME_CONST.SPACE.ONE, GAME_CONST.SPACE.TWO, GAME_CONST.SPACE.THREE],
    [GAME_CONST.SPACE.FOUR, GAME_CONST.SPACE.FIVE, GAME_CONST.SPACE.SIX],
    [GAME_CONST.SPACE.SEVEN, GAME_CONST.SPACE.EIGHT, GAME_CONST.SPACE.NINE],
    [GAME_CONST.SPACE.ONE, GAME_CONST.SPACE.FOUR, GAME_CONST.SPACE.SEVEN],
    [GAME_CONST.SPACE.TWO, GAME_CONST.SPACE.FIVE, GAME_CONST.SPACE.EIGHT],
    [GAME_CONST.SPACE.THREE, GAME_CONST.SPACE.SIX, GAME_CONST.SPACE.NINE],
    [GAME_CONST.SPACE.ONE, GAME_CONST.SPACE.FIVE, GAME_CONST.SPACE.NINE],
    [GAME_CONST.SPACE.THREE, GAME_CONST.SPACE.FIVE, GAME_CONST.SPACE.SEVEN]
  ];

  // 盤面チェック
  const result = lines.reduce((result, [a, b, c], i) => {
    // 既に勝利していればチェック終了
    if (result) return result;

    // チェック対象の印
    const value = spaces[a];

    // 値なしならスキップ
    if (value == null) return null;

    // 勝利していたら、勝利印を返す
    if (spaces[b] === value && spaces[c] === value) return value;
  }, null);

  return result;
}
