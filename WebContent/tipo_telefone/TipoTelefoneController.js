var myControllers = angular.module('TipoTelefoneControllers',[]);

myControllers.controller('ListarTipoTelefoneController', function($scope,$http) {
	$scope.Titulo = "Tipo de Telefone";
	$scope.BuscarInformacao = function() {
		$http.get('http://localhost:8080/CRM/rest/restTipoTelefone/listarTodos')
		.success(function(data) {
			$scope.tipoTelefonelist = data["tipoTelefone"];
			$scope.Quantidade = $scope.tipoTelefonelist.length+' Tipos de Telefones Encontrados!' ;
		});
	};
	$scope.BuscarInformacao();
	
	$scope.ordenar = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
});
myControllers.controller('GetTipoTelefoneController', function($scope, $routeParams,$http) {
	$scope.Titulo = "Editar Tipo de Telefone";

	if($routeParams.tipotelefoneId){
		$http.get('http://localhost:8080/CRM/rest/restTipoTelefone/Editar/'+$routeParams.tipotelefoneId)
		.success(function(data) {
			$scope.tipoTelefone = data;
			var tipoTelefone =  new Object();
			tipoTelefone = $scope.tipoTelefone

		});
	}
});
myControllers.controller('CadastrarTipoTelefoneController', function($scope, $routeParams,$http) {
	
	$scope.Titulo = "Cadastrar Tipo de Telefone";
	
});
myControllers.controller('TipoTelefoneController', function($scope, $routeParams,$http) {
	
	$scope.EnviarInformacao = function() {
		
		var parameter = JSON.stringify({
			type : "tipoTelefone",
			id : $scope.tipoTelefone.id,
			nome : $scope.tipoTelefone.nome
		});
		var config = {
			headers : {
				'Content-Type' : 'application/json;charset=utf-8;'
			}
		}
		
		$http.post(
				'http://localhost:8080/CRM/rest/restTipoTelefone/Salvar',
				parameter, config).success(
				function(data, status, headers, config) {
					$scope.Resposta = 'Tipo Telefone ('+$scope.tipoTelefone.nome+') Salvo com Sucesso!';
					
					
				}).error(
				function(data, status, header, config) {
					$scope.Resposta = data ;
				});
	   };
	   $scope.Excluir = function(id){
		   if(id){
				
				$http.post('http://localhost:8080/CRM/rest/restTipoTelefone/Excluir/'+id)
					.success(
					function(data, status) {
						$scope.Resposta = 'Tipo Telefone Excluído com Sucesso!';
						$scope.BuscarInformacao();
						
					}).error(
					function(data, status) {
						$scope.Resposta = data ;
					});
			   };
			
			};
	
});