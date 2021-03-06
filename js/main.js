'use strict';


// 低難易度の変数
const text = document.getElementById('text');
const btn = document.getElementById('submit-btn');
const ul = document.querySelector('ul');

// 中難易度の変数
const text2 = document.getElementById('text2');
const btn2 = document.getElementById('submit-btn2');
const ul2 = document.getElementById('content');

// 高難易度の変数
const text3 = document.getElementById('text3');
const btn3 = document.getElementById('submit-btn3');
const ul3 = document.getElementById('contents');

// 関数 リストに追加 削除処理
function listApp(button, listChild, list) {
  
  button.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem(localStorage.length, listChild.value);
    if (listChild.value === '') {
      return;
    }
    const li = document.createElement('li');
    li.textContent = listChild.value;
    list.appendChild(li);
    listChild.value = '';
    listChild.focus();
    
    const end = document.createElement('button');
    end.textContent = '削除';
    li.appendChild(end);
    end.addEventListener('click', (e) => {
      e.preventDefault();
    const li = end.closest('li');
    if (confirm('削除しますか？')) {
      li.remove();
    }
  });
});
}


// 低難易度のイベント（関数呼び出し）
listApp(btn, text, ul);

// 中難易度のイベント（関数呼び出し）
listApp(btn2, text2, ul2);

// 高難易度のイベント（関数呼び出し）
listApp(btn3, text3, ul3);

// localStorage.clear();

for (let i = 0; i < localStorage.length; i++) {
  const li = document.createElement('li');
  li.textContent = localStorage.getItem(i);
  ul.appendChild(li);
  
  
  const end = document.createElement('button');
  end.textContent = '削除';
  li.appendChild(end);
  end.addEventListener('click', (e) => {
    e.preventDefault();
    const lin = end.closest('li');

    let index = [].slice.call( document.querySelectorAll('li') ).indexOf( lin );

    if (confirm('削除しますか？')) {
      localStorage.removeItem(index);
      lin.remove();
      end.remove();
    }
  });


}

