<template>
    <footer class="footer-04" style="margin-top: 80px;">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
                    <!-- <h2 class="footer-heading"><a href="#" class="logo">Colorlib</a></h2> -->
                    <img class="logo" :src="logo" alt="">
                    <p class="my-4" style="width: 217px;">A small river named Duden flows by their place and supplies it with the necessary
                        regelialia.</p>
                    <!-- <a href="#">read more <span class="ion-ios-arrow-round-forward"></span></a> -->
                    <ul class="ftco-footer-social p-0 mt-2">
                        <li class="ftco-animate">
                            <i class="fa-brands fa-facebook-f"></i>
                        </li>
                        <li class="ftco-animate">
                            <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li class="ftco-animate">
                            <i class="fa-brands fa-instagram"></i>
                        </li>
                        <li class="ftco-animate">
                            <i class="fa-brands fa-linkedin"></i>
                        </li>
                    </ul>
                </div>

                <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
                    <h2 class="footer-heading">Categories</h2>
                    <ul class="list-unstyled">
                        <li><a href="#" class="py-1 d-block">Buy &amp; Sell</a></li>
                        <li><a href="#" class="py-1 d-block">Merchant</a></li>
                        <li><a href="#" class="py-1 d-block">Giving back</a></li>
                        <li><a href="#" class="py-1 d-block">Help &amp; Support</a></li>
                    </ul>
                </div>

                <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
                    <h2 class="footer-heading">Categories</h2>
                    <ul class="list-unstyled">
                        <li><a href="#" class="py-1 d-block">Buy &amp; Sell</a></li>
                        <li><a href="#" class="py-1 d-block">Merchant</a></li>
                        <li><a href="#" class="py-1 d-block">Giving back</a></li>
                        <li><a href="#" class="py-1 d-block">Help &amp; Support</a></li>
                    </ul>
                </div>

                <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
                    <h2 class="footer-heading">Subcribe</h2>
                    <form action="#" class="subscribe-form">
                        <div class="form-group d-flex">
                            <input type="text" class="form-control rounded-left" placeholder="Enter email address">
                            <button type="submit" class="form-control submit rounded-right"><span
                                    class="sr-only">Submit</span><i class="fa-regular fa-paper-plane text-white"></i></button>
                        </div>
                    </form>
                    <h5 class="mt-5 fw-bold">Download App</h5>
                   <div class="mt-3">
                        <img class="download_img" :src="app" alt="">
                   </div>
                   <div class="mt-2">
                        <img class="download_img" :src="play" alt="">
                   </div>
                </div>
            </div>
        </div>
        <div class="w-100 mt-5 border-top py-3">
            <div class="container">
                <div class="row mt-2">
                    <div class="col-md-6 col-lg-8">

                        <p class="copyright text-white">
                            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                            Copyright &copy;
                            All rights reserved <a
                                href="https://colorlib.com" target="_blank">Mayfair.com</a>
                        </p>
                    </div>
                    <div class="col-md-6 col-lg-4 text-md-right">
                        <p class="mb-0 list-unstyled">
                            <a class="mr-md-3" href="#">Terms</a>
                            <a class="mr-md-3" href="#">Privacy</a>
                            <a class="mr-md-3" href="#">Compliances</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>

import '../../../assets/css/style.css'   
import '../../../assets/css/ionicons.min.css'
import logo from '../../../assets/image/logo.png'
import app from '../../../assets/image/app.png'
import play from '../../../assets/image/google.png'

export default {
    data() {
        return {
            logo,
            app,
            play
        }
    },
}
</script>

<style scoped>
.logo {
    height: 60px;
}

.fa-brands {
    background-color: rgb(34, 34, 34);
    color: white;
    padding: 12px;
    border-radius: 50%;
    margin: 5px;
}

.download_img{
    width: 170px;
}
</style>