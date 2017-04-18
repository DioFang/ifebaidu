window.onload = function() {
  document.getElementById('reg-phone').innerText = /1[3578]\d{9}/;
  document.getElementById('reg-word').innerText = /\b([A-Za-z]+)\s+\1\b/;
}

function verifyPhone() {
  var phoneStr = document.getElementById('phone').value,
    btn_phone = document.getElementById('btn-phone'),
    reg_phone = document.getElementById('reg-phone'),
    re1 = /1[3578]\d{9}/; // 手机号码正则表达式

  alert(re1.test(phoneStr) ? '匹配成功' : '匹配不成功');
}

function verifyWord() {
  var wordStr = document.getElementById('word').value,
    btn_word = document.getElementById('btn-word'),
    reg_word = document.getElementById('reg-word'),
    re2 = /\b([A-Za-z]+)\s+\1\b/; // 单词字符串表达式

  alert(re2.test(wordStr) ? '匹配成功' : '匹配不成功');
}