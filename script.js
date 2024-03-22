function sendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    let otp_val = Math.floor(Math.random() * 10000);

    let emailbody = `<h2>Your OTP is </h2>${otp_val}`;
    Email.send({
        SecureToken : "6d09d222-085a-477d-9191-e99b904a6e87",
        To : email.value,
        From : "naveensinghmalik1998@gmail.com",
        Subject : "Email OTP using",
        Body : emailbody,
    }).then(

      message => {
           if (message === "OK") {
                alert("OTP sent to your email " +  email.value); 

                otpverify.style.display = "flex"; 
                const otp_inp = document.getElementById('otp_inp');
                const otp_btn = document.getElementById('otp_btn');
         
                otp_btn.addEventListener('click', () => {
                    if(otp_inp.value == otp_val) {
                        alert("Email address verfied...");
                    }
                     else{
                        alert("Invalid OTP");
                     }
            })
      }
    }
    );
}