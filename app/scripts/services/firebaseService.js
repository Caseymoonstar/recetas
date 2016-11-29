'use strict';

angular.module('recetasApp')
  .factory('Fire', function (firebase) {

    var firebaseConfig= {
      apiKey: 'AIzaSyA5luPF4xkrkcSkwHKbjAO1_jVnjQMhHUI',
      authDomain: 'recetapan-bb28d.firebaseapp.com',
      databaseURL: 'https://recetapan-bb28d.firebaseio.com',
      storageBucket: 'recetapan-bb28d.appspot.com',
      messagingSenderId: '979066234648'
    };

    var firebaseApp = firebase.initializeApp(firebaseConfig);
    var firebaseAuth = firebaseApp.auth();
    var firebaseDb = firebaseApp.database();
    var firebaseST = firebase.storage();

    return{
      firebaseAuth: function(){
        return firebaseAuth;
      },
      firebaseDb: function(){
        return firebaseDb;
      },
      firebaseST: function(){
        return firebaseST;
      }
    };

  });
