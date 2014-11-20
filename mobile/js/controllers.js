'use strict';

/* Controllers */
angular.module('myApp.controllers', [])
.controller('MainCtrl', ['$scope', '$rootScope', '$sce',
    function($scope, $rootScope, $sce) {
        $scope.attrs = ['energy', 'liveness', 'speechiness', 'acousticness', 'danceability', 'instrumentalness', 'valence'];
        $scope.red = 'energy';
        $scope.green = 'liveness';
        $scope.blue = 'speechiness';


        $scope.addNewPlayList = function(){
            if (!$scope.playlists){
                $scope.playlists = {};
            }
            $scope.playlists[$scope.newList] = playlists[$scope.newList];
            $scope.newList = "";
            console.log($scope.playlists)
        }

        $scope.showDetail = function(song){
            $scope.selectedSong = song;
            SC.initialize({
              client_id: '26311d46f4fb4dee2e2f83110a512097'
            });
            // find all sounds of buskers licensed under 'creative commons share alike'
            SC.get('/tracks', { q: song.song_name}, function(tracks) {
                var i = 0;
                while (!tracks[i].streamable && i < 50){
                    i ++;
                }
                $scope.selectedSong['steam'] = tracks[i].stream_url + "?client_id=26311d46f4fb4dee2e2f83110a512097";
                $scope.$apply();
            });

            $('.modal').modal('show');
        }

        $scope.toggleCollapse = function(key){
            $(".panel-collapse").collapse('hide');
            $("#collapse" + key).collapse('toggle');
        }

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        }


    }
])
.controller('MainCtrl2', ['$scope', '$rootScope', '$sce',
        function($scope, $rootScope, $sce) {
            $scope.attrs = ['energy', 'liveness', 'speechiness', 'acousticness', 'danceability', 'instrumentalness', 'valence'];
            $scope.red = 'energy';
            $scope.green = 'liveness';
            $scope.blue = 'speechiness';
            $scope.color = 'energy';
            $scope.billboard = billboard;
            $scope.data = billboard;

            $scope.showDetail = function(song){
                $scope.selectedSong = song;
                SC.initialize({
                  client_id: '26311d46f4fb4dee2e2f83110a512097'
                });
                // find all sounds of buskers licensed under 'creative commons share alike'
                SC.get('/tracks', { q: song.song_name}, function(tracks) {
                    var i = 0;
                    while (!tracks[i].streamable && i < 50){
                        i ++;
                    }
                    $scope.selectedSong['steam'] = tracks[i].stream_url + "?client_id=26311d46f4fb4dee2e2f83110a512097";
                    $scope.$apply();
                });

                $('.modal').modal('show');
            }

            $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            }
        }
    ])
.controller('MainCtrl3', ['$scope', '$rootScope', '$sce',
        function($scope, $rootScope, $sce) {
            $scope.attrs = ['energy', 'liveness', 'speechiness', 'acousticness', 'danceability', 'instrumentalness', 'valence'];
            $scope.color = 'energy';
            $scope.billboard = billboard;
            $scope.data = billboard;

            $scope.showDetail = function(song){
                $scope.selectedSong = song;
                SC.initialize({
                  client_id: '26311d46f4fb4dee2e2f83110a512097'
                });
                // find all sounds of buskers licensed under 'creative commons share alike'
                SC.get('/tracks', { q: song.song_name}, function(tracks) {
                    var i = 0;
                    while (!tracks[i].streamable && i < 50){
                        i ++;
                    }
                    $scope.selectedSong['steam'] = tracks[i].stream_url + "?client_id=26311d46f4fb4dee2e2f83110a512097";
                    $scope.$apply();
                });

                $('.modal').modal('show');
            }

            $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            }
        }
    ]);