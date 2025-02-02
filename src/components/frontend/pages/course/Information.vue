<template>
    <div>
        <div class="m-auto col-12 p-0" style="max-width: 800px;">
            <div class="missing-docs container d-none">
                <div class="alert alert-warning alert-dismissible fade show m-2" role="alert">
                    <strong style="color:#363636;font-weight:700"> Your application is missing some required documents.
                        Please click <a href="#" style="color: #d71f27;font-weight:700"
                            onclick="setActivePanel(2);setActiveStep(2)">here</a> to upload.</strong> <br>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
            </div>


            <div class="content__inner application_forms">
                <div class="container">
                    <!--content title-->
                </div>
                <div class="container overflow-hidden">
                    <!--multisteps-form-->
                    <div class="multisteps-form">

                        <!--form panels-->
                        <div class="row">
                            <div class="col-12  m-auto p-0">
                                <div class="multisteps-form__form">

                                    <!--about you panel-->
                                    <div id="scrollbarr" style="max-height: 2000px; overflow-y: auto;"
                                        class="multisteps-form__panel shadow p-4 rounded bg-white js-active"
                                        data-animation="scaleIn">
                                        <form action="" id="aboutyou">
                                            <h5 class="multisteps-form__title">Contact Details</h5>
                                            <div class="multisteps-form__content">
                                                <div class="form-row ">
                                                    <div class="col-12 col-sm-6">
                                                        <div class=" form-label-group mt-2">

                                                            <input type="text" id="email" name="email" data-name="email"
                                                                required="" placeholder="Email" class="form-control"
                                                                maxlength=""
                                                                value="">
                                                            <label for="email"
                                                                class="form-control-placeholder">Email</label>

                                                            <div class="invalid-feedback">
                                                                This field is required.
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-sm-6">
                                                        <div class=" form-label-group mt-2">
                                                            <input type="tel" id="phone" name="phone" data-name="phone"
                                                                required="" placeholder="Enter Phone Number"
                                                                class="form-control form-control-lg pt-0 phone-input"
                                                                value="">
                                                            <label for="phone" class="form-control-placeholder">
                                                                Phone</label>

                                                            <div class="invalid-feedback">Please provide a valid
                                                                contact
                                                                number.
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="col-12">
                                                        <div class=" form-label-group mt-2">

                                                            <input type="tel" id="contact_id" name="contact_id"
                                                                data-name="contact_id"
                                                                placeholder="WeChat/Whatsapp/Telegram"
                                                                class="form-control"
                                                                value="">
                                                            <label for="contact_id" class="form-control-placeholder">
                                                                Contact ID
                                                                (WeChat/Whatsapp/Telegram)
                                                            </label>

                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                            <h5 class="multisteps-form__title">Student's Information</h5>
                                            <div class="multisteps-form__content">
                                                <div class="form-row ">
                                                    <div class="col-12 col-sm-6">
                                                        <div class=" form-label-group mt-2">

                                                            <input type="text" id="first_name" name="first_name"
                                                                data-name="first_name" required=""
                                                                placeholder="First name (Given Name)"
                                                                class="form-control" maxlength="" value="">
                                                            <label for="first_name" class="form-control-placeholder">
                                                                First name (Given Name)</label>

                                                            <div class="invalid-feedback">
                                                                This field is required.
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-sm-6">
                                                        <div class=" form-label-group mt-2">

                                                            <input type="text" id="middle_name" name="middle_name"
                                                                data-name="middle_name" placeholder="Middle name"
                                                                class="form-control" maxlength=""
                                                                value="">
                                                            <label for="middle_name" class="form-control-placeholder">
                                                                Middle name</label>

                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-sm-6">
                                                        <div class=" form-label-group mt-2">

                                                            <input type="text" id="last_name" name="last_name"
                                                                data-name="last_name" required=""
                                                                placeholder="Last name (Family name)"
                                                                class="form-control" maxlength=""
                                                                value="">
                                                            <label for="last_name" class="form-control-placeholder">
                                                                Last name (Family name)</label>

                                                            <div class="invalid-feedback">
                                                                This field is required.
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class=" form-label-group mt-2">

                                                            <input type="text" id="chinese_name" name="chinese_name"
                                                                data-name="chinese_name" placeholder="Chinese name"
                                                                class="form-control" maxlength=""
                                                                value="">
                                                            <label for="chinese_name" class="form-control-placeholder">
                                                                Chinese name</label>

                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class=" form-label-group mt-2">

                                                            <input type="text" id="date_of_birth" name="date_of_birth"
                                                                data-name="date_of_birth" date-field=""
                                                                data-date="Y-m-d" required=""
                                                                placeholder="Date of birth"
                                                                class="form-control flatpickr-input" maxlength=""
                                                                value="">
                                                            <label for="date_of_birth" class="form-control-placeholder">
                                                                Date of birth</label>

                                                            <div class="invalid-feedback">
                                                                This field is required.
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class=" form-label-group mt-2">

                                                            <input type="text" id="place_of_birth" name="place_of_birth"
                                                                data-name="place_of_birth" placeholder="Place of birth"
                                                                class="form-control" maxlength=""
                                                                value="">
                                                            <label for="place_of_birth"
                                                                class="form-control-placeholder">
                                                                Place of birth</label>

                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class=" form-label-group mt-2">

                                                            <input type="text" id="passport_no" name="passport_no"
                                                                data-name="passport_no" placeholder="Passport number"
                                                                class="form-control" maxlength=""
                                                                value="">
                                                            <label for="passport_no" class="form-control-placeholder">
                                                                Passport number</label>

                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class=" form-label-group mt-2">

                                                            <input type="text" id="passport_expiration_date"
                                                                name="passport_expiration_date"
                                                                data-name="passport_expiration_date" date-field=""
                                                                data-date="Y-m-d" placeholder="Passport expiry date"
                                                                class="form-control flatpickr-input" maxlength=""
                                                                value="">
                                                            <label for="passport_expiration_date"
                                                                class="form-control-placeholder">
                                                                Passport expiry date</label>

                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-label-group mt-2">
                                                            <select id="nationality_selection"
                                                                class="custom-select d-block w-100"
                                                                name="applicants_nationality" required="" tabindex="0"
                                                                aria-hidden="false">
                                                                <option value="">Select Country</option>



                                                                <option value="1"> Afghanistan </option>
                                                                <option value="2">Aland Islands </option>
                                                                <option value="3">
                                                                    Albania</option>
                                                                <option value="4">
                                                                    Algeria</option>
                                                                <option value="5">
                                                                    American Samoa</option>
                                                                <option value="6">
                                                                    Andorra</option>
                                                                <option value="7">
                                                                    Angola</option>
                                                                <option value="8">
                                                                    Anguilla</option>
                                                                <option value="9">
                                                                    Antarctica</option>
                                                                <option value="10">
                                                                    Antigua and Barbuda</option>
                                                                <option value="11">
                                                                    Argentina</option>
                                                                <option value="12">
                                                                    Armenia</option>
                                                                <option value="13">
                                                                    Aruba</option>
                                                                <option value="14">
                                                                    Australia</option>
                                                                <option value="15">
                                                                    Austria</option>
                                                                <option value="16">
                                                                    Azerbaijan</option>
                                                                <option value="17">
                                                                    Bahamas</option>
                                                                <option value="18">
                                                                    Bahrain</option>
                                                                <option value="19">
                                                                    Bangladesh</option>
                                                                <option value="20">
                                                                    Barbados</option>
                                                                <option value="21">
                                                                    Belarus</option>
                                                                <option value="22">
                                                                    Belgium</option>
                                                                <option value="23">
                                                                    Belize</option>
                                                                <option value="24">
                                                                    Benin</option>
                                                                <option value="25">
                                                                    Bermuda</option>
                                                                <option value="26">
                                                                    Bhutan </option>
                                                                <option value="27">
                                                                    Bolivia</option>
                                                                <option value="28">
                                                                    Bonaire, Sint Eustatius and Saba </option>
                                                                <option value="29">
                                                                    Bosnia and Herzegovina</option>
                                                                <option value="30">
                                                                    Botswana</option>
                                                                <option value="31">
                                                                    Bouvet Island</option>
                                                                <option value="32">
                                                                    Brazil</option>
                                                                <option value="33">
                                                                    British Indian Ocean Territory</option>
                                                                <option value="34">
                                                                    Brunei</option>
                                                                <option value="35">
                                                                    Bulgaria</option>
                                                                <option value="36">
                                                                    Burkina Faso</option>
                                                                <option value="37">
                                                                    Burundi</option>
                                                                <option value="38">
                                                                    Cambodia</option>
                                                                <option value="39">
                                                                    Cameroon</option>
                                                                <option value="40">
                                                                    Canada </option>
                                                                <option value="41">
                                                                    Cape Verde </option>
                                                                <option value="42">
                                                                    Cayman Islands </option>
                                                                <option value="43">
                                                                    Central African Republic </option>
                                                                <option value="44">
                                                                    Chad </option>
                                                                <option value="45">
                                                                    Chile </option>
                                                                <option value="46">
                                                                    China </option>
                                                                <option value="47">
                                                                    Christmas Island </option>
                                                                <option value="48">
                                                                    Cocos (Keeling) Islands </option>
                                                                <option value="49">
                                                                    Colombia </option>
                                                                <option value="50">
                                                                    Comoros </option>
                                                                <option value="51">
                                                                    Congo </option>
                                                                <option value="52">
                                                                    Cook Islands </option>
                                                                <option value="53">
                                                                    Costa Rica </option>
                                                                <option value="55">
                                                                    Croatia </option>
                                                                <option value="56">
                                                                    Cuba </option>
                                                                <option value="57">
                                                                    Curacao </option>
                                                                <option value="58">
                                                                    Cyprus </option>
                                                                <option value="59">
                                                                    Czech Republic </option>
                                                                <option value="60">
                                                                    Democratic Republic of the Congo </option>
                                                                <option value="61">
                                                                    Denmark </option>
                                                                <option value="62">
                                                                    Djibouti </option>
                                                                <option value="63">
                                                                    Dominica </option>
                                                                <option value="64">
                                                                    Dominican Republic </option>
                                                                <option value="65">
                                                                    Ecuador </option>
                                                                <option value="66">
                                                                    Egypt </option>
                                                                <option value="67">
                                                                    El Salvador </option>
                                                                <option value="68">
                                                                    Equatorial Guinea </option>
                                                                <option value="69">
                                                                    Eritrea </option>
                                                                <option value="70">
                                                                    Estonia </option>
                                                                <option value="71">
                                                                    Ethiopia </option>
                                                                <option value="72">
                                                                    Falkland Islands (Malvinas) </option>
                                                                <option value="73">
                                                                    Faroe Islands </option>
                                                                <option value="74">
                                                                    Fiji </option>
                                                                <option value="75">
                                                                    Finland </option>
                                                                <option value="76">
                                                                    France </option>
                                                                <option value="77">
                                                                    French Guiana </option>
                                                                <option value="78">
                                                                    French Polynesia </option>
                                                                <option value="79">
                                                                    French Southern Territories </option>
                                                                <option value="80">
                                                                    Gabon </option>
                                                                <option value="81">
                                                                    Gambia </option>
                                                                <option value="82">
                                                                    Georgia </option>
                                                                <option value="83">
                                                                    Germany </option>
                                                                <option value="84">
                                                                    Ghana </option>
                                                                <option value="85">
                                                                    Gibraltar </option>
                                                                <option value="86">
                                                                    Greece </option>
                                                                <option value="87">
                                                                    Greenland </option>
                                                                <option value="88">
                                                                    Grenada </option>
                                                                <option value="89">
                                                                    Guadaloupe </option>
                                                                <option value="90">
                                                                    Guam </option>
                                                                <option value="91">
                                                                    Guatemala </option>
                                                                <option value="92">
                                                                    Guernsey </option>
                                                                <option value="93">
                                                                    Guinea </option>
                                                                <option value="94">
                                                                    Guinea-Bissau </option>
                                                                <option value="95">
                                                                    Guyana </option>
                                                                <option value="96">
                                                                    Haiti </option>
                                                                <option value="97">
                                                                    Heard Island and McDonald Islands </option>
                                                                <option value="98">
                                                                    Honduras </option>
                                                                <option value="99">
                                                                    Hong Kong </option>
                                                                <option value="100">
                                                                    Hungary </option>
                                                                <option value="101">
                                                                    Iceland </option>
                                                                <option value="102">
                                                                    India </option>
                                                                <option value="103">
                                                                    Indonesia </option>
                                                                <option value="104">
                                                                    Iran </option>
                                                                <option value="105">
                                                                    Iraq </option>
                                                                <option value="106">
                                                                    Ireland </option>
                                                                <option value="107">
                                                                    Isle of Man </option>
                                                                <option value="108">
                                                                    Israel </option>
                                                                <option value="109">
                                                                    Italy </option>
                                                                <option value="54">
                                                                    Ivory Coast </option>
                                                                <option value="110">
                                                                    Jamaica </option>
                                                                <option value="111">
                                                                    Japan </option>
                                                                <option value="112">
                                                                    Jersey </option>
                                                                <option value="113">
                                                                    Jordan </option>
                                                                <option value="114">
                                                                    Kazakhstan </option>
                                                                <option value="115">
                                                                    Kenya </option>
                                                                <option value="116">
                                                                    Kiribati </option>
                                                                <option value="117">
                                                                    Kosovo </option>
                                                                <option value="118">
                                                                    Kuwait </option>
                                                                <option value="119">
                                                                    Kyrgyzstan </option>
                                                                <option value="120">
                                                                    Laos </option>
                                                                <option value="121">
                                                                    Latvia </option>
                                                                <option value="122">
                                                                    Lebanon </option>
                                                                <option value="123">
                                                                    Lesotho </option>
                                                                <option value="124">
                                                                    Liberia </option>
                                                                <option value="125">
                                                                    Libya </option>
                                                                <option value="126">
                                                                    Liechtenstein </option>
                                                                <option value="127">
                                                                    Lithuania </option>
                                                                <option value="128">
                                                                    Luxembourg </option>
                                                                <option value="129">
                                                                    Macao </option>
                                                                <option value="130">
                                                                    Macedonia </option>
                                                                <option value="131">
                                                                    Madagascar </option>
                                                                <option value="132">
                                                                    Malawi </option>
                                                                <option value="133">
                                                                    Malaysia </option>
                                                                <option value="134">
                                                                    Maldives </option>
                                                                <option value="135">
                                                                    Mali </option>
                                                                <option value="136">
                                                                    Malta </option>
                                                                <option value="137">
                                                                    Marshall Islands </option>
                                                                <option value="138">
                                                                    Martinique </option>
                                                                <option value="139">
                                                                    Mauritania </option>
                                                                <option value="140">
                                                                    Mauritius </option>
                                                                <option value="141">
                                                                    Mayotte </option>
                                                                <option value="142">
                                                                    Mexico </option>
                                                                <option value="143">
                                                                    Micronesia </option>
                                                                <option value="144">
                                                                    Moldava </option>
                                                                <option value="145">
                                                                    Monaco </option>
                                                                <option value="146">
                                                                    Mongolia </option>
                                                                <option value="147">
                                                                    Montenegro </option>
                                                                <option value="148">
                                                                    Montserrat </option>
                                                                <option value="149">
                                                                    Morocco </option>
                                                                <option value="150">
                                                                    Mozambique </option>
                                                                <option value="151">
                                                                    Myanmar (Burma) </option>
                                                                <option value="152">
                                                                    Namibia </option>
                                                                <option value="153">
                                                                    Nauru </option>
                                                                <option value="154">
                                                                    Nepal </option>
                                                                <option value="155">
                                                                    Netherlands </option>
                                                                <option value="156">
                                                                    New Caledonia </option>
                                                                <option value="157">
                                                                    New Zealand </option>
                                                                <option value="158">
                                                                    Nicaragua </option>
                                                                <option value="159">
                                                                    Niger </option>
                                                                <option value="160">
                                                                    Nigeria </option>
                                                                <option value="161">
                                                                    Niue </option>
                                                                <option value="162">
                                                                    Norfolk Island </option>
                                                                <option value="163">
                                                                    North Korea </option>
                                                                <option value="164">
                                                                    Northern Mariana Islands </option>
                                                                <option value="165">
                                                                    Norway </option>
                                                                <option value="166">
                                                                    Oman </option>
                                                                <option value="167">
                                                                    Pakistan </option>
                                                                <option value="168">
                                                                    Palau </option>
                                                                <option value="169">
                                                                    Palestine </option>
                                                                <option value="170">
                                                                    Panama </option>
                                                                <option value="171">
                                                                    Papua New Guinea </option>
                                                                <option value="172">
                                                                    Paraguay </option>
                                                                <option value="173">
                                                                    Peru </option>
                                                                <option value="174">
                                                                    Phillipines </option>
                                                                <option value="175">
                                                                    Pitcairn </option>
                                                                <option value="176">
                                                                    Poland </option>
                                                                <option value="177">
                                                                    Portugal </option>
                                                                <option value="178">
                                                                    Puerto Rico </option>
                                                                <option value="179">
                                                                    Qatar </option>
                                                                <option value="180">
                                                                    Reunion </option>
                                                                <option value="181">
                                                                    Romania </option>
                                                                <option value="182">
                                                                    Russia </option>
                                                                <option value="183">
                                                                    Rwanda </option>
                                                                <option value="184">
                                                                    Saint Barthelemy </option>
                                                                <option value="185">
                                                                    Saint Helena </option>
                                                                <option value="186">
                                                                    Saint Kitts and Nevis </option>
                                                                <option value="187">
                                                                    Saint Lucia </option>
                                                                <option value="188">
                                                                    Saint Martin </option>
                                                                <option value="189">
                                                                    Saint Pierre and Miquelon </option>
                                                                <option value="190">
                                                                    Saint Vincent and the Grenadines </option>
                                                                <option value="191">
                                                                    Samoa </option>
                                                                <option value="192">
                                                                    San Marino </option>
                                                                <option value="193">
                                                                    Sao Tome and Principe </option>
                                                                <option value="194">
                                                                    Saudi Arabia </option>
                                                                <option value="195">
                                                                    Senegal </option>
                                                                <option value="196">
                                                                    Serbia </option>
                                                                <option value="197">
                                                                    Seychelles </option>
                                                                <option value="198">
                                                                    Sierra Leone </option>
                                                                <option value="199">
                                                                    Singapore </option>
                                                                <option value="200">
                                                                    Sint Maarten </option>
                                                                <option value="201">
                                                                    Slovakia </option>
                                                                <option value="202">
                                                                    Slovenia </option>
                                                                <option value="203">
                                                                    Solomon Islands </option>
                                                                <option value="204">
                                                                    Somalia </option>
                                                                <option value="205">
                                                                    South Africa </option>
                                                                <option value="206">
                                                                    South Georgia and the South Sandwich Islands
                                                                </option>
                                                                <option value="207">
                                                                    South Korea </option>
                                                                <option value="208">
                                                                    South Sudan </option>
                                                                <option value="209">
                                                                    Spain </option>
                                                                <option value="210">
                                                                    Sri Lanka </option>
                                                                <option value="211">
                                                                    Sudan </option>
                                                                <option value="212">
                                                                    Suriname </option>
                                                                <option value="213">
                                                                    Svalbard and Jan Mayen </option>
                                                                <option value="214">
                                                                    Swaziland </option>
                                                                <option value="215">
                                                                    Sweden </option>
                                                                <option value="216">
                                                                    Switzerland </option>
                                                                <option value="217">
                                                                    Syria </option>
                                                                <option value="218">
                                                                    Taiwan </option>
                                                                <option value="219">
                                                                    Tajikistan </option>
                                                                <option value="220">
                                                                    Tanzania </option>
                                                                <option value="221">
                                                                    Thailand </option>
                                                                <option value="222">
                                                                    Timor-Leste (East Timor)</option>
                                                                <option value="223">
                                                                    Togo</option>
                                                                <option value="224">
                                                                    Tokelau</option>
                                                                <option value="225">
                                                                    Tonga</option>
                                                                <option value="226">
                                                                    Trinidad and Tobago</option>
                                                                <option value="227">
                                                                    Tunisia</option>
                                                                <option value="228">
                                                                    Turkey</option>
                                                                <option value="229">
                                                                    Turkmenistan</option>
                                                                <option value="230">
                                                                    Turks and Caicos Islands</option>
                                                                <option value="231">
                                                                    Tuvalu</option>
                                                                <option value="232">
                                                                    Uganda</option>
                                                                <option value="233">
                                                                    Ukraine</option>
                                                                <option value="234">
                                                                    United Arab Emirates</option>
                                                                <option value="235">
                                                                    United Kingdom</option>
                                                                <option value="236">
                                                                    United States</option>
                                                                <option value="237">
                                                                    United States Minor Outlying Islands</option>
                                                                <option value="238">
                                                                    Uruguay</option>
                                                                <option value="239">
                                                                    Uzbekistan</option>
                                                                <option value="240">
                                                                    Vanuatu</option>
                                                                <option value="241">
                                                                    Vatican City</option>
                                                                <option value="242">
                                                                    Venezuela</option>
                                                                <option value="243">
                                                                    Vietnam</option>
                                                                <option value="244">
                                                                    Virgin Islands, British</option>
                                                                <option value="245">
                                                                    Virgin Islands, US</option>
                                                                <option value="246">
                                                                    Wallis and Futuna</option>
                                                                <option value="247">
                                                                    Western Sahara</option>
                                                                <option value="248">
                                                                    Yemen</option>
                                                                <option value="249">
                                                                    Zambia</option>
                                                                <option value="250">
                                                                    Zimbabwe</option>
                                                            </select>
                                                            <label for="nationality_selection">Nationality</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class=" form-label-group mt-2">
                                                            <select class="custom-select d-block w-100" id="religion"
                                                                name="religion" data-name="religion"
                                                                placeholder="Religion" value="" required="">

                                                            </select>

                                                            <label for="religion" class="form-control-placeholder">
                                                                Religion</label>

                                                        </div>
                                                    </div>
                                                    <div id="msg-nationality" class="invalid-feedback col-12 col-sm-12"
                                                        style="display: none;"></div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-label-group mt-2">
                                                            <select class="custom-select d-block w-100" id="gender"
                                                                name="gender" placeholder="Gender" value="" required="">
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                            </select>
                                                            <label for="gender">Gender</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-label-group mt-2">
                                                            <select class="custom-select d-block w-100"
                                                                id="marital_status" name="marital_status"
                                                                placeholder="Marital status" value="" required="">
                                                                <option 
                                                                    value="Single">Single</option>
                                                                <option 
                                                                    value="Married">Married</option>
                                                            </select>
                                                            <label for="marital_status">Marital status</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-label-group mt-2">
                                                            <select class="custom-select d-block w-100" id="is_in_china"
                                                                name="is_in_china"
                                                                placeholder="Are you currently in China">
                                                                <option
                                                                    value="false">No</option>
                                                                <option 
                                                                    value="true">Yes</option>
                                                            </select>
                                                            <label for="is_in_china">Are you currently in
                                                                China</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6">
                                                        <div class="form-label-group mt-2">
                                                            <select class="custom-select d-block w-100"
                                                                id="addict_to_alcohol_drugs"
                                                                name="addict_to_alcohol_drugs"
                                                                placeholder="Are you addicted to alcohol or drugs">
                                                                <option 
                                                                    value="false">No</option>
                                                                <option 
                                                                    value="true">Yes</option>
                                                            </select>
                                                            <label for="addict_to_alcohol_drugs">Are you addicted to
                                                                alcohol or drugs</label>
                                                        </div>
                                                    </div>
                                                    <div id="msg-in-china" class="invalid-feedback col-12 col-sm-12">
                                                        Please make sure to upload a copy of your current visa.
                                                        China Admissions can not help in any kind of visa Issue.
                                                        If your visa is expiring in 60 days or before the start of the
                                                        program, you can’t apply using China Admissions.
                                                        In this case, please apply to the university directly.
                                                    </div>
                                                    <div class="col-12">
                                                        <div class=" form-label-group mt-2">

                                                            <textarea cols="" rows="3" id="hobbies_interests"
                                                                name="hobbies_interests"
                                                                placeholder="Hobbies or interests"
                                                                class="form-control"></textarea>
                                                            <label for="hobbies_interests"
                                                                class="form-control-placeholder">Hobbies or
                                                                interests</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <h5 class="multisteps-form__title">Language Proficiency</h5>
                                                <div class="form-row ">

                                                    <div class="col-12 mt-2">
                                                        <div class="form-label-group mt-2">
                                                            <select id="language_native" name="language_native"
                                                                class="form-control">
                                                                <option value="" disabled selected>Select your
                                                                    native language</option>
                                                                <option value="Arabic" >
                                                                    Arabic</option>
                                                                <option value="Bengali" >
                                                                    Bengali</option>
                                                                <option value="Chinese" >
                                                                    Chinese</option>

                                                                <option value="Dutch" >
                                                                    Dutch</option>
                                                                <option value="English" >
                                                                    English</option>
                                                                <option value="French" >
                                                                    French</option>
                                                            
                                                                <!-- Add more languages as needed -->
                                                            </select>
                                                            <label for="language_native"
                                                                class="form-control-placeholder">Native
                                                                language</label>
                                                        </div>


                                                    </div>

                                                    <div class="col-12 mt-2">
                                                        <div class="form-label-group mt-2">
                                                            <select class="custom-select d-block w-100"
                                                                id="english_level" name="language_proficiency_english"
                                                                placeholder="English level" value="" required="">
                                                                <option value="" selected="">English level
                                                                </option>
                                                               
                                                                <option 
                                                                    value="1">1 - Poor</option>
                                                                <option 
                                                                    value="2">2 - Fair</option>
                                                                <option 
                                                                    value="3">3 - Good
                                                                </option>
                                                                <option 
                                                                    value="4">4 - Excellent</option>

                                                            </select>
                                                            <label for="english_level">English level</label>
                                                        </div>

                                                    </div>

                                                    <div class="col-12 mt-2">
                                                        <div class="form-label-group mt-2">
                                                            <select class="custom-select d-block w-100"
                                                                id="english_certificate"
                                                                name="certificate_english_proficiency" required>
                                                                <option value="" selected="">Select Course
                                                                </option>
                                                                <option value="1">IELTS</option>
                                                                <option value="2">TOEFL</option>
                                                                <option value="3">Duolingo</option>
                                                                <option value="4">Others</option>
                                                            </select>
                                                            <label for="english_certificate">Certificate of English
                                                                Proficiency</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-12 mt-2" id="extra-fields" style="display: none;">
                                                        <div class="form-group">
                                                            <label for="english_score">English Score:</label>
                                                            <input type="text" class="form-control" id="english_score"
                                                                name="english_score" placeholder="Enter your score">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="certificate_issue_date">Certificate Issue
                                                                Date:</label>
                                                            <input type="date" class="form-control"
                                                                id="certificate_issue_date"
                                                                name="certificate_issue_date">
                                                        </div>
                                                    </div>


                                                    <div class="col-12 mt-2">
                                                        <div class="form-label-group mt-2">
                                                            <select class="custom-select d-block w-100"
                                                                id="chinese_level" name="language_proficiency_chinese"
                                                                placeholder="Chinese level" value="" required="">
                                                                <option value="" selected="">Chinese level
                                                                </option>
                                                                <option 
                                                                    value="0">Poor</option>
                                                                <option 
                                                                    value="1">Fair</option>
                                                                <option 
                                                                    value="2">Good</option>
                                                                <option 
                                                                    value="3">Excellent</option>

                                                            </select>
                                                            <label for="english_level">Chinese level</label>
                                                        </div>

                                                    </div>

                                                    <div class="col-12 mt-2" id="extra-fields-chinese"
                                                        style="display: none;">
                                                        <div class="form-group mt-2">
                                                            <label for="english_score">Level of HSK :</label>
                                                            <div class="form-group mt-2">
                                                                <select class="custom-select d-block w-100"
                                                                    id="Level_of_HSK" name="HSK_level" required>
                                                                    <option value="" selected="">Select
                                                                        level</option>
                                                                    <option value="1">HSK LEVEL 1</option>
                                                                    <option value="2">HSK LEVEL 2</option>
                                                                    <option value="3">HSK LEVEL 3</option>
                                                                    <option value="4">HSK LEVEL 4</option>
                                                                    <option value="5">HSK LEVEL 5</option>
                                                                    <option value="6">HSK LEVEL 6</option>
                                                                    <option value="7">HSK LEVEL 7</option>
                                                                    <option value="8">HSK LEVEL 8</option>
                                                                    <option value="9">HSK LEVEL 9</option>
                                                                    <option value="10">HSK Base level C(score
                                                                        level:1)</option>
                                                                    <option value="11">HSK Base level B(score
                                                                        level:2)</option>
                                                                    <option value="12">HSK Base level A(score
                                                                        level:3)</option>
                                                                    <option value="13">HSK Junior level c(score
                                                                        level:4)</option>
                                                                    <option value="14">HSK Junior level b(score
                                                                        level:5)</option>
                                                                    <option value="15">HSK Junior level a(score
                                                                        level:6)</option>
                                                                    <option value="16">HSK Secondary level c(score
                                                                        level:7)</option>
                                                                    <option value="17">HSK Secondary level b(score
                                                                        level:8)</option>
                                                                    <option value="18">HSK Secondary level a(score
                                                                        level:9)</option>
                                                                    <option value="19">HSK Senior level a(score
                                                                        level:10)</option>
                                                                    <option value="20">HSK Senior level a(score
                                                                        level:11)</option>
                                                                    <option value="21">HSK Senior level a(score
                                                                        level:12)</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class="form-group mt-2">
                                                            <input type="text" class="form-control" id="HSK_score"
                                                                name="HSK_score" placeholder="Enter your score">
                                                        </div>

                                                        <div class="form-group mt-2">
                                                            <label for="english_score">Level of HSKK:</label>
                                                            <div class="form-group mt-2">
                                                                <select class="custom-select d-block w-100"
                                                                    id="Level_of_HSKK" name="HSKK_level" required>
                                                                    <option value="" selected="">Select
                                                                        level</option>
                                                                    <option value="1">ELEMENTARY</option>
                                                                    <option value="2">INTERMEDIATE</option>
                                                                    <option value="3">ADVANCED</option>
                                                                </select>

                                                            </div>
                                                        </div>

                                                        <div class="form-group mt-2">
                                                            <input type="text" class="form-control" id="HSKK_score"
                                                                name="HSKK_score" placeholder="Enter your score">
                                                        </div>

                                                        <div class="form-group mt-2">
                                                            <label for="ReportNo">HSK Test Score Report No:</label>
                                                            <input type="text" class="form-control" name="report_no"
                                                                placeholder="Enter your No">
                                                        </div>

                                                    </div>


                                                </div>

                                            </div>
                                        </form>

                                        <div class="address">
                                            <form action="" id="home_address">
                                                <h5 class="multisteps-form__title">Home Address Details</h5>
                                                <div class="multisteps-form__content">
                                                    <div class="form-row ">
                                                        <input type="hidden" name="id" value="1">
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="home_country" name="country"
                                                                    data-name="country" required=""
                                                                    placeholder="Country" class="form-control"
                                                                    maxlength=""
                                                                    value="">
                                                                <label for="country" class="form-control-placeholder">
                                                                    Country</label>

                                                                <div class="invalid-feedback">
                                                                    This field is required.
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="home_city" name="city"
                                                                    data-name="city" placeholder="City/Province"
                                                                    class="form-control" maxlength=""
                                                                    value="">
                                                                <label for="city" class="form-control-placeholder">
                                                                    City/Province</label>

                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="home_district" name="district"
                                                                    data-name="district" required=""
                                                                    placeholder="District" class="form-control"
                                                                    maxlength=""
                                                                    value="">
                                                                <label for="district" class="form-control-placeholder">
                                                                    District</label>

                                                                <div class="invalid-feedback">
                                                                    This field is required.
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="home_street" name="street"
                                                                    data-name="street" required="" placeholder="Street"
                                                                    class="form-control" maxlength=""
                                                                    value="">
                                                                <label for="street" class="form-control-placeholder">
                                                                    Street</label>

                                                                <div class="invalid-feedback">
                                                                    This field is required.
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="home_zipcode" name="zipcode"
                                                                    data-name="zipcode" required=""
                                                                    placeholder="Postal/Zip Code" class="form-control"
                                                                    maxlength=""
                                                                    value="">
                                                                <label for="zipcode" class="form-control-placeholder">
                                                                    Postal/Zip Code</label>

                                                                <div class="invalid-feedback">
                                                                    This field is required.
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="home_contact" name="contact"
                                                                    data-name="contact" placeholder="Receiver's name"
                                                                    class="form-control" maxlength=""
                                                                    value="">
                                                                <label for="contact" class="form-control-placeholder">
                                                                    Receiver's name</label>

                                                            </div>
                                                        </div>

                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="home_phone" name="phone"
                                                                    data-name="phone" required=""
                                                                    placeholder="Receiver's Phone Number"
                                                                    class="form-control form-control-lg pt-0 phone-input @error('phone') is-invalid @enderror"
                                                                    maxlength=""
                                                                    value="">
                                                                <label for="phone" class="form-control-placeholder">
                                                                    Receiver's Phone Number</label>

                                                               
                                                                <div class="invalid-feedback">
                                                                    This field is required.
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </form>
                                        </div>

                                        <div class="address">
                                            <form action="" id="post_address">
                                                <h5 class="multisteps-form__title">Postal Address Details</h5>
                                                <p>(We will send your documents to your postal address. Please make sure
                                                    your address is valid.)</p>
                                                Same as
                                                <div class="form-group form-check">

                                                    <input type="checkbox" name="same_home_address"
                                                        class="form-check-input" id="postalAddressCheck" value="1">
                                                    <label class="form-check-label" for="postalAddressCheck"
                                                        style="color:var(--secondary_background)">Home Address</label>
                                                </div>
                                                <div class="multisteps-form__content">
                                                    <div class="form-row ">
                                                        <input type="hidden" name="id" value="1">
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="post_country" name="country"
                                                                    data-name="country" required=""
                                                                    placeholder="Country" class="form-control"
                                                                    maxlength=""
                                                                    value="">
                                                                <label for="country" class="form-control-placeholder">
                                                                    Country</label>

                                                                <div class="invalid-feedback">
                                                                    This field is required.
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="post_city" name="city"
                                                                    data-name="city" placeholder="City/Province"
                                                                    class="form-control" maxlength=""
                                                                    value="">
                                                                <label for="city" class="form-control-placeholder">
                                                                    City/Province</label>

                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="post_district" name="district"
                                                                    data-name="district" required=""
                                                                    placeholder="District" class="form-control"
                                                                    maxlength=""
                                                                    value="">
                                                                <label for="district" class="form-control-placeholder">
                                                                    District</label>

                                                                <div class="invalid-feedback">
                                                                    This field is required.
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="post_street" name="street"
                                                                    data-name="street" required="" placeholder="Street"
                                                                    class="form-control" maxlength=""
                                                                    value="">
                                                                <label for="street" class="form-control-placeholder">
                                                                    Street</label>

                                                                <div class="invalid-feedback">
                                                                    This field is required.
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="post_zipcode" name="zipcode"
                                                                    data-name="zipcode" required=""
                                                                    placeholder="Postal/Zip Code" class="form-control"
                                                                    maxlength=""
                                                                    value="">
                                                                <label for="zipcode" class="form-control-placeholder">
                                                                    Postal/Zip Code</label>

                                                                <div class="invalid-feedback">
                                                                    This field is required.
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="post_contact" name="contact"
                                                                    data-name="contact" placeholder="Receiver's name"
                                                                    class="form-control" maxlength=""
                                                                    value="">
                                                                <label for="contact" class="form-control-placeholder">
                                                                    Receiver's name</label>

                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="post_phone" name="phone"
                                                                    data-name="phone" required=""
                                                                    placeholder="Receiver's Phone Number"
                                                                    class="form-control form-control-lg pt-0 phone-input"
                                                                    maxlength=""
                                                                    value="">
                                                                <label for="phone" class="form-control-placeholder">
                                                                    Receiver's Phone Number</label>
                                                               
                                                                <div class="invalid-feedback">
                                                                    This field is required.
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>


                                        <div id="education">
                                            <!-- Repeater Heading -->
                                            <div
                                                class="align-items-center d-flex justify-content-between repeater-heading">

                                                <div class="d-flex flex-column">
                                                    <h5 class="multisteps-form__title">Education
                                                        Background
                                                    </h5>
                                                    <button type="button"
                                                        class="btn btn-primary-light-bg repeater-add-btn">
                                                        Add Education Background
                                                    </button>
                                                </div>

                                            </div>

                                            <div class="items" data-index="0" data-group="education_fields">
                                                <!-- Repeater Item Content -->
                                                <div class="item-content">
                                                    <div class="form-row  education_fields ">
                                                        <form action=""
                                                            class="form-row  education_form_fields needs-validation"
                                                            novalidate="">
                                                            <input type="hidden" name="education-fields[0][undefined]"
                                                                value="" id="education-fields_0_undefined">

                                                            <div class="col-12 col-sm-6">
                                                                <div class=" form-label-group mt-2"
                                                                    style="margin-left:5px;">

                                                                    <input type="text" id="education-fields_0_school"
                                                                        name="education-fields[0][school]"
                                                                        data-name="school" required=""
                                                                        placeholder="School or University"
                                                                        class="form-control" maxlength="" value="">
                                                                    <label for="education-fields_0_school"
                                                                        class="form-control-placeholder">
                                                                        School</label>

                                                                    <div class="invalid-feedback">
                                                                        This field is required.
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-sm-6">
                                                                <div class=" form-label-group mt-2"
                                                                    style="margin-left:5px;">

                                                                    <input type="text" id="education-fields_0_major"
                                                                        name="education-fields[0][major]"
                                                                        data-name="major" placeholder="Major"
                                                                        class="form-control" maxlength="" value="">
                                                                    <label for="education-fields_0_major"
                                                                        class="form-control-placeholder">
                                                                        Major</label>

                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-sm-6">
                                                                <div class=" form-label-group mt-2"
                                                                    style="margin-left:5px;">

                                                                    <input type="text"
                                                                        id="education-fields_0_month_started"
                                                                        name="education-fields[0][month_started]"
                                                                        data-name="month_started" date-field=""
                                                                        data-date="Y-m-d" required=""
                                                                        placeholder="Started"
                                                                        class="form-control flatpickr-input"
                                                                        maxlength="" value="">
                                                                    <label for="education-fields_0_month_started"
                                                                        class="form-control-placeholder">
                                                                        Started</label>

                                                                    <div class="invalid-feedback">
                                                                        This field is required.
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-sm-6">
                                                                <div class=" form-label-group mt-2"
                                                                    style="margin-left:5px;">

                                                                    <input type="text"
                                                                        id="education-fields_0_month_finished"
                                                                        name="education-fields[0][month_finished]"
                                                                        data-name="month_finished" date-field=""
                                                                        data-date="Y-m-d" placeholder="Finished"
                                                                        class="form-control flatpickr-input"
                                                                        maxlength="" value="">
                                                                    <label for="education-fields_0_month_finished"
                                                                        class="form-control-placeholder">
                                                                        Finished</label>

                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-sm-6">
                                                                <div class="form-label-group mt-2"
                                                                    style="margin-left:5px;">

                                                                    <input type="text" id="education-fields_0_gpa"
                                                                        name="education-fields[0][gpa]" data-name="gpa"
                                                                        required="" placeholder="GPA"
                                                                        class="form-control"
                                                                        oninput="validateGPA(this)">
                                                                    <label for="education-fields_0_gpa">GPA</label>
                                                                </div>
                                                            </div>

                                                            <div class="col-12 col-sm-6">
                                                                <div class=" form-label-group mt-2"
                                                                    style="margin-left:5px;">


                                                                    <select data-name="country"
                                                                        name="education-fields[0][country]"
                                                                        class="form-control"
                                                                        id="education-fields_0_country">
                                                                        <option value="Select country">Select Country
                                                                        </option>

                                                                        <option value="1"> Afghanistan </option>
                                                                        <option value="2">Aland Islands </option>
                                                                        <option value="3">
                                                                            Albania</option>
                                                                        <option value="4">
                                                                            Algeria</option>
                                                                        <option value="5">
                                                                            American Samoa</option>
                                                                        <option value="6">
                                                                            Andorra</option>
                                                                        <option value="7">
                                                                            Angola</option>
                                                                        <option value="8">
                                                                            Anguilla</option>
                                                                        <option value="9">
                                                                            Antarctica</option>
                                                                        <option value="10">
                                                                            Antigua and Barbuda</option>
                                                                        <option value="11">
                                                                            Argentina</option>
                                                                        <option value="12">
                                                                            Armenia</option>
                                                                        <option value="13">
                                                                            Aruba</option>
                                                                        <option value="14">
                                                                            Australia</option>
                                                                        <option value="15">
                                                                            Austria</option>
                                                                        <option value="16">
                                                                            Azerbaijan</option>
                                                                        <option value="17">
                                                                            Bahamas</option>
                                                                        <option value="18">
                                                                            Bahrain</option>
                                                                        <option value="19">
                                                                            Bangladesh</option>
                                                                        <option value="20">
                                                                            Barbados</option>
                                                                        <option value="21">
                                                                            Belarus</option>
                                                                        <option value="22">
                                                                            Belgium</option>
                                                                        <option value="23">
                                                                            Belize</option>
                                                                        <option value="24">
                                                                            Benin</option>
                                                                        <option value="25">
                                                                            Bermuda</option>
                                                                        <option value="26">
                                                                            Bhutan </option>
                                                                        <option value="27">
                                                                            Bolivia</option>
                                                                        <option value="28">
                                                                            Bonaire, Sint Eustatius and Saba </option>
                                                                        <option value="29">
                                                                            Bosnia and Herzegovina</option>
                                                                        <option value="30">
                                                                            Botswana</option>
                                                                        <option value="31">
                                                                            Bouvet Island</option>
                                                                        <option value="32">
                                                                            Brazil</option>
                                                                        <option value="33">
                                                                            British Indian Ocean Territory</option>
                                                                        <option value="34">
                                                                            Brunei</option>
                                                                        <option value="35">
                                                                            Bulgaria</option>
                                                                        <option value="36">
                                                                            Burkina Faso</option>
                                                                        <option value="37">
                                                                            Burundi</option>
                                                                        <option value="38">
                                                                            Cambodia</option>
                                                                        <option value="39">
                                                                            Cameroon</option>
                                                                        <option value="40">
                                                                            Canada </option>
                                                                        <option value="41">
                                                                            Cape Verde </option>
                                                                        <option value="42">
                                                                            Cayman Islands </option>
                                                                        <option value="43">
                                                                            Central African Republic </option>
                                                                        <option value="44">
                                                                            Chad </option>
                                                                        <option value="45">
                                                                            Chile </option>
                                                                        <option value="46">
                                                                            China </option>
                                                                        <option value="47">
                                                                            Christmas Island </option>
                                                                        <option value="48">
                                                                            Cocos (Keeling) Islands </option>
                                                                        <option value="49">
                                                                            Colombia </option>
                                                                        <option value="50">
                                                                            Comoros </option>
                                                                        <option value="51">
                                                                            Congo </option>
                                                                        <option value="52">
                                                                            Cook Islands </option>
                                                                        <option value="53">
                                                                            Costa Rica </option>
                                                                        <option value="55">
                                                                            Croatia </option>
                                                                        <option value="56">
                                                                            Cuba </option>
                                                                        <option value="57">
                                                                            Curacao </option>
                                                                        <option value="58">
                                                                            Cyprus </option>
                                                                        <option value="59">
                                                                            Czech Republic </option>
                                                                        <option value="60">
                                                                            Democratic Republic of the Congo </option>
                                                                        <option value="61">
                                                                            Denmark </option>
                                                                        <option value="62">
                                                                            Djibouti </option>
                                                                        <option value="63">
                                                                            Dominica </option>
                                                                        <option value="64">
                                                                            Dominican Republic </option>
                                                                        <option value="65">
                                                                            Ecuador </option>
                                                                        <option value="66">
                                                                            Egypt </option>
                                                                        <option value="67">
                                                                            El Salvador </option>
                                                                        <option value="68">
                                                                            Equatorial Guinea </option>
                                                                        <option value="69">
                                                                            Eritrea </option>
                                                                        <option value="70">
                                                                            Estonia </option>
                                                                        <option value="71">
                                                                            Ethiopia </option>
                                                                        <option value="72">
                                                                            Falkland Islands (Malvinas) </option>
                                                                        <option value="73">
                                                                            Faroe Islands </option>
                                                                        <option value="74">
                                                                            Fiji </option>
                                                                        <option value="75">
                                                                            Finland </option>
                                                                        <option value="76">
                                                                            France </option>
                                                                        <option value="77">
                                                                            French Guiana </option>
                                                                        <option value="78">
                                                                            French Polynesia </option>
                                                                        <option value="79">
                                                                            French Southern Territories </option>
                                                                        <option value="80">
                                                                            Gabon </option>
                                                                        <option value="81">
                                                                            Gambia </option>
                                                                        <option value="82">
                                                                            Georgia </option>
                                                                        <option value="83">
                                                                            Germany </option>
                                                                        <option value="84">
                                                                            Ghana </option>
                                                                        <option value="85">
                                                                            Gibraltar </option>
                                                                        <option value="86">
                                                                            Greece </option>
                                                                        <option value="87">
                                                                            Greenland </option>
                                                                        <option value="88">
                                                                            Grenada </option>
                                                                        <option value="89">
                                                                            Guadaloupe </option>
                                                                        <option value="90">
                                                                            Guam </option>
                                                                        <option value="91">
                                                                            Guatemala </option>
                                                                        <option value="92">
                                                                            Guernsey </option>
                                                                        <option value="93">
                                                                            Guinea </option>
                                                                        <option value="94">
                                                                            Guinea-Bissau </option>
                                                                        <option value="95">
                                                                            Guyana </option>
                                                                        <option value="96">
                                                                            Haiti </option>
                                                                        <option value="97">
                                                                            Heard Island and McDonald Islands </option>
                                                                        <option value="98">
                                                                            Honduras </option>
                                                                        <option value="99">
                                                                            Hong Kong </option>
                                                                        <option value="100">
                                                                            Hungary </option>
                                                                        <option value="101">
                                                                            Iceland </option>
                                                                        <option value="102">
                                                                            India </option>
                                                                        <option value="103">
                                                                            Indonesia </option>
                                                                        <option value="104">
                                                                            Iran </option>
                                                                        <option value="105">
                                                                            Iraq </option>
                                                                        <option value="106">
                                                                            Ireland </option>
                                                                        <option value="107">
                                                                            Isle of Man </option>
                                                                        <option value="108">
                                                                            Israel </option>
                                                                        <option value="109">
                                                                            Italy </option>
                                                                        <option value="54">
                                                                            Ivory Coast </option>
                                                                        <option value="110">
                                                                            Jamaica </option>
                                                                        <option value="111">
                                                                            Japan </option>
                                                                        <option value="112">
                                                                            Jersey </option>
                                                                        <option value="113">
                                                                            Jordan </option>
                                                                        <option value="114">
                                                                            Kazakhstan </option>
                                                                        <option value="115">
                                                                            Kenya </option>
                                                                        <option value="116">
                                                                            Kiribati </option>
                                                                        <option value="117">
                                                                            Kosovo </option>
                                                                        <option value="118">
                                                                            Kuwait </option>
                                                                        <option value="119">
                                                                            Kyrgyzstan </option>
                                                                        <option value="120">
                                                                            Laos </option>
                                                                        <option value="121">
                                                                            Latvia </option>
                                                                        <option value="122">
                                                                            Lebanon </option>
                                                                        <option value="123">
                                                                            Lesotho </option>
                                                                        <option value="124">
                                                                            Liberia </option>
                                                                        <option value="125">
                                                                            Libya </option>
                                                                        <option value="126">
                                                                            Liechtenstein </option>
                                                                        <option value="127">
                                                                            Lithuania </option>
                                                                        <option value="128">
                                                                            Luxembourg </option>
                                                                        <option value="129">
                                                                            Macao </option>
                                                                        <option value="130">
                                                                            Macedonia </option>
                                                                        <option value="131">
                                                                            Madagascar </option>
                                                                        <option value="132">
                                                                            Malawi </option>
                                                                        <option value="133">
                                                                            Malaysia </option>
                                                                        <option value="134">
                                                                            Maldives </option>
                                                                        <option value="135">
                                                                            Mali </option>
                                                                        <option value="136">
                                                                            Malta </option>
                                                                        <option value="137">
                                                                            Marshall Islands </option>
                                                                        <option value="138">
                                                                            Martinique </option>
                                                                        <option value="139">
                                                                            Mauritania </option>
                                                                        <option value="140">
                                                                            Mauritius </option>
                                                                        <option value="141">
                                                                            Mayotte </option>
                                                                        <option value="142">
                                                                            Mexico </option>
                                                                        <option value="143">
                                                                            Micronesia </option>
                                                                        <option value="144">
                                                                            Moldava </option>
                                                                        <option value="145">
                                                                            Monaco </option>
                                                                        <option value="146">
                                                                            Mongolia </option>
                                                                        <option value="147">
                                                                            Montenegro </option>
                                                                        <option value="148">
                                                                            Montserrat </option>
                                                                        <option value="149">
                                                                            Morocco </option>
                                                                        <option value="150">
                                                                            Mozambique </option>
                                                                        <option value="151">
                                                                            Myanmar (Burma) </option>
                                                                        <option value="152">
                                                                            Namibia </option>
                                                                        <option value="153">
                                                                            Nauru </option>
                                                                        <option value="154">
                                                                            Nepal </option>
                                                                        <option value="155">
                                                                            Netherlands </option>
                                                                        <option value="156">
                                                                            New Caledonia </option>
                                                                        <option value="157">
                                                                            New Zealand </option>
                                                                        <option value="158">
                                                                            Nicaragua </option>
                                                                        <option value="159">
                                                                            Niger </option>
                                                                        <option value="160">
                                                                            Nigeria </option>
                                                                        <option value="161">
                                                                            Niue </option>
                                                                        <option value="162">
                                                                            Norfolk Island </option>
                                                                        <option value="163">
                                                                            North Korea </option>
                                                                        <option value="164">
                                                                            Northern Mariana Islands </option>
                                                                        <option value="165">
                                                                            Norway </option>
                                                                        <option value="166">
                                                                            Oman </option>
                                                                        <option value="167">
                                                                            Pakistan </option>
                                                                        <option value="168">
                                                                            Palau </option>
                                                                        <option value="169">
                                                                            Palestine </option>
                                                                        <option value="170">
                                                                            Panama </option>
                                                                        <option value="171">
                                                                            Papua New Guinea </option>
                                                                        <option value="172">
                                                                            Paraguay </option>
                                                                        <option value="173">
                                                                            Peru </option>
                                                                        <option value="174">
                                                                            Phillipines </option>
                                                                        <option value="175">
                                                                            Pitcairn </option>
                                                                        <option value="176">
                                                                            Poland </option>
                                                                        <option value="177">
                                                                            Portugal </option>
                                                                        <option value="178">
                                                                            Puerto Rico </option>
                                                                        <option value="179">
                                                                            Qatar </option>
                                                                        <option value="180">
                                                                            Reunion </option>
                                                                        <option value="181">
                                                                            Romania </option>
                                                                        <option value="182">
                                                                            Russia </option>
                                                                        <option value="183">
                                                                            Rwanda </option>
                                                                        <option value="184">
                                                                            Saint Barthelemy </option>
                                                                        <option value="185">
                                                                            Saint Helena </option>
                                                                        <option value="186">
                                                                            Saint Kitts and Nevis </option>
                                                                        <option value="187">
                                                                            Saint Lucia </option>
                                                                        <option value="188">
                                                                            Saint Martin </option>
                                                                        <option value="189">
                                                                            Saint Pierre and Miquelon </option>
                                                                        <option value="190">
                                                                            Saint Vincent and the Grenadines </option>
                                                                        <option value="191">
                                                                            Samoa </option>
                                                                        <option value="192">
                                                                            San Marino </option>
                                                                        <option value="193">
                                                                            Sao Tome and Principe </option>
                                                                        <option value="194">
                                                                            Saudi Arabia </option>
                                                                        <option value="195">
                                                                            Senegal </option>
                                                                        <option value="196">
                                                                            Serbia </option>
                                                                        <option value="197">
                                                                            Seychelles </option>
                                                                        <option value="198">
                                                                            Sierra Leone </option>
                                                                        <option value="199">
                                                                            Singapore </option>
                                                                        <option value="200">
                                                                            Sint Maarten </option>
                                                                        <option value="201">
                                                                            Slovakia </option>
                                                                        <option value="202">
                                                                            Slovenia </option>
                                                                        <option value="203">
                                                                            Solomon Islands </option>
                                                                        <option value="204">
                                                                            Somalia </option>
                                                                        <option value="205">
                                                                            South Africa </option>
                                                                        <option value="206">
                                                                            South Georgia and the South Sandwich Islands
                                                                        </option>
                                                                        <option value="207">
                                                                            South Korea </option>
                                                                        <option value="208">
                                                                            South Sudan </option>
                                                                        <option value="209">
                                                                            Spain </option>
                                                                        <option value="210">
                                                                            Sri Lanka </option>
                                                                        <option value="211">
                                                                            Sudan </option>
                                                                        <option value="212">
                                                                            Suriname </option>
                                                                        <option value="213">
                                                                            Svalbard and Jan Mayen </option>
                                                                        <option value="214">
                                                                            Swaziland </option>
                                                                        <option value="215">
                                                                            Sweden </option>
                                                                        <option value="216">
                                                                            Switzerland </option>
                                                                        <option value="217">
                                                                            Syria </option>
                                                                        <option value="218">
                                                                            Taiwan </option>
                                                                        <option value="219">
                                                                            Tajikistan </option>
                                                                        <option value="220">
                                                                            Tanzania </option>
                                                                        <option value="221">
                                                                            Thailand </option>
                                                                        <option value="222">
                                                                            Timor-Leste (East Timor)</option>
                                                                        <option value="223">
                                                                            Togo</option>
                                                                        <option value="224">
                                                                            Tokelau</option>
                                                                        <option value="225">
                                                                            Tonga</option>
                                                                        <option value="226">
                                                                            Trinidad and Tobago</option>
                                                                        <option value="227">
                                                                            Tunisia</option>
                                                                        <option value="228">
                                                                            Turkey</option>
                                                                        <option value="229">
                                                                            Turkmenistan</option>
                                                                        <option value="230">
                                                                            Turks and Caicos Islands</option>
                                                                        <option value="231">
                                                                            Tuvalu</option>
                                                                        <option value="232">
                                                                            Uganda</option>
                                                                        <option value="233">
                                                                            Ukraine</option>
                                                                        <option value="234">
                                                                            United Arab Emirates</option>
                                                                        <option value="235">
                                                                            United Kingdom</option>
                                                                        <option value="236">
                                                                            United States</option>
                                                                        <option value="237">
                                                                            United States Minor Outlying Islands
                                                                        </option>
                                                                        <option value="238">
                                                                            Uruguay</option>
                                                                        <option value="239">
                                                                            Uzbekistan</option>
                                                                        <option value="240">
                                                                            Vanuatu</option>
                                                                        <option value="241">
                                                                            Vatican City</option>
                                                                        <option value="242">
                                                                            Venezuela</option>
                                                                        <option value="243">
                                                                            Vietnam</option>
                                                                        <option value="244">
                                                                            Virgin Islands, British</option>
                                                                        <option value="245">
                                                                            Virgin Islands, US</option>
                                                                        <option value="246">
                                                                            Wallis and Futuna</option>
                                                                        <option value="247">
                                                                            Western Sahara</option>
                                                                        <option value="248">
                                                                            Yemen</option>
                                                                        <option value="249">
                                                                            Zambia</option>
                                                                        <option value="250">
                                                                            Zimbabwe</option>
                                                                    </select>
                                                                    <label for="education-fields_0_country"
                                                                        class="form-control-placeholder">
                                                                        Country</label>

                                                                    <div class="invalid-feedback">
                                                                        This field is required.
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                                <!-- Repeater Remove Btn -->
                                                <div class="pull-right repeater-remove-btn mt-2">
                                                    <button type="button" class="btn btn-secondary remove-btn"
                                                        onclick="$(this).parents('.items').remove()">
                                                        Remove
                                                    </button>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <!-- Repeater Items -->

                                            <div id="education-template" class="d-none">
                                                <div class="form-row form-data">
                                                    <form action=""
                                                        class=" form-row  education_form_fields-before needs-validation"
                                                        novalidate="">
                                                        <input type="hidden" name="id" id="id">
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="school" name="school"
                                                                    data-name="school" required=""
                                                                    placeholder="School or university"
                                                                    class="form-control" maxlength="">
                                                                <label for="school" class="form-control-placeholder">
                                                                    School</label>

                                                                <div class="invalid-feedback">
                                                                    This field is required.
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="major" name="major"
                                                                    data-name="major" placeholder="Major"
                                                                    class="form-control" maxlength="">
                                                                <label for="major" class="form-control-placeholder">
                                                                    Major</label>

                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="month_started"
                                                                    name="month_started" data-name="month_started"
                                                                    date-field="" data-date="Y-m-d" required=""
                                                                    placeholder="Started"
                                                                    class="form-control flatpickr-input" maxlength=""
                                                                    readonly="readonly">
                                                                <label for="month_started"
                                                                    class="form-control-placeholder">
                                                                    Started</label>

                                                                <div class="invalid-feedback">
                                                                    This field is required.
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="month_finished"
                                                                    name="month_finished" data-name="month_finished"
                                                                    date-field="" data-date="Y-m-d"
                                                                    placeholder="Finished"
                                                                    class="form-control flatpickr-input" maxlength=""
                                                                    readonly="readonly">
                                                                <label for="month_finished"
                                                                    class="form-control-placeholder">
                                                                    Finished</label>

                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class="form-label-group mt-2 mt-2">
                                                                <select class="custom-select d-block w-100" id="gpa"
                                                                    name="gpa" placeholder="gpa" value="" required="">
                                                                    <option value="0">Very Low (Grade E Average,
                                                                        40% or less, GPA 1.5 orless)</option>

                                                                    <option value="1"> Below average - (Grade D
                                                                        Average, 45%- 55%, GPA 1.5-2)</option>
                                                                    <option value="2"> Average level - (Grade
                                                                        C-B, 55% - 60%, GPA 2-2.5%)
                                                                    </option>
                                                                    <option value="3"> Above average - (Grade
                                                                        B-A, 60-70%, GPA 2.5-3)
                                                                    </option>
                                                                    <option value="4"> Exceptional - (Grade A,
                                                                        70%+, GPA 3+)</option>
                                                                </select>
                                                                <label for="gpa">GPA</label>
                                                            </div>

                                                        </div>
                                                        <div class="col-12 col-sm-6">
                                                            <div class=" form-label-group mt-2">

                                                                <input type="text" id="country" name="country"
                                                                    data-name="country" placeholder="Country name"
                                                                    class="form-control" maxlength="">
                                                                <label for="country" class="form-control-placeholder">
                                                                    Country</label>

                                                            </div>
                                                        </div>
                                                        <div class="pull-right repeater-remove-btn mt-2">
                                                            <button type="button" class="btn btn-secondary remove-btn"
                                                                onclick="deleteSchool($(this))">
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>

                                        </div>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>