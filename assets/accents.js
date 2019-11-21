(function onload() {
  var distinctAccents = document.querySelectorAll('strong');
  for(var i = 0; i < distinctAccents.length; i++) {
    distinctAccents[i].innerHTML = distinctAccents[i].innerHTML
      // .replace(/[auıoe]/g, '<span class="t t8" data-content="$&">$&</span>')
      .replace(/[āūīōē]/g, '&#8288;<span class="t t1" data-content="$&">$&</span>&#8288;')
      .replace(/[áúíóé]/g, '&#8288;<span class="t t2" data-content="$&">$&</span>&#8288;')
      .replace(/[äüïöë]/g, '&#8288;<span class="t t3" data-content="$&">$&</span>&#8288;')
      .replace(/[ảủỉỏẻ]/g, '&#8288;<span class="t t4" data-content="$&">$&</span>&#8288;')
      .replace(/[âûîôê]/g, '&#8288;<span class="t t5" data-content="$&">$&</span>&#8288;')
      .replace(/[àùìòè]/g, '&#8288;<span class="t t6" data-content="$&">$&</span>&#8288;')
      .replace(/[ãũĩõẽ]/g, '&#8288;<span class="t t7" data-content="$&">$&</span>&#8288;');
  }
})();
