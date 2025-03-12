let gameSeq = [];
      let userSeq = [];

      let btns = ["yellow", "red", "purple", "green"];

      let started = false;
      let level = 0;

      let h2 = document.querySelector("h2");

      document.addEventListener("keypress", function () {
        if (!started) {
          console.log("Game is Started");
          started = true;
          levelup();
        }
      });

      function gameFlash(btn) {
        btn.classList.add("flash");
        setTimeout(function () {
          btn.classList.remove("flash");
        }, 400);
      }

      function userFlash(btn) {
        btn.classList.add("userflash");
        setTimeout(function () {
          btn.classList.remove("userflash");
        }, 400);
      }

      function levelup() {
        level++;
        h2.innerText = `Level ${level}`;

        let randIdx = Math.floor(Math.random() * 4);
        let randcolor = btns[randIdx];
        let randBtn = document.querySelector(`.${randcolor}`);

        gameSeq.push(randcolor);
        console.log(gameSeq);
        gameFlash(randBtn);
      }

      function checkedAns(idx) {
        if (userSeq[idx] === gameSeq[idx]) {
          console.log("Same value");
          if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000);
            userSeq = [];
          }
        } else {
          h2.innerHTML = `Game Over! Your Score was<b>${level}<b/> press any key to Start.`;
          document.querySelector("body").style.backgroundcolor="red";
          setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
          },150);
          reset();
        }
      }

      function btnPress() {
        console.log(this);
        let btn = this;
        userFlash(btn);

        let userColor = btn.getAttribute("id");
        userSeq.push(userColor);

        checkedAns(userSeq.length - 1);
      }

      let allBtns = document.querySelectorAll(".btn");
      for (let btn of allBtns) {
        btn.addEventListener("click", btnPress);
      }

      function reset() {
        started = false;
        gameSeq = [];
        userSeq = [];
        level = 0;
      }