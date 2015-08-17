define(['angular' ,'text!common/header/headerView.html', 'common/header/headerCtrl'], function (angular, headerTemplate, headerCtrl) {
  'use strict';

    /* Header Directive */
return  function() {
  return{
            restrict: 'A',
            template: headerTemplate,
            controller: headerCtrl
        };
      };
});