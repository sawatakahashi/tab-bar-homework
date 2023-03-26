(() => {
  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll("[data-nav]");
  const $content = $tab.querySelectorAll("[data-content]");
  const ACTIVE_CLASS = "is_active";
  const navLength = $nav.length;

  //初期化
  const init = () => {
    $content[0].style.display = "block";
  };
  init();

  //クリックしたら起こるイベント
  const handleClick = (e) => {
    e.preventDefault();
    //$thisはクリックされた要素を指摘する
    const $this = e.target;
    const targetValue = $this.dataset.nav;

    //対象外のnav, content 全てを一旦リセットする
    let index = 0;
    while (index < navLength) {
      $content[index].style.display = "none";
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    //対象のコンテンツをアクティブ化
    $tab.querySelectorAll(
      '[data-content="' + targetValue + '"]'
    )[0].style.display = "block";
    $nav[targetValue].classList.add(ACTIVE_CLASS);
  };

  //全nav要素に対して関数を適応・発火
  let index = 0;
  while (index < navLength) {
    $nav[index].addEventListener("click", (e) => handleClick(e));
    index++;
  }
})();
