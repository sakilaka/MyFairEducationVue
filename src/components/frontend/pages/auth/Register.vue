<template>
    <div style="margin-top: 150px;">
        <div class="container mx-auto">
            <div class="screen">
                <div class="screen__content">
					<p style="margin-left: 30px; margin-top: 50px;" class="fw-bold">Register as <router-link to="/partner-register">Partner</router-link></p>

                    <form class="login">
                        <p class="fw-bold fs-4">Student Sign Up</p>
                        <div class="row">
                            <div class="login__field col-md-6 col-sm-12 col-lg-6">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" class="login__input" placeholder="Full name">
                            </div>
                            <div class="login__field col-md-6 col-sm-12 col-lg-6">
                                <i class="login__icon fas fa-phone"></i>
                                <input type="text" class="login__input" placeholder="Phone Number">
                            </div>
                            <div class="login__field col-md-6 col-sm-12 col-lg-6">
                                <i class="login__icon fas fa-email"></i>
                                <input type="email" class="login__input" placeholder="Email Address">
                            </div>
                            <div class="login__field col-md-6 col-sm-12 col-lg-6">
                                <i class="login__icon fas fa-phone"></i>
                                <!-- <input type="text" class="login__input" placeholder="Gender"> -->
                                <select class="login__input" name="" id="">
                                <option value="">Choose Gender</option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                                <option value="">Other</option>
                                </select>
                            </div>
                            <div class="login__field col-md-6 col-sm-12 col-lg-6">
                                <i class="login__icon fas fa-phone"></i>
                                <!-- <input type="text" class="login__input" placeholder="Gender"> -->
                                <select class="login__input" name="" id="">
                                <option value="">Choose Language</option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                                <option value="">Other</option>
                                </select>
                            </div>
                            <div class="login__field col-md-6 col-sm-12 col-lg-6">
                                <i class="login__icon fas fa-phone"></i>
                                <!-- <input type="text" class="login__input" placeholder="Gender"> -->
                                <select class="login__input" name="" id="">
                                <option value="">Choose continent</option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                                <option value="">Other</option>
                                </select>
                            </div>
                            <div class="login__field col-md-6 col-sm-12 col-lg-6">
                                <i class="login__icon fas fa-phone"></i>
                                <!-- <input type="text" class="login__input" placeholder="Gender"> -->
                                <select class="login__input" name="" id="">
                                <option value="">Choose Country</option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                                <option value="">Other</option>
                                </select>
                            </div>
                            <div class="login__field col-md-6 col-sm-12 col-lg-6">
                                <i class="login__icon fas fa-phone"></i>
                                <input type="text" class="login__input" placeholder="Qualification">
                            </div>
                            <div class="login__field col-md-6 col-sm-12 col-lg-6">
                                <i class="login__icon fas fa-phone"></i>
                                <input type="text" class="login__input" placeholder="Experience">
                            </div>
                            <div class="login__field col-md-6 col-sm-12 col-lg-6">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" class="login__input" placeholder="Password">
                            </div>
                            <div class="login__field col-md-6 col-sm-12 col-lg-6">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" class="login__input" placeholder="Confirm Password">
                            </div>
                        </div>
                        <button class="button login__submit">
                            <span class="button__text">Register Now</span>
                            <i class="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                    <div class="text-center fw-bold">
						<p>Already have an account? <router-link to="/login" class="text-white">SignIn</router-link> </p>
					</div>
                   
                </div>
                <div class="screen__background">
                    <span class="screen__background__shape screen__background__shape4"></span>
                    <span class="screen__background__shape screen__background__shape3"></span>
                    <span class="screen__background__shape screen__background__shape2"></span>
                    <span class="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Raleway, sans-serif;
}

@media (max-width: 1100px) {
    .screen{
        width: 350px !important;
        height: 1250px !important;
    }
    .login__input{
        width: 300px !important;
    }
}



.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.screen {
    background: linear-gradient(90deg, #824fa3, #c183ea);
    position: relative;
    height: 800px;
    /* height: 800px; */
    width: 700px;
    /* box-shadow: 0px 0px 24px #824fa3; */
    border: 0.5px solid #824fa3;
    border-radius: 10px;
}

.screen__content {
    z-index: 1;
    position: relative;
    height: 100%;
}

.screen__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);
}

.screen__background__shape {
    transform: rotate(45deg);
    position: absolute;
}

.screen__background__shape1 {
    height: 855px;
    width: 657px;
    background: #FFF;
    top: -130px;
    right: 120px;
    border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
    height: 220px;
    width: 220px;
    background: #824fa3;
    top: -172px;
    right: 0;
    border-radius: 32px;
}

.screen__background__shape3 {
    height: 540px;
    width: 190px;
    background: linear-gradient(270deg, #5D54A4, #6A679E);
    top: -24px;
    right: 0;
    border-radius: 32px;
}

.screen__background__shape4 {
    height: 450px;
    width: 200px;
    background: #824fa3;
    top: 420px;
    right: 50px;
    border-radius: 60px;
}

.login {
    width: 620px;
    padding: 30px;
    /* padding-top: 156px; */
}

.login__field {
    padding: 20px 0px;
    position: relative;
}

.login__icon {
    position: absolute;
    top: 30px;
    color: #824fa3;
}

.login__input {
    border: none;
    border-bottom: 2px solid #D1D1D4;
    background: none;
    padding: 10px;
    padding-left: 24px;
    font-weight: 700;
    width: 75%;
    transition: .2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
    outline: none;
    border-bottom-color: #6A679E;
}

.login__submit {
	/* background: #fff;
	font-size: 14px;
	margin-top: 30px;
	padding: 16px 20px;
	border-radius: 26px;
	border: 1px solid #D4D3E8;
	text-transform: uppercase;
	font-weight: 700;
	display: flex;
	align-items: center;
	width: 100%;
	color: #824fa3;
	box-shadow: 0px 2px 2px #623580;
	cursor: pointer;
	transition: .2s; */
	background: #824fa3;
    border: none;
    color: white;
    padding: 13px 40px;
    cursor: pointer;
    border-radius: 2px;
}



.login__submit:hover {
    background: #a466cd;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
    border-color: #a565cf;
    outline: none;
}

.button__icon {
	font-size: 15px;
    margin-left: 30px;
}

.social-login {
    position: absolute;
    height: 140px;
    width: 160px;
    text-align: center;
    bottom: 0px;
    right: 0px;
    color: #fff;
}

.social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
}

.social-login__icon {
    padding: 20px 10px;
    color: #fff;
    text-decoration: none;
    text-shadow: 0px 0px 8px #7875B5;
}

.social-login__icon:hover {
    transform: scale(1.5);
}
</style>