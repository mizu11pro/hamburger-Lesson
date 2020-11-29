$(function () {
  $('.menu-trigger').on('click', function (event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});
// toggleClass()でclass属性を切り替える
// toggle処理→該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加される
// menu-triggerにはactiveは指定されていません
// なのでtoggleClass()を指定すると、アイコンがクリックされた時にactiveクラスが追加され、もう一度クリックすると削除できます

// .fadeToggle()でフェードイン・フェードアウトを切り替える
// このメソッドで、ハンバーガーメニューを開いた時の状態を設定します
// #sp-menuが開いた時に.fadeToggleが処理される