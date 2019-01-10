<div class="game">
  <div class="game-board">
    <Board :spaces="currentSpaces"
           :on-click="onClickSpace"></Board>
  </div>
  <div class="game-info">
    <div class="status">
      {{ message }}
    </div>
    <ol>
      <li v-for="(_, turn) in history">
        <MoveButton :turn-number="turn"
                    :on-click="onClickMoveButton"></MoveButton>
      </li>
    </ol>
  </div>
</div>
