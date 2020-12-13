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

$(() => {
  refresh();
});

function disp(index) {
  $('#book-title').html(books[index].title);
  $('#book-author').html(books[index].author);
  $('#book-isbn13').html(books[index].isbn13);
}

function remove(index) {
  books.splice(index, 1);
  
  refresh();
}

function add() {
  if(validate()) {
    const title = $('#input-title').val();
    const author = $('#input-author').val();
    const isbn13 = $('#input-isbn13').val();
    
    const book = {
      title: title,
      author: author,
      isbn13: isbn13
    };
    
    books.push(book);
    
    $('#input-title').val('');
    $('#input-author').val('');
    $('#input-isbn13').val('');
    
    refresh();
  }
}

function refresh() {
  const ulElement = $('#book-list');
  ulElement.html('');
  
  for(let index = 0; index < books.length; index++) {
    const newLiElement = $('<li>');
    newLiElement.html(`
                    <div class="d-flex">
                        <span class="book-title">
                            ${books[index].title}
                        </span>
                        <span onclick="remove(${index})"><i class="fas fa-trash"></i></span>
                    </div>
                `);
    newLiElement.attr('onclick', 'disp(' + index + ')');
    
    ulElement.append(newLiElement);
  }
  $('add-button').attr('disabled', true);
}

function validate() {
  $('#error-title').html('');
  $('#error-author').html('');
  
  const title = $('#input-title').val();
  const author = $('#input-author').val();
  const isbn13 = $('#input-isbn13').val();
  
  if(!title) {
    $('#error-title').html('タイトルが空です');
    $('#add-button').attr('disabled', true);
    return false;
  }
  
  if(!author) {
    $('#error-author').html('著者が空です');
    $('#add-button').attr('disabled', true);
    return false;
  }
  $('#add-button').attr('disabled', false);
  return true;
}
