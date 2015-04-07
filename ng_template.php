<?php
/**
 * Plugin Name: ng-template
 * Plugin URI: https://github.com/stepankarslyan
 * Description: Wordpress plugin for adding AngularJS pages in wordpress.
 * Version: 1.0.1
 * Author: Stepan Karslyan
 * Author URI: stepan.karslyan@gmail.com
 * License: A short license name. Example: GPL2
 */

include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

if (!is_plugin_active('user-role-editor/user-role-editor.php') || !is_plugin_active('menu-items-visibility-control/init.php')) {

	add_action('admin_notices', 'add_dependent_plugin');
	return;
    
}

function add_dependent_plugin() {
  
  echo '<div id="message" class="error fade"><p style="line-height: 150%">';  
  
  _e('<strong>Ng-template</strong></a> requires the User Role Editor and Menu-Items-Visibility-Control  plugins to be activated. Please <a href="https://wordpress.org/plugins/user-role-editor/‎">User-Role-Editor</a> and <a href="https://wordpress.org/plugins/menu-items-visibility-control/‎">Menu-Items-Visibility-Control</a> install first.', 'ng-template');

  echo '</p></div>';

}


//creating a custom page
function auto_create_page() {
    
//the main page content


  	$page_content = '<script src="/wp-content/plugins/ng-template/ng/lib/angular/angular.min.js"></script>
		<script src="/wp-content/plugins/ng-template/ng/lib/angular/ng-route.min.js"></script>
		<script src="/wp-content/plugins/ng-template/ng/lib/jquery/jquery.min.js"></script>
		<link rel="/wp-content/plugins/ng-template/ng/lib/bootstrap/css/bootstrap.min.js">
		<div ng-app="app">
			<div ng-view></div>
		<div>
		<script src="/wp-content/plugins/ng-template/ng/js/app.js"></script>
		<script src="/wp-content/plugins/ng-template/ng/js/controller/userCtrl.js"></script>
		<script src="/wp-content/plugins/ng-template/ng/js/controller/detailCtrl.js"></script>
		<script src="/wp-content/plugins/ng-template/ng/js/service/userService.js"></script>
	';
  //custom page
	$my_ng_page = array(
	  
	  'post_title'    => 'Angular page',
	  'post_author'   => 'stepan',
	  'post_content'  => $page_content,
	  'post_status'   => 'publish',
	  'post_type'     => 'page'
	);

  //inseting page automatically
wp_insert_post($my_ng_page);
  
}

//function to run when plugin is activated
function run_at_activation(){
  	auto_create_page();
  
}

//function to run when plugin is activated
function run_at_deactivation(){
  $my_page = get_page_by_title( 'Angular page', OBJECT, 'page' );
  
  if($my_page -> ID) {
  	wp_delete_post($my_page -> ID);
  }
  	 
}

register_activation_hook( __FILE__, 'run_at_activation' );

register_deactivation_hook( __FILE__, 'run_at_deactivation' );
