
<?php
// Database connection
$servername = "localhost";
$username = "admin";
$password = "Ndeem84sally91";
$dbname = "dinSubscribe";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$fullname = $_POST['name'];
$email = $_POST['email'];

// SQL query to insert data into database
$sql = "INSERT INTO subscribers (fullname, email) VALUES ('$fullname', '$email')";

$response = array(); // Create an array to hold the response data

if ($conn->query($sql) === TRUE) {
    $response['success'] = true;
    $response['message'] = "You have been subscribed successfully!";
} else {
    $response['success'] = false;
    $response['message'] = "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();


// Display HTML along with the response message
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DinLink | Your Ultimate Web Development Toolkit</title>
    <meta name="description" content="Dinlink: Your go-to resource for web developers seeking the best tools! Discover curated collections of fonts, icons,
                images, and more to enhance your projects. Elevate your web development with handpicked tools for seamless design and
                functionality. Explore the ultimate toolkit at Dinlink and supercharge your creativity today! ">
    <meta name="keywords"
        content="Web development tools, Font resources for developers, Icon collections, High-quality images for websites, design resources, Web design assets,Developer toolkit, Creative assets for websites, Design resources for developers, Best web development tools, Iconography for websites, Professional fonts for web projects, Image libraries for developers, UI design elements, Code optimization tools, Responsive design resources">

    <link rel="icon" type="image/x-icon" href="assets/img/favicon/favicon.ico">
    <link rel="stylesheet" href="assets/sass/dinlink-style.css">
    <link rel="stylesheet" href="assets/sass/dinlink-Media-query.css">
    <link rel="stylesheet" href="assets/sass/dinlink-global-elements.css">
    <link rel="stylesheet" href="assets/fonts/fontIcon/css/all.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet">
<!-- Add your CSS styles here -->

</head>



<body>
<!-- Add your HTML styles here -->
    <!-- Section Header -->
    <section id="header" class="header sticky">
        <div class="header-content container flex">
            <a href="/index.html" id='logo' class="logo bold" title="DinLink | Your Ultimate Web Development Toolkit">
                <h1>DinLink</h1>
            </a>
            <!-- First Nav -->
            <nav class="first-nav main-nav capitalize">
                <ul class="navigation flex fw-500">
                    <!-- Design Guide -->
                    <li class="dropdown relative">
                        <a href="#">Design guide</a>
                        <ul class="submenu">
                            <li><a href="/design-guide.html"> Design Rules</a></li>
                            <li><a href="/ui-ux.html"> UI / UX</a></li>
                            <li><a href="/clean-code.html"> Clean Code</a></li>
                        </ul>
                    </li>
                    <li><a href="/ai-tools.html">AI tools</a></li>
                    <li><a href="/sdrh-section.html">Developers tools</a></li>
                    <li><a href="/free-download.html">download Center</a></li>
                    <li><a href="/seo.html">SEO</a></li>
                    <li><a href="/speed-test.html">Speed & Test</a></li>
                    <li><a href="/freelance.html">freelance</a></li>
                    <li><a href="#footer-line">contact dinlink</a></li>
                </ul>
            </nav>
        </div>

        <!-- Secondary Nav -->
        <div class="secondary-nav">
            <div class="container">
                <nav class="secondary-menu capitalize">
                    <ul class="navigation flex fw-500">
                        <li><a href="/html.html">HTML</a></li>
                        <li><a href="/css.html">CSS</a></li>
                        <li><a href="/javascript.html">JS</a></li>
                        <li><a href="/nodejs.html">NODEJS</a></li>
                        <li><a href="/wordpress.html">WORDPRESS</a></li>
                        <li><a href="/php.html">PHP</a></li>
                        <li><a href="/react.html">REACT</a></li>
                        <li><a href="/api.html">API</a></li>
                        <li><a href="/database.html">DATABASE</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <!-- Section End -->



    <!-- FOOTER Start   -->
    <section id="subscribe" class="subscribe  relative">
        <div class="shadow-dark">
            <div class="subscribe-content container  absolute ">
                <div class="subscripe-form ">

                    <div class="replay-ms">
                        <?php if ($response['success']): ?>
                            <p class="success-message"><?php echo $response['message']; ?></p>
                        <?php else: ?>
                            <p class="error-message"><?php echo $response['message']; ?></p>
                        <?php endif; ?>
                    </div>

                    <div class="social-media">
                        <h2 class="social-media-sup-title capitalize"> Contact DinLink at <span><a class="mail-address"
                                    href="mailto:info@dinlink.com">info@dinlink.com</a></span>
                        </h2>
                        <ul class="social-media-icons ">
                            <li class="facebook"><a href=""> <i class="fa-brands fa-facebook-f social-icon"></i></a>
                            </li>
                            <li class="instagram"><a href=""><i class="fa-brands fa-instagram  social-icon"></i></a><img
                                    src="" alt="">
                            </li>
                            <li class="linkedin"><a href=""><i
                                        class="fa-brands fa-linkedin-in  social-icon"></i></a><img src="" alt="">
                            </li>
                            <li class="x"><a href=""><i class="fa-brands fa-x-twitter  social-icon"></i></a><img src=""
                                    alt="">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- FOOTER End   -->

    <!-- FOOTER  LINE Start -->
    <footer id="footer-line" class="footer">
        <div class="container flex">
            <span class="copy-right ">All Copy Right Reserved &copy; Dinlink.se 2024</span>
            <span class="author "><a href="http://jonashousa.com/" target="_blank">DESIGNED BY JONAS HOUSA</a></span>

        </div>
    </footer>
    <!-- FOOTER  LINE End -->


        <script src="assets/js/script.js"></script>
    <script src="assets/js/slides.js"></script>
    <script src="assets/js/smoothScrollPage.js"></script>
    <script src="assets/js/animations.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scrollbar/8.7.3/smooth-scrollbar.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</body>
</html>
