/** ***************************************************************************
@name: homeController.js
@description: home page's Controller
@author: Gustavo Kluwe Saudade (https://github.com/GustavoSaudade)
@since: 05/05/2017
**************************************************************************** **/
'use strict';

gustavoApp.controller('homeController', function($scope) {
    $scope.message = "Rodou";

    $scope.contactName;
    $scope.contactEmail;
    $scope.contactMessage;

    $scope.enviaEmail = function() {

        alert($scope.message);
        
        emailjs.send("saudade_gustavo_gmail_com","site_gustavo",
            {
                contact_name: $scope.contactName, 
                contact_email: $scope.contactEmail,
                contact_message: $scope.contactMessage
            });
        
        window.location.href = 'http://localhost:8887/index.html';
    }
});