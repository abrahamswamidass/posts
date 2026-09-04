/* Sprint shared behaviour: copy-to-clipboard for prompt cards. */
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.copy-btn');
  if (!btn) return;
  var card = btn.closest('.prompt');
  var body = card && card.querySelector('.prompt-body');
  if (!body) return;
  var text = body.innerText;
  var done = function () {
    var original = btn.getAttribute('data-label') || 'Copy';
    btn.textContent = 'Copied';
    btn.classList.add('copied');
    setTimeout(function () {
      btn.textContent = original;
      btn.classList.remove('copied');
    }, 1600);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, done);
  } else {
    var ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (err) {}
    document.body.removeChild(ta); done();
  }
});
