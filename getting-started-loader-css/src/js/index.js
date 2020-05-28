import { log } from './log'
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
