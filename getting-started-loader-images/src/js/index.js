import { log } from './log'

import img1 from '../images/06.jpg';
import img2 from '../images/webpack.jpg';
import img3 from '../images/webpack.svg';

import '../css/style.css';

function installEvent() {
  const panels = document.querySelectorAll('.panel')

  function toggleOpen() {
    panels.forEach(item => {
      if (item === this) return;
      item.classList.remove('open')
    });

    this.classList.toggle('open');
  }

  function toggleActicon(e) {
    if (e.propertyName.includes('flex-grow')) {
      this.classList.toggle('open-active')
    }
  }

  // 给每个元素注册事件
  panels.forEach(panel => {
    panel.addEventListener('click', toggleOpen)
    panel.addEventListener('transitionend', toggleActicon)
  })
}

installEvent();
log('测试图片引入~');

console.log('img1 --> ', img1);
console.log('img2 --> ', img2);
console.log('img3 --> ', img3);
