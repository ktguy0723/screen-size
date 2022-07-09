var width;
var height;
// ページ読み込み時の動作
window.addEventListener('load', function () {
    // ウィンドウの幅を取得
    width = document.documentElement.clientWidth;
    // 幅を画面に表示
    document.getElementById('width').innerText = width;
    // ウィンドウの高さを取得
    height = document.documentElement.clientHeight;
    // 高さを画面に表示
    document.getElementById('height').innerText = height;
}, false);

// ウィンドウのサイズ変更イベントの設定
window.addEventListener('resize', function () {
    // ウィンドウの幅を取得
    width = document.documentElement.clientWidth;
    // 幅を画面に表示
    document.getElementById('width').innerText = width;
    // ウィンドウの高さを取得
    height = document.documentElement.clientHeight;
    // 高さを画面に表示
    document.getElementById('height').innerText = height;
}, false);