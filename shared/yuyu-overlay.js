/* Yuyu 등장 오버레이 (시리처럼 앱 밖 화면 위에 뜨는 대화창).
   아직 어디에서도 호출하지 않습니다. 필요할 때 아래처럼 불러 쓰세요.
   <script src="../shared/yuyu-overlay.js"></script>  (apps/ 안) 또는 "shared/yuyu-overlay.js" (index.html)
   YuyuOverlay.show(["첫 대사", "두 번째 대사"], () => { 끝난 뒤 실행 });
   YuyuOverlay.hide();
   대사 한 줄을 누르면 다음 줄로 넘어가고, 마지막 줄에서 닫힙니다. */
(function () {
  if (window.YuyuOverlay) return;
  const css = `
#yy-ov{position:absolute;inset:0;z-index:40;display:none;flex-direction:column;justify-content:flex-end;align-items:center;padding-bottom:calc(env(safe-area-inset-bottom,0px) + 150px);background:rgba(0,0,0,.25);font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","Apple SD Gothic Neo","Pretendard",sans-serif}
#yy-ov.on{display:flex}
#yy-bub{background:rgba(28,28,32,.92);color:#fff;border-radius:22px;padding:14px 18px;max-width:82%;font-size:16px;line-height:1.5;text-align:center;margin-bottom:16px;min-height:24px}
#yy-orb{width:64px;height:64px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#9fdcff 40%,#6a5cff 85%);box-shadow:0 0 24px #8fd0ff88}`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const ov = document.createElement('div');
  ov.id = 'yy-ov';
  ov.innerHTML = '<div id="yy-bub"></div><div id="yy-orb"></div>';
  const host = document.getElementById('phone') || document.body;
  host.appendChild(ov);

  let lines = [], idx = 0, done = null;
  const bub = ov.querySelector('#yy-bub');
  const render = () => { bub.textContent = lines[idx] || ''; };

  function hide() {
    ov.classList.remove('on');
    const cb = done; done = null; lines = []; idx = 0;
    if (cb) cb();
  }

  ov.addEventListener('click', () => {
    if (idx < lines.length - 1) { idx++; render(); }
    else hide();
  });

  window.YuyuOverlay = {
    show(list, onDone) {
      lines = Array.isArray(list) ? list.slice() : [String(list)];
      if (!lines.length) return;
      idx = 0; done = onDone || null;
      render();
      ov.classList.add('on');
    },
    hide,
  };
})();
