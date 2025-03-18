<?php
/**
 * Proper way to enqueue scripts and styles
 */
function wpdocs_dinlink_theme_scripts( )  {

	/*--CSS Link ---------- */

	
	//wp_enqueue_style( 'dinlink-style', get_template_directory_uri()  .  "assets/css/dinlink-style.css");
	wp_enqueue_style( 'dinlink-style-sass', get_template_directory_uri()  .  "assets/sass/dinlink-style.css");
	//wp_enqueue_style( 'dinlink-media', get_template_directory_uri()  .  "assets/css/dinlink-media.css");
	wp_enqueue_style( 'dinlink-media-sass', get_template_directory_uri()  .  "assets/sass/dinlink-Media-query.css");
	//wp_enqueue_style( 'dinlink-utilities', get_template_directory_uri()  .  "assets/css/dinlink-utilities.css");
	wp_enqueue_style( 'dinlink-utilities-sass', get_template_directory_uri()  .  "assets/sass/utilities.css");
	//wp_enqueue_style( 'dinlink-global-elements', get_template_directory_uri()  .  "assets/css/global-elements.css");
	wp_enqueue_style( 'dinlink-global-elements-sass', get_template_directory_uri()  .  "assets/sass/dinlink-global-elements.css");



	/*-- Fonts Link --------*/
	wp_enqueue_style( 'fontawesome', get_template_directory_uri()  .  'assets/css/' );
	wp_enqueue_style( 'roboto',  'https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap' );

	/* JavaScript Link --- */
	wp_enqueue_script( 'custom-js', get_template_directory_uri() . 'assets/js/custom.js', array(), '1.0.0', true );
	wp_enqueue_script( 'script-js', get_template_directory_uri() . 'assets/js/script.js', array(), '1.0.0', true );

}
add_action( 'wp_enqueue_scripts', 'wpdocs_dinlink_theme_scripts' );

 // Register a new navigation menu
function add_Main_Nav() {
  register_nav_menu('header-menu',__( 'Header Menu' ));

}
// Hook to the init action hook, run our navigation menu function
add_action( 'init', 'add_Main_Nav' );


// Registering Secondary Menu
function register_secondary_menu() {
    register_nav_menu('secondary-menu', __('Secondary Menu'));
}
add_action('after_setup_theme', 'register_secondary_menu');




// Register Shortcodes
add_shortcode('dinlink_design_guide',  'generate_shortcode');
//add_action('vc_before_init','generate_vc')

function generate_shortcode(){
	return '                    <div class="col-md-6 col-lg-4  ">
                        <div class="feat flex-col">
                            <h3><span class="capital-letter ">D</span>esign Rules</h3>
                            <span class="feat-title text-capitalize fw-medium  ">Guiding Creativity</span>
                            <p class="feat-text">Are guidelines that ensure consistency, functionality, and aesthetic appeal in a
                                design. They govern elements like composition, balance, and usability, resulting in impactful and
                                visually pleasing products.
                            </p>
                            <a href="#" class="btn">learn more</a>
                        </div>
                    </div>';
}

