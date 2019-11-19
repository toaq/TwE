(function onload() {
  var distinctAccents = document.querySelectorAll('strong');
  for(var i = 0; i < distinctAccents.length; i++) {
    distinctAccents[i].innerHTML = distinctAccents[i].innerHTML
      // .replace(/[auıoe]/g, '<span class="t t8" data-content="$&">$&</span>')
      .replace(/[āūīōē]/g, '<span class="t t1" data-content="$&">$&</span>')
      .replace(/[áúíóé]/g, '<span class="t t2" data-content="$&">$&</span>')
      .replace(/[äüïöë]/g, '<span class="t t3" data-content="$&">$&</span>')
      .replace(/[ảủỉỏẻ]/g, '<span class="t t4" data-content="$&">$&</span>')
      .replace(/[âûîôê]/g, '<span class="t t5" data-content="$&">$&</span>')
      .replace(/[àùìòè]/g, '<span class="t t6" data-content="$&">$&</span>')
      .replace(/[ãũĩõẽ]/g, '<span class="t t7" data-content="$&">$&</span>');
  }
})();
