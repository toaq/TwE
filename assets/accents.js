(function onload() {
  var distinctAccents = document.querySelectorAll('strong');
  for(var i = 0; i < distinctAccents.length; i++) {
    distinctAccents[i].innerHTML = distinctAccents[i].innerHTML
      // .replace(/[auıoey]/g, '<span class="t t8" data-content="$&">$&</span>')
      .replace(/[āūīōēȳ]/g, '&#8288;<span class="t t1" data-content="$&">$&</span>&#8288;')
      .replace(/[áúíóéý]/g, '&#8288;<span class="t t2" data-content="$&">$&</span>&#8288;')
      .replace(/[äüïöëÿ]/g, '&#8288;<span class="t t3" data-content="$&">$&</span>&#8288;')
      .replace(/[ảủỉỏẻỷ]/g, '&#8288;<span class="t t4" data-content="$&">$&</span>&#8288;')
      .replace(/[âûîôêŷ]/g, '&#8288;<span class="t t5" data-content="$&">$&</span>&#8288;')
      .replace(/[àùìòèỳ]/g, '&#8288;<span class="t t6" data-content="$&">$&</span>&#8288;')
      .replace(/[ãũĩõẽỹ]/g, '&#8288;<span class="t t7" data-content="$&">$&</span>&#8288;');
  }
})();
