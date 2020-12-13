const books = [
  {
    title: '改訂新版JavaScript本格入門 ~モダンスタイルによる基礎から現場での応用まで',
    author: '山田 祥寛',
    isbn13: '978-4774184111'
  },
  {
    title: '初めてのJavaScript 第3版 ―ES2015以降の最新ウェブ開発',
    author: 'Ethan Brown (著), 武舎 広幸 (翻訳), 武舎 るみ (翻訳)',
    isbn13: '978-4873117836'
  },
  {
    title: 'スラスラ読める JavaScript ふりがなプログラミング (ふりがなプログラミングシリーズ)',
    author: 'リブロワークス  (著), 及川卓也  (監修)',
    isbn13: '978-4295003854'
  }
];

window.onload = () => {
  refresh();
};

function disp(index) {
  document.getElementById('book-title').innerHTML = books[index].title;
  document.getElementById('book-author').innerHTML = books[index].author;
  document.getElementById('book-isbn13').innerHTML = books[index].isbn13;
}

function remove(index) {
  books.splice(index, 1);
  
  refresh();
}

function add() {
  if(validate()) {
    const title = document.getElementById('input-title').value;
    const author = document.getElementById('input-author').value;
    const isbn13 = document.getElementById('input-isbn13').value;
    
    const book = {
      title: title,
      author: author,
      isbn13: isbn13
    };
    
    books.push(book);
    
    document.getElementById('input-title').value = '';
    document.getElementById('input-author').value = '';
    document.getElementById('input-isbn13').value = '';
    
    refresh();
  }
}

function refresh() {
  const ulElement = document.getElementById('book-list');
  ulElement.innerHTML = '';
  
  for(let index = 0; index < books.length; index++) {
    const newLiElement = document.createElement('li');
    newLiElement.innerHTML = `
                    <div class="d-flex">
                        <span class="book-title">
                            ${books[index].title}
                        </span>
                        <span onclick="remove(${index})"><i class="fas fa-trash"></i></span>
                    </div>
                `;
    newLiElement.setAttribute('onclick', 'disp(' + index + ')');
    
    ulElement.appendChild(newLiElement);
  }
  document.getElementById('add-button').disabled = true;
}

function validate() {
  document.getElementById('error-title').innerHTML = '';
  document.getElementById('error-author').innerHTML = '';
  
  const title = document.getElementById('input-title').value;
  const author = document.getElementById('input-author').value;
  const isbn13 = document.getElementById('input-isbn13').value;
  
  if(!title) {
    document.getElementById('error-title').innerHTML = 'タイトルが空です';
    document.getElementById('add-button').disabled = true;
    return false;
  }
  
  if(!author) {
    document.getElementById('error-author').innerHTML = '著者が空です';
    document.getElementById('add-button').disabled = true;
    return false;
  }
  document.getElementById('add-button').disabled = false;
  return true;
}
