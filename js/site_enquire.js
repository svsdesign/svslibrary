/**
 *
 * _SITE_TITLE
 * _DATE
 * Author: Simon van Stipriaan
 * http://svs.design 
 * 
 * handles the serving up of scripts for the entire website
 *
 */

 



jQuery(document).ready(function($) {

var app = (function() {
  var app = {
    _setEnquireMsgs: function() {
      // Media queries breakpoints
      // MQ integers

 
      var screenBase = 1;
      var screenoutBase = 319;
      var screenXXS = 320;
      var screenoutXXS = 399;
      var screenXS = 400;
      var screenoutXS = 599;
      var screenSM = 600;
      var screenoutSM = 767;
      var screenMD = 768;
      var screenoutMD = 911;
      var screenLG = 912;
      var screenoutLG = 1279;
      var screenXLG = 1280;
      var screenoutXLG = 9999; // extra large number so the last media querry doesn't fall outside any screensize as it increases from 1280


      // Define media queries using MQ variables
      var mQueryBase = 'screen and (min-width:' + screenBase + 'px) and (max-width:' + screenoutBase + 'px)';     // query that acts as starting point  
      var mQueryXXS = 'screen and (min-width:' + screenXXS + 'px) and (max-width:' + screenoutXXS + 'px)';        // query that acts going into XXS   
      var mQueryXS = 'screen and (min-width:' + screenXS + 'px) and (max-width:' + screenoutXS + 'px)';           // query that acts going into XS   
      var mQuerySM = 'screen and (min-width:' + screenSM + 'px) and (max-width:' + screenoutSM + 'px)';           // query that acts going into SM     
      var mQueryMD = 'screen and (min-width:' + screenMD + 'px) and (max-width:' + screenoutMD + 'px)';           // query that acts going into MD 
      var mQueryfromMD = 'screen and (min-width:' + screenMD + 'px)';                                             // query that acts going from MD
      var mQueryuptoLG = 'screen and (max-width:' + screenoutMD + 'px)';                                          // query that acts upto LG
      var mQueryLG = 'screen and (min-width:' + screenLG + 'px) and (max-width:' + screenoutXLG + 'px)';          // query that acts going into LG
      var mQueryfromLG = 'screen and (min-width:' + screenLG + 'px)';                                             // query that acts going from LG
      var mQueryXLG = 'screen and (min-width:' + screenXLG + 'px)';                                               // query that acts going into XLG

 
      //NOTES: scripts that 'go upto' will possibly run after the smaller Query scripts - resulting in clashes.



      // 1. START QUERRIES BASED ONLY ON PAGE CLASSES: NO widths involved. 





             $(function () // on document.ready()
                  {
                      if ($('body').length > 0) 
                      {
                
                          //console.log('query that runs body');
                            

                                  //$.getScript("../file.js", function(){
                                  
                                     // Use anything defined in the loaded logo script...
                                
                                  // });

               

                /*
              body
              */

                      }
                  });
 
                  
    

    // 1. END QUERRIES BASED ONLY ON PAGE CLASSES: NO widths invovled. 
     
    // 1B. START GLOBAL FUNCTIONS 

 

           function function_name() {

        //

          }; //function_name

   



      // 2. START QUERRIES BASED ON WIDTH ENQUIRIES



                  //
                  //
                  //
                  // 'screenBase' media query

                  enquire.register(mQueryBase, function() {
               
                  //
                  //  console.log('query that runs + 1 and goes upto 319');
                  //  console.log('mQueryBase'+mQueryBase+'');
                  //

                 /*  RUN JS IF IS HOME   -  + 1 and goes upto 319 */
               

                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {


                         
                  
                            //insert js HERE





                            /*
                            body.home
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS HOME -  + 1 and goes upto XS: 319 */
                 

                  //
                  //
                  //
             
                  });  // END screenBase query that acts as starting point: + 1 1 and goes upto XS: 319

                  //
                  //
                  //
              

                  //
                  //
                  //
                  // 'mQueryXXS' media query - query that acts going into XXS:    320 and goes upto SM: 399

                  enquire.register(mQueryXXS, function() {
               
                  //
                  //console.log('query that runs 320 and goes upto SM: 399 ');
                  //
                  //

            /*  RUN JS IF IS HOME   -  query that acts going into XXS:    320 and goes upto SM: 399 */
               

                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {

                 

                            //insert js HERE


               


                            /*
                            body.home
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS HOME   -  query that acts going into XXS:    320 and goes upto SM: 399 */

           
                  //
                  //
                  //
             
                  });  // END 'mQueryXXS' media query - query that acts going into XXS:    320 and goes upto SM: 399

                  //
                  //
                  //
                   
                  //
                  //
                  //
                  // 'mQueryXS' media query - query that acts going into XS:     400 and goes upto SM: 599

                  enquire.register(mQueryXS, function() {
               
                  //
                  //console.log('query that runs 400 and goes upto SM: 599 ');
                  //
                  //

            /*  RUN JS IF IS HOME   -  query that acts going into XS:     400 and goes upto SM: 599 */
               

                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {

                 

                            //insert js HERE


                   


                            /*
                            body.home
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS HOME  - query that acts going into XS:     400 and goes upto SM: 599 */
                 
            /*  RUN JS IF IS ABOUT  -  query that acts going into XS:     400 and goes upto SM: 599 */
               

               
                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {

                 

                            //insert js HERE


                   


                            /*
                            body.home
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS ABOUT - query that acts going into XS:     400 and goes upto SM: 599 */
                  

                  //
                  //
                  //
             
                  });  // END 'mQuerySM' media query - query that acts going into XS:     400 and goes upto SM: 599

                  //
                  //
                  //

                   
                  //
                  //
                  //
                  // 'mQuerySM' media query - query that acts going into SM:     600 and goes upto MD: 767

                  enquire.register(mQuerySM, function() {
               
                  //
                  //console.log('query that runs 600 and goes upto MD: 767 ');
                  //
                  //

            /*  RUN JS IF IS HOME   -  query that acts going into SM:     600 and goes upto MD: 767 */
               

                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {

                 

                            //insert js HERE


               


                            /*
                            body.home
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS HOME  - query that acts going into SM:     600 and goes upto MD: 767 */
                  
            /*  RUN JS IF IS ABOUT - query that acts going into SM:     600 and goes upto MD: 767 */
               

                        $(function () // on document.ready()
                        {
                            if ($('body.page-id-138').length > 0)
                            {

                 
 
                            /*
                            body.about
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS ABOUT  - query that acts going into SM:     600 and goes upto MD: 767 */

                  //
                  //
                  //
             
                  });  // END 'mQuerySM' media query - query that acts going into SM:     600 and goes upto MD: 767

                  //
                  //
                  //
                
                  //
                  //
                  //
                  // 'mQueryMD' media query - query that acts going into MD:     768 and goes upto LG: 911

                  enquire.register(mQueryMD, function() {
               
                  //
                  //console.log('query that runs 768 and goes upto LG: 911 ');
                  //
                  //

            /*  RUN JS IF IS HOME   -  query that acts going into MD:     768 and goes upto LG: 911 */

                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {

                 

                            //insert js HERE

                   

                            /*
                            body.home
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS HOME  - query that acts going into MD:     768 and goes upto LG: 911 */
                 
           /*  RUN JS IF IS ABOUT - query that acts going into MD:     768 and goes upto LG: 911  */
               

                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {

                 

                            //insert js HERE


                   


                            /*
                            body.home
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS ABOUT -  query that acts going into MD:     768 and goes upto LG: 911  */



                  //
                  //
                  //
             
                  });  // END 'mQueryMD' media query - query that acts going into MD:     768 and goes upto LG: 911

                  //
                  //
                  //

                
                  //
                  //
                  //
                  // 'mQueryfromMD' media query - query that acts going from MD:     768 +

                  enquire.register(mQueryfromMD, function() {
               
                  //
                  //console.log('query that acts going from MD: 768 + ');
                  //
                  //

        
                 
            /*  RUN JS IF IS /PROJECTS (archive)  -  query that acts going from MD: 768 +  */
 

                    
                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {

                 

                            //insert js HERE


                   


                            /*
                            body.home
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS /PROJECTS (archive)   - query that acts going from MD: 768 +  */
                 
        



                  //
                  //
                  //
             
                  });  // END 'mQueryMD' media query - query that acts going from MD: 768 + 

                  //
                  //
                  //


                  //
                  //
                  //
                  // 'mQueryuptoLG' media query - query that acts upto LG:     912 

                  enquire.register(mQueryuptoLG, function() {
               
                  //
                  // console.log('query that runs upto 912  ');
                  //
                  //

            /*  RUN JS IF IS   -  query that acts upto LG:     912  */
               

                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {

                 

                            //insert js HERE


                   


                            /*
                            body.home
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS HOME  - query that acts upto LG:   912  */
                 

                  //
                  //
                  //
             
                  });  // END 'mQueryuptoLG' media query - query that acts upto LG:     912 

                  //
                  //
                  //


                  //
                  //
                  //
                  // 'mQueryLG' media query - query that acts going into LG:     912 and goes upto XLG: 1279

                  enquire.register(mQueryLG, function() {
               
                  //
                  //console.log('query that runs 912 and goes upto XLG: 1279 ');
                  //
                  //

            /*  RUN JS IF IS HOME   -  query that acts going into LG:     912 and goes upto XLG: 1279 */
               

                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {
 

                            //insert js HERE




                            /*
                            body.home
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS HOME  - query that acts going into LG:     912 and goes upto XLG: 1279 */
           
             /*  RUN JS IF IS ___  -  query that acts going into LG:     912 and goes upto XLG: 1279 */
               

                     
                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {

                 

                            //insert js HERE


                   


                            /*
                            body.home
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS ___  - query that acts going into LG:     912 and goes upto XLG: 1279 */

            /*  RUN JS IF IS ABOUT - query that acts going into LG:     912 and goes upto XLG: 1279 */
               

                        
                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {

                 

                            //insert js HERE


                   


                            /*
                            body.home
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS ABOUT - query that acts going into LG:     912 and goes upto XLG: 1279 */
                     

                  //
                  //
                  //
             
                  });  // END 'mQueryLG' media query - query that acts going into LG:     912 and goes upto XLG: 1279

                  //
                  //
                  //

                  //
                  //
                  //
                  // 'mQueryfromLG' media query - query that acts from LG:     912 +

                  enquire.register(mQueryfromLG, function() {
               
                  //
                  //console.log('query that runs 912 + ');
                  //
                  //

            /*  RUN JS IF IS_ -  query that acts from LG:     912 + */
               

                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {

                 

                            //insert js HERE


                   


                            /*
                            body.home
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS ABOUT - query that acts from LG:     912 + */
                 
 


                  //
                  //
                  //
             
                  });  // END 'mQueryfromLG' media query - query that acts from LG:     912 +

                  //
                  //
                  //




                  //
                  //
                  //
                  // 'mQueryXLG' media query - query that acts going into XLG:    1280 +

                  enquire.register(mQueryXLG, function() {
               
                  //
                  //console.log('query that runs 1280 +');
                  //
                  //

            /*  RUN JS IF IS HOME   - query that acts going into XLG:    1280 + */
               

           
                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {

                 

                            //insert js HERE


                   


                            /*
                            body.home
                            */

                            }
                        });


            /*  END OF:  RUN JS IF IS home - query that acts going into XLG:    1280 + */
                 

                 

                  //
                  //
                  //
             
                  });  // END 'mQueryXLG' media query - query that acts going into XLG:    1280 +

                  //
                  //
                  //





      // 2. END QUERRIES BASED ON WIDTH ENQUIRIES



    },

    init: function() {
      this._setEnquireMsgs();
    }
  };

  return app;

}());


app.init();

}); ///  ENDS  read.QUERY

          

