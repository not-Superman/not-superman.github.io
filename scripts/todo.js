function TodoCtrl($scope) {
    $scope.todos = [
      { text: 'Изучить Angular.js', time: '2015-11-20', done: true },
      { text: 'Создать простое приложение', time: '2015-11-21', done: true },
      { text: 'Создать прототип Аквалайзера', time: '2015-11-29', done: false }
    ];

    $scope.addTodo = function () {
        if ($scope.todoText.length >3) {
            $scope.todos.push({ text: $scope.todoText, time: $scope.todoTime, done: false });
            $scope.todoText = '';
            $scope.todoTime = '';
        }
    };

    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.todos, function (todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };


    $('#datetimepicker3').datetimepicker({ language: 'ru' });
    $("#setMinDate").click(function () {
        $('#datetimepicker3').data("DateTimePicker").setMinDate(new Date("01.01.2015"));
    });
    $("#setMaxDate").click(function () {
        $('#datetimepicker3').data("DateTimePicker").setMaxDate(new Date("01.01.2016"));
    });
    $("#show").click(function () {
        $('#datetimepicker3').data("DateTimePicker").show();
    });
    $("#hide").click(function () {
        $('#datetimepicker3').data("DateTimePicker").hide();
    });
    $("#disable").click(function () {
        $('#datetimepicker3').data("DateTimePicker").disable();
    });
    $("#enable").click(function () {
        $('#datetimepicker3').data("DateTimePicker").enable();
    });
    $("#setDate").click(function () {
        $('#datetimepicker3').data("DateTimePicker").setDate("01/09/2015");
    });
    $("#getDate").click(function () {
        alert($('#datetimepicker3').data("DateTimePicker").getDate());
    });
}
