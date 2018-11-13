'use strict';
const test = require('tape');
const LineBreakParagraph = require('./');
const content1 = 'Lorem ipsum test me. Lorem ipsum more content.';
const content2 = 'Lorem ipsum Testing numeric content. My value is 9.9mm.';
const content3 = 'Lorem ipsum Testing no spaced conten.Do not seperate this line.';

test('Check if content returns as lines', function (t) {
  t.plan(3);
  t.equal(LineBreakParagraph(content1), 'Lorem ipsum test me.\nLorem ipsum more content.');
  t.equal(LineBreakParagraph(content2), 'Lorem ipsum Testing numeric content.\nMy value is 9.9mm.');
  t.equal(LineBreakParagraph(content3), 'Lorem ipsum Testing no spaced conten.Do not seperate this line.');
  t.end();
});
