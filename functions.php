<?php

include 'includes/custom_post_types.php';
show_admin_bar(false);
add_filter( 'use_default_gallery_style', '__return_false' );
remove_filter( 'the_content', 'wpautop' );

// INCLUDING CSS & JS

function custom_enqueu(){
	wp_enqueue_style('fonts',"//fonts.googleapis.com/css?family=Lato:100,300,400,700,900&subset=latin-ext",array(),'1.0.','all');
	wp_enqueue_style('customstyle',get_template_directory_uri(). '/public/css/styles.css',array(),'1.0.','all');
	wp_enqueue_style('slick1',get_template_directory_uri(). '/slick/slick.css',array(),'1.0.','all');
	wp_enqueue_style('slick2',get_template_directory_uri(). '/slick/slick-theme.css',array(),'1.0.','all');
	wp_enqueue_script('customjs',get_template_directory_uri(). '/public/js/all.js',array(),'1.0.',true);
	wp_enqueue_script('slickjs',get_template_directory_uri(). '/slick/slick.min.js',array(),'1.0.',true);
	wp_enqueue_script('jquerycstom', 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js', true, '1.12.0');
	
}
add_action('wp_enqueue_scripts','custom_enqueu');

//THEME FEATURED

function custom_options(){
	add_theme_support( 'post-thumbnails' );
	add_theme_support('menus');
	add_theme_support('html5',array('search-form'));
	register_nav_menu('header','Header-menu');
	register_nav_menu('footer','Footer-menu');
}
add_action('init','custom_options');