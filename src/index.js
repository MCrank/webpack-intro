import $ from 'jquery';
import 'bootstrap';
import './index.scss';

console.log('Booya!');

$('#click-button').on('click', () => {
  $('#output').append('<p>Hello Cruel World</p>');
});
