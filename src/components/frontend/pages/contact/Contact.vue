<template>
    <div style="margin-top: 110px;">
        <div class="">
            <div class="inner_section">
                <div class="containerBlog">
                    <router-link to="/">
                        <p class="para">Home</p>
                    </router-link>
                    <h2 style="color: #012169; margin-top: -10px" class="fw-bold">Contact</h2>
                </div>
            </div>
        </div>

        <div class="container mx-auto row mt-5">
            <div class="col-md-6">
                <!-- Google Map Embed -->
                <div id="map" style="height: 400px; border-radius: 10px; overflow: hidden;">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098507!2d144.9537353153169!3d-37.81627974202185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7a3b26296a8!2sFederation%20Square!5e0!3m2!1sen!2sbd!4v1681794859000!5m2!1sen!2sbd"
                        width="100%" height="100%" style="border: 0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>


            <div class="col-lg-6">
                <div class="contact_form">
                    <form class="contact_form_box" id="contactForm" novalidate="novalidate">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="fullName" class="form-label" style="color: black">Full
                                        Name <i class="text-danger"> *
                                        </i></label>
                                    <input type="text" name="name" class="form-control form-control-lg" id="fullName"
                                        placeholder="Enter Your Name">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="phoneNumber" class="form-label" style="color: black">Phone
                                        No.</label>
                                    <input type="number" name="mobile" class="form-control form-control-lg"
                                        id="phoneNumber">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="emailAddress" class="form-label" style="color: black">Your
                                        Email <i class="text-danger"> *
                                        </i></label>
                                    <input type="email" name="email" class="form-control form-control-lg"
                                        id="emailAddress" placeholder="Enter Your Email address">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="whoAmI" class="form-label" style="color: black">I
                                        am</label>
                                    <select class="form-select form-select-lg" name="type"
                                        aria-label="Default select example" id="whoAmI">
                                        <option value="student" selected>Student</option>
                                        <option value="instructor">Instructor</option>
                                        <option value="company">Company</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="organizationName" class="form-label" style="color: black">Organization
                                        Name</label>
                                    <input type="text" name="organization" class="form-control form-control-lg"
                                        id="organizationName" placeholder="">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="prefferedDate" class="form-label" style="color: black">Preffered date
                                        and
                                        Time</label>
                                    <input type="datetime-local" name="date" class="form-control form-control-lg"
                                        id="prefferedDate">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="mb-3">
                                    <label for="reasonForCall" class="form-label" style="color: black">Reason for a call
                                        <i class="text-danger"> *
                                        </i></label>
                                    <textarea class="form-control" name="details" id="reasonForCall" rows="5"
                                        placeholder="write message"></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-lg btn-dark-cerulean" id="submit_contact">Send
                            Message</button>



                    </form>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.form-control {
    height: 45px !important;
    font-size: 15px;
}

.form-select-lg {
    font-size: 15px;
}

.btn-dark-cerulean {
    background-color: #824fa3;
    color: white;
}

.containerBlog {
    width: 80%;
    margin: auto;
}

.inner_section {
    background-color: #f3f3f3;
    padding: 68px 0 24px;
}

.para {
    color: #824fa3;
    font-weight: bold;
}
</style>