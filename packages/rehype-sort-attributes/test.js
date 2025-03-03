'use strict'

/* eslint-disable import/no-extraneous-dependencies */
var test = require('tape')
var rehype = require('rehype')
/* eslint-enable import/no-extraneous-dependencies */

var min = require('.')

test('rehype-sort-attributes', function(t) {
  t.equal(
    rehype()
      .use(min)
      .use({settings: {fragment: true}})
      .processSync(
        [
          '<a id="alpha" class="bravo" href="#charlie"></a>',
          '<a class="delta echo" href="#foxtrot"></a>',
          '<a hidden class="golf" href="#hotel"></a>',
          '<a title="india" hidden href="#juliett"></a>',
          '<img srcset="kilo.jpg" src="lima.jpg"></a>'
        ].join('\n')
      )
      .toString(),
    [
      '<a href="#charlie" class="bravo" id="alpha"></a>',
      '<a href="#foxtrot" class="delta echo"></a>',
      '<a href="#hotel" class="golf" hidden></a>',
      '<a href="#juliett" hidden title="india"></a>',
      '<img src="lima.jpg" srcset="kilo.jpg">'
    ].join('\n')
  )

  t.end()
})
