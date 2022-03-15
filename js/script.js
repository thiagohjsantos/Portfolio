(function readyJS(win,doc){
  'use strict';

  const spans = document.querySelectorAll('h1 span')

  spans.forEach(span => span.addEventListener('mouseover', function(e){
    span.classList.add('animated', 'rubberBand')
  }));

  spans.forEach(span => span.addEventListener('mouseout', function(e){
    span.classList.remove('animated', 'rubberBand')
  }));

  const htmlBar = document.querySelector('.bar-html')
  const cssBar = document.querySelector('.bar-css')
  const jsBar = document.querySelector('.bar-javascript')
  const reactBar = document.querySelector('.bar-react')
  const pythonBar = document.querySelector('.bar-python')
  const xamarinBar = document.querySelector('.bar-xamarin')
  const netBar = document.querySelector('.bar-net')
  const sqlBar = document.querySelector('.bar-sql')
  const csharpBar = document.querySelector('.bar-csharp')
  const rpaBar = document.querySelector('.bar-rpa')
  const javaBar = document.querySelector('.bar-java')

  let header = doc.querySelector('header');
  let lastScrollTop = 0;

  var t1 = new TimelineLite()

  t1.fromTo(htmlBar, .75, {width: `calc(0% - 6px`,}, {width: `calc(70% - 6px)`, ease: Power4.easeOut})
  .fromTo(cssBar, .75, {width: `calc(0% - 6px`}, {width: `calc(45% - 6px)`, ease: Power4.easeOut})
  .fromTo(jsBar, .75, {width: `calc(0% - 6px`}, {width: `calc(45% - 6px)`, ease: Power4.easeOut})
  .fromTo(reactBar, .75, {width: `calc(0% - 6px`}, {width: `calc(60% - 6px)`, ease: Power4.easeOut})
  .fromTo(pythonBar, .75, {width: `calc(0% - 6px`}, {width: `calc(50% - 6px)`, ease: Power4.easeOut})
  .fromTo(rpaBar, .75, {width: `calc(0% - 6px`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})
  .fromTo(netBar, .75, {width: `calc(0% - 6px`}, {width: `calc(50% - 6px)`, ease: Power4.easeOut})
  .fromTo(sqlBar, .75, {width: `calc(0% - 6px`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})
  .fromTo(csharpBar, .75, {width: `calc(0% - 6px`}, {width: `calc(50% - 6px)`, ease: Power4.easeOut})
  .fromTo(javaBar, .75, {width: `calc(0% - 6px`}, {width: `calc(40% - 6px)`, ease: Power4.easeOut})
  .fromTo(xamarinBar, .75, {width: `calc(0% - 6px`}, {width: `calc(50% - 6px)`, ease: Power4.easeOut})

  const controller = new ScrollMagic.Controller()
  const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
  })
  .setTween(t1)
  .addTo(controller)

  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 0);
  });

  win.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || doc.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
      header.classList.add("remove");
    }
    else{
      header.classList.remove("remove");
    }

    lastScrollTop = scrollTop;
  });

  var current_rotation = 0;
  document.getElementById("Icon").addEventListener('click', function() {
    // update total rotation
    // if angle is positive, rotation happens clockwise. if negative, rotation happens anti-clockwise.
    current_rotation += 360;
      
    // rotate clockwise by 90 degrees
      
    document.getElementById("Icon").style.transform = 'rotate(' + current_rotation + 'deg)';  
    
  });

    $(window).load(function() {
    $(".se-pre-con").fadeOut(12000);;
    });

  var counter = 1;
    var myTimer = setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 7){
        counter = 1;
      }
  }, 6000);

  ScrollOut({
      targets: '.skills h1,.html,.slider,.contact form,.contact h1,.about-me-info,.about img'
  })

  var count = 1;
  const img1 = document.getElementById('stop')
  const img2 = document.getElementById('play')
  document.getElementById('playState').onclick = function() {
    count++;
    if(count == 2){
      clearInterval(myTimer);
      img1.style.display = 'none';
      img2.style.display = 'unset';
    }
    if(count == 3){
      // img.src = "img/stopButton.png";
      img1.style.display = 'unset';
      img2.style.display = 'none';
      count = 1;
      myTimer = setInterval(function(){
          document.getElementById('radio' + counter).checked = true;
          counter++;
          if(counter > 7){
            counter = 1;
          }
      }, 6000);
    }
  };

  class TextScramble {
      constructor(el) {
        this.el = el
        this.chars = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｸ' 
        this.update = this.update.bind(this)
      }
      setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || ''
          const to = newText[i] || ''
          const start = Math.floor(Math.random() * 40)
          const end = start + Math.floor(Math.random() * 40)
          this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
      }
      update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i]
          if (this.frame >= end) {
            complete++
            output += to
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar()
              this.queue[i].char = char
            }
            output += `<span class="dud">${char}</span>`
          } else {
            output += from
          }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
          this.resolve()
        } else {
          this.frameRequest = requestAnimationFrame(this.update)
          this.frame++
        }
      }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }

  class TextScramble2 {
      constructor(el) {
        this.el = el
        this.chars = 'XXX'  
        this.update = this.update.bind(this)
      }
      setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || ''
          const to = newText[i] || ''
          const start = Math.floor(Math.random() * 40)
          const end = start + Math.floor(Math.random() * 40)
          this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
      }
      update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i]
          if (this.frame >= end) {
            complete++
            output += to
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar()
              this.queue[i].char = char
            }
            output += `<span class="dud2">${char}</span>`
          } else {
            output += from
          }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
          this.resolve()
        } else {
          this.frameRequest = requestAnimationFrame(this.update)
          this.frame++
        }
      }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }

  class TextScramble3 {
      constructor(el) {
        this.el = el
        this.chars = '01' 
        this.update = this.update.bind(this)
      }
      setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || ''
          const to = newText[i] || ''
          const start = Math.floor(Math.random() * 40)
          const end = start + Math.floor(Math.random() * 40)
          this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
      }
      update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i]
          if (this.frame >= end) {
            complete++
            output += to
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar()
              this.queue[i].char = char
            }
            output += `<span class="dud2">${char}</span>`
          } else {
            output += from
          }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
          this.resolve()
        } else {
          this.frameRequest = requestAnimationFrame(this.update)
          this.frame++
        }
      }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
    
  const phrases = [
    'Olá,',
    'Me chamo Thiago',
    'Sou um...',
    'Desenvolvedor Full Stack Jr.'
  ]

  const phrases2 = [
    'Sobre mim_'
  ]
    
  const phrases3 = [
    'Projetos_'
  ]

  const el = document.querySelector('.text h1')
  const fx = new TextScramble(el)
    
  let coun = 0
  const next = () => {
    fx.setText(phrases[coun]).then(() => {
      setTimeout(next, 3000)
    })
    coun = (coun + 1) % phrases.length
  }

  next()

  const el2 = document.querySelector('.about h1')
  const fx2 = new TextScramble2(el2)

  let coun2 = 0
  const next2 = () => {
    fx2.setText(phrases2[coun2]).then(() => {
      setTimeout(next2, 3500)
    })
    coun2 = (coun2 + 1) % phrases2.length
  }

  next2()

  const el3 = document.querySelector('.work h1')
  const fx3 = new TextScramble3(el3)

  let coun3 = 0
  const next3 = () => {
    fx3.setText(phrases3[coun3]).then(() => {
      setTimeout(next3, 4000)
    })
    coun3 = (coun3 + 1) % phrases3.length
  }

  next3()

})(window,document);