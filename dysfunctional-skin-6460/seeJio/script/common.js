let myOtpForm = document.getElementById("myOtpForm");
let conti = document.getElementById("continue");

let text_back = document.getElementById("text-back");
let back2 = document.getElementById("back2");

let startShopping = document.getElementById("start-text");
let otp = document.getElementById("resend");

let phone = document.getElementById("text-line");
//console.log(phone)
let show_phone = document.getElementById("show_phone");
let enter_otp = document.getElementById("text-line2");

window.addEventListener("load", function () {
  openForm();
});

let otp_generate = "";
// let ResendBtn=document.getElementById("ResendBtn")
// ResendBtn.style.marginLeft="30px"

text_back.style.cursor = "pointer";
text_back.style.marginLeft = "10px";

back2.addEventListener("click", () => {
  window.location.href = "/index.html";
});

// conti.addEventListener("click",()=>{
//     document.getElementById("myForm").style.display=""
//     myOtpForm.style.display="block";
//    })

let back = document.getElementById("back");
back.addEventListener("click", () => {
  window.location.href = "/index.html";
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

////////otp functionality//////////
let span = document.getElementById("shopMe");

span.addEventListener("click", (e) => {
  e.preventDefault();
  if (enter_otp.value == otp_generate) {
    window.location.pathname = "/womenClothing.html";
  } else {
    document.getElementById("wrong-otp").innerHTML = `
          <p class="Btn" id="ResendBtn">
              <div style="margin-left:6px; font-size:15px;color:red ">Please enter a valid OTP</div>
          </p>
      `;
  }
});

///////////////continue /////////////////

let contFunc = conti.addEventListener("click", () => {
  //console.log(phone.value)
  if (phone.value.length == 10) {
    let interval = setInterval(() => {
      //document.getElementById("myForm").style.opacity="0.5"
      document.getElementById("myForm").style.display = "";
      myOtpForm.style.display = "block";
      show_phone.innerText = "+91" + " " + phone.value;
    }, 2000);

    otp_generate = Math.floor(Math.random() * (9999 - 1000) + 1000);
    console.log(otp_generate);
    countdown();
  } else {
    document.getElementById("show-no").innerHTML = `
          <p class="Bt" id="ResendBt">
              <div style="margin-left:6px; font-size:15px;color:red ">Please enter valid Mobile Number / Email.</div>
          </p>
      `;
  }
});

text_back.addEventListener("click", () => {
  myOtpForm.style.display = null;
  document.getElementById("myForm").style.display = "block";
  //clearInterval(interval)
  contFunc();
});
////////////////////Timer/////////////////

function countdown() {
  var seconds = 61;
  function tick() {
    // var counter = document.getElementById("counter");
    seconds--;
    otp.innerText =
      "Resend" +
      " " +
      "OTP" +
      " " +
      "in" +
      " " +
      (seconds < 10 ? "0" : "") +
      String(seconds) +
      "s";
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      document.getElementById("resend").innerHTML = `
          <div class="Btn" id="ResendBtn">
              <div style="margin-left:40px"; type="submit">Resend OTP</div>
          </div>
      `;
      //document.getElementById("counter").innerHTML = "";
    }
  }
  tick();
}

let buttonCont = document.querySelector("#continue>p");

buttonCont.marginLeft = "10px";
