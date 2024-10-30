=== BuddyPress XProfile Custom Image Field ===
Contributors: kalengi
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KWZPYPL527WVN
Tags: BuddyPress, XProfile, Image Field, Field, Image
Requires at least: 3.2.1
Tested up to: 6.6
Stable tag: 3.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

With the BPXPIF plugin you can add XProfile fields of type Image without writing any custom code.

== Description ==

The BuddyPress XProfile module does not support Image type fields. The BuddyPress XProfile Custom Image Field (BPXPIF) plugin allows you to add fields of type Image to a BuddyPress user profile. 

Images uploaded during User Registration can be viewed on the Manage Signups screen to allow the Site Administrator to review them before activating a new user account. 

The BPXPIF plugin has a number of action hooks that allow theme and plugin developers to modify its behavior.

This plugin requires BuddyPress minimum version 1.5 and has been tested up to BuddyPress version 14.0.0

== Installation ==

1. Upload `bp-xprofile-image-field` to the `/wp-content/plugins/` directory or use the automatic installation in the WordPress plugin panel.
2. Activate the plugin through the WordPress 'Plugins' menu

== Screenshots ==

1. Signup page 
2. Account activation page 
3. Profile fields admin page 
4. Image type profile field 

== Translations ==

* English - default
* Spanish translation by [Andrew Kurtis - WebHostingHub](http://www.webhostinghub.com/)

== Changelog ==

= 3.0.0 =
* Update BPXPIF to conform to the BuddyPress 14.0.0 policy that user accounts are not created during registration.

= 2.4.0 =
* Ensure that an Image field that has been set to Required passes validation during Signup when properly filled.

= 2.3.1 =
* Updated the field edit rendering to use <legend> in place of <label>. Issue: https://wordpress.org/support/topic/update-to-properly-show-field-name-in-tags-on-frontend-and-admin-forms/

= 2.3.0 =
* Added the ability to display images in the user activation admin screen

= 2.2.0 =
* Added the ability to display image links on Manage Signups screen. Issue: https://wordpress.org/support/topic/registration-upload-picture-make-fake-path-and-not-displayed-on-profil-user/#post-12572599

= 2.1.0 =
* Added the ability to delete an image from the server when it is removed from the user profile

= 2.0.3 =
* Updated plugin description

= 2.0.2 =
* Fixed a bug that was blocking image display on the member list page

= 2.0.1 =
* Added ability to upload images on admin backend profile edit

= 2.0.0 =
* Added support for BuddyPress 2.3.3

= 1.4.0 =
* Added support for saving profile images during user sign-up

= 1.3.3 =
* Minor bug fix

= 1.3.2 =
* Added Spanish translation

= 1.3.1 =
* Added language l10n support

= 1.3.0 =
* Added support for BuddyPress 2.0.1

= 1.2.0 =
* Added capability to delete an image 
* Add front end image display 

= 1.1.0 =
* fixed to prevent crashing the profile edit page on sites not using BuddyPress Default Theme 

= 1.0.0 =
* Initial release
