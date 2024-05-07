document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
});

//ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.c-hamburger');
  const headNav = document.querySelector('#js-nav');

  hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains("is-active")) {
      hamburger.classList.remove('is-active');
      hamburger.querySelector('.c-hamburger__text').textContent = 'MENU';
      headNav.classList.remove('is-active')
    } else {
      hamburger.classList.add('is-active');
      hamburger.querySelector('.c-hamburger__text').textContent = 'CLOSE';
      headNav.classList.add('is-active')
    }
  });


  headNav.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    hamburger.querySelector('.c-hamburger__text').textContent = 'MENU';
    headNav.classList.remove('is-active')
  });

});

$('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});