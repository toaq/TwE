function accentify(element) {
  if(element.nodeType == Node.TEXT_NODE) {
    var words = element.data.split(/ /);
    var replacement = document.createElement('span');
    for(var i = 0; i < words.length; i++) {
      var toa = document.createElement('span');
      toa.className = 'toa';
      toa.innerHTML = words[i]
     // .replace(/[auıoey]/g, '<span class="t t8" data-content="$&">$&</span>')
        .replace(/[āūīōēȳ]/g, '<span class="t t1" data-content="$&">$&</span>')
        .replace(/[áúíóéý]/g, '<span class="t t2" data-content="$&">$&</span>')
        .replace(/[äüïöëÿ]/g, '<span class="t t3" data-content="$&">$&</span>')
        .replace(/[ảủỉỏẻỷ]/g, '<span class="t t4" data-content="$&">$&</span>')
        .replace(/[âûîôêŷ]/g, '<span class="t t5" data-content="$&">$&</span>')
        .replace(/[àùìòèỳ]/g, '<span class="t t6" data-content="$&">$&</span>')
        .replace(/[ãũĩõẽỹ]/g, '<span class="t t7" data-content="$&">$&</span>');
      if(i > 0) {
        replacement.appendChild(document.createTextNode(' '));
      }
      replacement.appendChild(toa);
    }
    element.parentNode.replaceChild(replacement, element);
  } else {
    for(var i = 0; i < element.childNodes.length; i++) {
      accentify(element.childNodes[i]);
    }
  }
}

var distinctAccents = document.querySelectorAll('strong');
for(var i = 0; i < distinctAccents.length; i++) {
  accentify(distinctAccents[i]);
}
