angular.module('starter', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .controller('AppCtrl', function ($scope, $timeout) {


        $scope.angularVersion = window.angular.version.full;
        $scope.ionicVersion = window.ionic.version;
        $scope.platform = window.ionic.Platform.platform();

        $scope.loginGoogle = function () {
            var ref = new Firebase("https://soccermobia.firebaseio.com/");
            $scope.authData = "Google";
                ref.authWithOAuthPopup("google", function (error, authData) {
                $timeout(function(){
                    $scope.authData = authData;
                })
            }, {
                remember: "sessiononly",
                scope: "profile,email,openid"
            });
        };

        $scope.loginFacebook = function () {
            var ref = new Firebase("https://soccermobia.firebaseio.com/");
            $scope.authData = "Facebook";
            ref.authWithOAuthPopup("facebook", function (error, authData) {
                $timeout(function(){
                    $scope.authData = authData;
                })
            }, {
                scope: "public_profile,email,user_friends"
            });
        };

        $scope.loginTwitter = function () {
            var ref = new Firebase("https://soccermobia.firebaseio.com/");
            $scope.authData = "Twitter";
            ref.authWithOAuthPopup("twitter", function (error, authData) {
                $timeout(function(){
                    $scope.authData = authData;
                });
            });
        }

        $scope.logout = function () {

            var ref = new Firebase("https://soccermobia.firebaseio.com/");
            ref.unauth();

            $timeout(function(){
                $scope.authData = "logged out";;
            });
        }

    });

