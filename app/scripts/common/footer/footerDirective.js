define(['angular' ,'text!common/footer/footerView.html', 'common/footer/footerCtrl'], function (angular, footerTemplate, footerCtrl) {
  'use strict';

    /* Footer Directive */
return  function() {
  return{
            restrict: 'A',
            template: footerTemplate,
            controller: footerCtrl
        };
      };
});