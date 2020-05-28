import { log } from './log'

import img1 from '../images/06.jpg';
import img2 from '../images/webpack.png';

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
log('本节在测试配置噢');

console.log('FileSize 大于       limit --> ', img1);
console.log('FileSize 小于等于    limit --> ', img2);
