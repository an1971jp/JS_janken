'use strict';

{
  const enemy = document.getElementById('enemy');
  const result = document.getElementById('result');

  let selectedItem; // 自分が選んだ手 0:グー、1:チョキ、2:パー
  let enemyItem;  // 相手が選んだ手 0:グー、1:チョキ、2:パー

  function choiceEnemy() {
    enemyItem = Math.floor(Math.random() * 3);

    /*
    console.log(selectedItem);
    console.log(enemyItem);
    */

    switch(enemyItem) {
      case 0:
        enemy.textContent = 'グー';
        break;
      case 1:
        enemy.textContent = 'チョキ';
        break;
      case 2:
        enemy.textContent = 'パー';
        break;
    }
  }

  // 勝ち負け判定
  function checkResult() {
    switch(selectedItem) {
      case 0:
        switch(enemyItem) {
          case 0:
            result.textContent = 'あいこ！';
            break;
          case 1:
            result.textContent = '勝ち！';
            break;
          case 2:
            result.textContent = '負け！';
            break;
        }
        break;
      case 1:
        switch(enemyItem) {
          case 0:
            result.textContent = '負け！';
            break;
          case 1:
            result.textContent = 'あいこ！';
            break;
          case 2:
            result.textContent = '勝ち！';
            break;
        }
        break;
      case 2:
        switch(enemyItem) {
          case 0:
            result.textContent = '勝ち！';
            break;
          case 1:
            result.textContent = '負け！';
            break;
          case 2:
            result.textContent = 'あいこ！';
            break;
        }
        break;
    }
  }

  /*
  const choice = document.getElementsByClassName('choice');
  choice.addEventListener('click', (e) => {
    console.log('Clicked!');
  });
  */

  const gu = document.getElementById('gu');
  gu.addEventListener('click', (e) => {
    selectedItem = 0;

    choiceEnemy();
    checkResult();
  
  });

  const choki = document.getElementById('choki');
  choki.addEventListener('click', () => {
    selectedItem = 1;

    choiceEnemy();
    checkResult();
  
  });

  const pa = document.getElementById('pa');
  pa.addEventListener('click', () => {
    selectedItem = 2;

    choiceEnemy();
    checkResult();
  
  });

  const replay = document.getElementById('replay');
  replay.addEventListener('click', () => {
    location.reload(true);
  });

  /*
  const choki = document.getElementById('choki');
  choki.addEventListener('click', () => {
    selectedItem = 1;
  });

  const pa = document.getElementById('pa');
  pa.addEventListener('click', () => {
    selectedItem = 2;
  });

  choiceEnemy();
  checkResult();
  */

}