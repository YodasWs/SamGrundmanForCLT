'use strict';angular.module('compSocialLinks',[]);angular.module('compSocialLinks').component('socialLinks',{templateUrl:'components/social-links/social-links.html',controller:function controller(){}});angular.module('myBooks',['compSocialLinks','ngRoute']).config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider){$routeProvider.when('/',{templateUrl:'pages/home.html',controller:function controller(){angular.element('[ng-view]').attr('ng-view','pageHome')}}).otherwise({redirectTo:'/'})}]).filter('strDate',function(){return function(date){if(typeof date==='string'){date=new Date(date)}return date.toLocaleString(undefined,{year:'numeric',month:'short',day:'numeric'})}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc29jaWFsLWxpbmtzL21vZHVsZS5qcyIsImNvbXBvbmVudHMvc29jaWFsLWxpbmtzL3NvY2lhbC1saW5rcy5qcyIsImFwcC5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29tcG9uZW50IiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwiY29uZmlnIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJlbGVtZW50IiwiYXR0ciIsIm90aGVyd2lzZSIsInJlZGlyZWN0VG8iLCJmaWx0ZXIiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwidW5kZWZpbmVkIiwieWVhciIsIm1vbnRoIiwiZGF5Il0sIm1hcHBpbmdzIjoiYUFBQUEsUUFBQUMsTUFBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxFQUNBRCxRQUFBQyxNQUFBLENBQUEsaUJBQUEsRUFDQUMsU0FEQSxDQUNBLGFBREEsQ0FDQSxDQUNBQyxZQUFBLDJDQURBLENDRkFDLFVERUEsc0JDRkEsQ0FDQSxDRENBLENBREEsRUNFQUosUUFBQUMsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUNBLGlCQURBLENBRUEsU0FGQSxDQUFBLEVBSUFJLE1BSkEsQ0FJQSxDQUFBLG1CQUFBLENBQUEsZ0JBQUEsQ0FBQSxTQUFBQyxpQkFBQSxDQUFBQyxjQUFBLENBQUEsQ0FDQUEsZUFBQUMsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQ1JBTCxZQUFBLGlCRFFBLENDUEFDLFdBQUEscUJBQUEsQ0FDQUosUUFBQVMsT0FBQSxDQUFBLFdBQUEsRUFBQUMsSUFBQSxDQUFBLFNBQUEsQ0FBQSxVQUFBLENBQ0EsQ0RLQSxDQUFBLEVDSEFDLFNER0EsQ0NIQSxDQUFBQyxXQUFBLEdBQUEsQ0RHQSxDQ0ZBLENEQ0EsQ0FKQSxFQ0lBQyxNREpBLENDSUEsU0RKQSxDQ0lBLFVBQUEsQ0FDQSxNQUFBLFVBQUFDLElBQUEsQ0FBQSxDQUNBLEdBQUEsTUFBQUEsS0FBQSxHQUFBLFFBQUEsQ0FBQSxDQUNBQSxLQUFBLEdBQUFDLEtBQUEsQ0FBQUQsSUFBQSxDQUNBLENBQ0EsTUFBQUEsTUFBQUUsY0FBQSxDQUFBQyxTQUFBLENBQUEsQ0FDQUMsS0FBQSxTQURBLENBRUFDLE1BQUEsT0FGQSxDQUdBQyxJQUFBLFNBSEEsQ0FBQSxDQUtBLENBQ0EsQ0RmQSIsImZpbGUiOiJtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdjb21wU29jaWFsTGlua3MnLCBbXSlcbiIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ2NvbXBTb2NpYWxMaW5rcycpXG4uY29tcG9uZW50KCdzb2NpYWxMaW5rcycsIHtcblx0dGVtcGxhdGVVcmw6ICdjb21wb25lbnRzL3NvY2lhbC1saW5rcy9zb2NpYWwtbGlua3MuaHRtbCcsXG5cdGNvbnRyb2xsZXIoKSB7XG5cdH1cbn0pXG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdteUJvb2tzJywgW1xuXHQnY29tcFNvY2lhbExpbmtzJyxcblx0J25nUm91dGUnLFxuXSlcbi5jb25maWcoWyckbG9jYXRpb25Qcm92aWRlcicsICckcm91dGVQcm92aWRlcicsIGZ1bmN0aW9uKCRsb2NhdGlvblByb3ZpZGVyLCAkcm91dGVQcm92aWRlcikge1xuXHQkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xuXHRcdHRlbXBsYXRlVXJsOiAncGFnZXMvaG9tZS5odG1sJyxcblx0XHRjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcblx0XHRcdGFuZ3VsYXIuZWxlbWVudCgnW25nLXZpZXddJykuYXR0cignbmctdmlldycsICdwYWdlSG9tZScpXG5cdFx0fSxcblx0fSlcblx0Lm90aGVyd2lzZSh7cmVkaXJlY3RUbzogJy8nfSlcbn1dKVxuLmZpbHRlcignc3RyRGF0ZScsICgpID0+IHtcblx0cmV0dXJuIGZ1bmN0aW9uKGRhdGUpIHtcblx0XHRpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRkYXRlID0gbmV3IERhdGUoZGF0ZSlcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XG5cdFx0XHR5ZWFyOiAnbnVtZXJpYycsXG5cdFx0XHRtb250aDogJ3Nob3J0Jyxcblx0XHRcdGRheTogJ251bWVyaWMnLFxuXHRcdH0pXG5cdH1cbn0pXG4iXX0=
