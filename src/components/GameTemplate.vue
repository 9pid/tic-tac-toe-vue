<div class="game">
  <div class="game-board">
    <Board :on-click="onClick"></Board>
  </div>
  <div class="game-info">
    <div class="status">
      {{ message }}
    </div>
    <ol>
      <li v-for="turn in turns">
        ボタン
      </li>
    </ol>
  </div>
</div>
