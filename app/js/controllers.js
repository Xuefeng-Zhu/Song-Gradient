'use strict';

/* Controllers */
var result = []
var matchAPI = "http://limitless-falls-1957.herokuapp.com/match/";

angular.module('myApp.controllers', []).
controller('VisualCtrl', ['$scope', '$rootScope', '$http',
    function($scope, $rootScope, $http) {
        $scope.data = [
            ['Vote']
        ]
        addMatch($rootScope.matchID);
        $scope.matchID = "";

        $scope.addMacth = function() {
            if ($scope.matchID == "") {
                return;
            } else {
                addMatch($scope.matchID);
                $scope.matchID = "";
            }
        }

        function addMatch(id) {
            $http.get(matchAPI + id)
                .then(function(res) {
                    var result = res.data.result;
                    var votes = result.positive_votes - result.negative_votes;
                    var players = result.players;

                    $scope.data[0].push("" + id);
                    for (var i = 1; i < $scope.data.length; i++) {
                        $scope.data[i].push(null);
                    }

                    for (var i in players) {
                        var temp = [votes]
                        for (var j = 0; j < $scope.data[0].length - 2; j++) {
                            temp.push(null);
                        }
                        temp.push(players[i].kills - players[i].deaths);
                        $scope.data.push(temp)
                    }

                    var d = google.visualization.arrayToDataTable($scope.data);
                    var options = {
                        hAxis: {
                            title: 'Votes',
                            minValue: -15,
                            maxValue: 15,
                            gridlines: {
                                color: 'transparent'
                            }
                        },
                        vAxis: {
                            title: 'Kill/Death',
                            minValue: -15,
                            maxValue: 15,
                            gridlines: {
                                color: 'transparent'
                            }
                        },
                        height: 600
                    };

                    var chart = new google.visualization.ScatterChart(document.getElementById('visualization'));

                    chart.draw(d, options);
                });
        }
    }
])
    .controller('VisualCtrl2', ['$scope', '$rootScope', '$http',
        function($scope, $rootScope, $http) {
            $http.get(matchAPI + $rootScope.matchID)
                .then(function(res) {
                    var result = res.data.result;
                    var players = result.players;

                    var gold_data = [];
                    var kills_data = [];
                    var deaths_data = [];
                    var assists_data = [];
                    for (var i = 0; i < players.length; i++) {
                        var group = i < players.length / 2 ? "group 1" : "group 2";
                        gold_data.push({
                            value: players[i].gold_spent,
                            name: players[i].player_slot + 1,
                            group: group
                        });

                        kills_data.push({
                            value: players[i].kills,
                            name: players[i].player_slot + 1,
                            group: group
                        });

                        deaths_data.push({
                            value: players[i].deaths,
                            name: players[i].player_slot + 1,
                            group: group
                        });

                        assists_data.push({
                            value: players[i].assists,
                            name: players[i].player_slot + 1,
                            group: group
                        });
                    }

                    var gold_visualization = d3plus.viz()
                        .container("#gold")
                        .data(gold_data)
                        .type("tree_map")
                        .id(["group", "name"])
                        .size("value")
                        .draw();

                    var kills_visualization = d3plus.viz()
                        .container("#kills")
                        .data(kills_data)
                        .type("tree_map")
                        .id(["group", "name"])
                        .size("value")
                        .draw();

                    var deaths_visualization = d3plus.viz()
                        .container("#deaths")
                        .data(deaths_data)
                        .type("tree_map")
                        .id(["group", "name"])
                        .size("value")
                        .draw();

                    var assists_visualization = d3plus.viz()
                        .container("#assists")
                        .data(assists_data)
                        .type("tree_map")
                        .id(["group", "name"])
                        .size("value")
                        .draw();
                })
        }
    ])

.controller('MainCtrl', ['$scope', '$rootScope', '$location',
    function($scope, $rootScope, $location) {
        $rootScope.matchID = "";
        $scope.visualize = function() {
            $rootScope.matchID = $scope.matchID;
            $location.path("visualization");
        }
    }
])
    .controller('MainCtrl2', ['$scope', '$rootScope', '$location',
        function($scope, $rootScope, $location) {
            $rootScope.matchID = "";
            $scope.visualize = function() {
                $rootScope.matchID = $scope.matchID;
                $location.path("visualization2");
            }
        }
    ]);