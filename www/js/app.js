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

        var ref = new Firebase("https://soccermobia.firebaseio.com/");

        $scope.loginGoogle = function () {
            $scope.authData = "Google";
                ref.authWithOAuthPopup("google", function (error, authData) {
                $timeout(function(){
                    $scope.authData = authData;
                });
            }, {
                scope: "profile,email,openid"
            });
        };

        $scope.loginFacebook = function () {
            $scope.authData = "Facebook";
            ref.authWithOAuthPopup("facebook", function (error, authData) {
                $timeout(function(){
                    $scope.authData = authData;
                });
            }, {
                scope: "public_profile,email,user_friends"
            });
        };

        $scope.loginTwitter = function () {
            $scope.authData = "Twitter";
            ref.authWithOAuthPopup("twitter", function (error, authData) {
                $timeout(function(){
                    $scope.authData = authData;
                });
            });
        }
        $scope.appVersion = function () {
            $scope.authData = "appVersion";
            //getAppVersion(function(version) {
            //    $scope.authData = 'Native App Version: ' + version;
            //});

            console.log(window.device);
            $scope.authData  = window.device;

        }

    });

