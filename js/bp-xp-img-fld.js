/*
 * Script for BuddyPress XProfile Image Field plugin
 * Version:  2.0.0
 * Author : Alex Githatu
 */

(

    function(jQ){
        // exists method (http://stackoverflow.com/questions/31044/is-there-an-exists-function-for-jquery)
        jQuery.fn.exists = function(){
            return this.length > 0;
        };

        //outerHTML method (http://stackoverflow.com/a/5259788/212076)
        jQ.fn.outerHTML = function() {
            $t = jQ(this);
            if( "outerHTML" in $t[0] ){ 
                return $t[0].outerHTML; 
            }
            else
            {
                var content = $t.wrap('<div></div>').parent().html();
                $t.unwrap();
                return content;
            }
        };

        bpxpif =
        {

            init : function(){
                if(VersionCompare.lte(bpxpL10n.bpVersion, '2.0.2')) {
                    if(jQ("div#poststuff select#fieldtype").exists()){

                        if(!jQ('div#poststuff select#fieldtype option[value="image"]').exists()){
                            var imageOption = '<optgroup label="' + bpxpL10n.customFieldsLabel + '"><option value="image">' + bpxpL10n.imageOptionLabel + '</option></optgroup>';
                            jQ("div#poststuff select#fieldtype").append(imageOption);

                            var selectedOption = jQ("div#poststuff select#fieldtype").find("option:selected");
                            if((selectedOption.length === 0) || (selectedOption.outerHTML().search(/selected/i) < 0)){
                                var action = jQ("div#poststuff").parent().attr("action");

                                if (action.search(/mode=edit_field/i) >= 0){
                                    jQ('div#poststuff select#fieldtype option[value="image"]').attr("selected", "selected");
                                }
                            }
                        }

                    }
                }
                
                // update the edit form's enctype. this assumes BP Default theme and its child themes
                if(jQ("#profile-edit-form").exists()){
                    
                    jQ("#profile-edit-form").attr("enctype", "multipart/form-data");

                    // prevent html5 validation from falsely enforcing "required" input for image fields 
                    // that already have images saved
                    jQ("#profile-edit-form").attr("novalidate", "novalidate");
                    
                }
                
                if(VersionCompare.gt(bpxpL10n.bpVersion, '2.0.2')) {
                    // update the admin profile edit form's enctype.
                    if(jQ("#your-profile").exists()){

                        jQ("#your-profile").attr("enctype", "multipart/form-data");

                    }
                }
                
                //image delete handling
                if(jQ("a.rtd-button").exists()){

                    jQ("a.rtd-button").click(function (e) {
                                       e.preventDefault();
                                       bpxpif.handleImageDelete(this);
                    });

                }

                if(VersionCompare.gt(bpxpL10n.bpVersion, '2.0.2')) {
                    // display the submitted images during user activation on the Admin dashboard
                    bpxpif.displayImageInUserActivation();
                }
            },

            handleImageDelete : function(deleteButton){
                
                var imageId = jQ(deleteButton).attr("data-image_id");
                var deleteMsgId = jQ(deleteButton).attr("data-delete_id");
                
                jQ("#" + imageId).hide();
                jQ("#" + deleteMsgId).val("deleted");
                jQ(deleteButton).hide();
                
            },

            displayImageInUserActivation : function(){
                
                if(jQ("ol.bp-signups-list").exists()){
                    
                    var userList = jQ("ol.bp-signups-list");
                    var tableCells = jQ(userList).find("td");
                    var currentDomain = window.location.host;
                    var imageUrlRegex = new RegExp('(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*\\.(?:jpe?g|gif|png))(?:\\?([^#]*))?(?:#(.*))?');
                    
                    if(tableCells.length > 0) {
                        jQ(tableCells).each( function(index) {
                            
                            var cell = jQ(this);
                            var cellText = jQ(cell).text();

                            if (imageUrlRegex.test(cellText)) {
                                debugger;
                                var imageUrl = new URL(cellText);
                                
                                if(imageUrl.host === currentDomain) {
                                    
                                    var imageElement = "<img src='" + imageUrl.href + "' />";

                                    jQ(cell).html(imageElement);
                                }
                            }


                        });
                    }


                }
                
            }

        };

        jQ(document).ready(function(){
            bpxpif.init();
        });

    }

)(jQuery);