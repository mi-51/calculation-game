let q_number;
let correct = 0;
let question;
let answer;

window.onload = function () {
  let input_box = document.getElementById("input_box");
  let reset_button = document.getElementById('reload');

  input_box.onchange = function () {
    let input_num = parseInt(input_box.value);
    let message;
    if (isNaN(input_num)) {
      message = "半角整数を入力してください";
    } else {
      if (input_num === answer) {
        correct += 1;
        message = "正解です！";
      } else {
        message = "不正解です。 " + question + answer + "です。";
      }

      q_number += 1;
      create_question();
    }

    document.getElementById("judge").innerHTML = message;

    input_box.value = "";

    let correct_rate;
    if (q_number === 0) {
      correct_rate = 0;
    } else {
      correct_rate = Math.floor(correct / q_number * 100);
    }

    document.getElementById("correct_rate").innerHTML = q_number + "問中" + correct + "問正解 正答率は" + correct_rate + "％です";
  }

  reset_button.onclick = reset_process;

  reset_process();
}

function reset_process() {
  q_number = 0;
  answer = 0;
  document.getElementById('correct_rate').innerHTML = "";
  document.getElementById('question').innerHTML = "";
  document.getElementById('judge').innerHTML = "";
  document.getElementById('input_box').value = "";
  create_question();
}

function dice(max_num) {
  return Math.floor(Math.random() * max_num) + 1;
}

function create_question() {
  let x = dice(100);
  let y = dice(100);
  let cal_type = dice(2);
  if (cal_type === 1) {
    answer = x + y;
    question = x + "＋" + y + "＝";
  } else {
    if (x > y) {
      answer = x - y;
      question = x + "ー" + y + "＝";
    } else {
      answer = y - x;
      question = y + "ー" + x + "＝";
    }
  }
  document.getElementById("question").innerHTML = question;
}

//リセットボタン
// let reload = document.getElementById('reload');
// reload.addEventListener('click', function () {
//   window.location.reload();
// });