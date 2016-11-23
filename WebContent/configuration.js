var app = angular.module('happyCustomerApp', [
	'ngRoute', 
	'angularUtils.directives.dirPagination',
	'angularFileUpload',
	'ngFileUpload',	
	'ngImgCrop',
	'UsuarioControllers',
	'TipoContatoControllers',
	'CidadeControllers',
	'TipoUsuarioControllers',
	'OrigemContatoControllers',
	'TipoAtividadeControllers',
	'TipoTelefoneControllers',
	'TipoComunicadorControllers',
	'TipoEmpresaControllers',
	'EstadoControllers',
	'ProdutoControllers',
	'NegocioControllers',
	'EmpresaControllers',
	'ContatoControllers',
	'AtividadeControllers',
	'LigacaoControllers',
	'LoginControllers'
	
]);

app.controller('AppCtrl', function($scope) {
	  $scope.myDate = new Date();

	  $scope.minDate = new Date(
	      $scope.myDate.getFullYear(),
	      $scope.myDate.getMonth() - 2,
	      $scope.myDate.getDate());

	  $scope.maxDate = new Date(
	      $scope.myDate.getFullYear(),
	      $scope.myDate.getMonth() + 2,
	      $scope.myDate.getDate());

	  $scope.onlyWeekendsPredicate = function(date) {
	    var day = date.getDay();
	    return day === 0 || day === 6;
	  };
	});


app.controller('MainCtrl',
	function MainCtrl() {
		this.header = {};
	});
	
app.controller('MainCtrl',
	function MainCtrl() {
		this.rodape = {};
});
app.config(function ($routeProvider) {
    $routeProvider.
		//Paths of Home 
    	when('/Home/', {templateUrl: 'home/home.html'}).
    
    	//Paths of Tipo Contato
        when('/TipoContato/Editar/:tipocontatoId', {templateUrl: 'tipo_contato/partials/editar_tipo_contato.html', controller: 'GetTipoContatoController'}).
        when('/TipoContato', {templateUrl: 'tipo_contato/partials/listar_tipo_contato.html', controller: 'ListarTipoContatoController'}).
        when('/TipoContato/Cadastrar', {templateUrl: 'tipo_contato/partials/criar_tipo_contato.html', controller:'CadastrarTipoContatoController'}).
        
        //Paths of Usuario    
        when('/Usuario/Editar/:usuarioId', {templateUrl: 'usuario/partials/editar_usuario.html', controller: 'GetUsuarioController'}).
        when('/Usuario', {templateUrl: 'usuario/partials/listar_usuario.html', controller: 'ListarUsuarioController'}).
        when('/Usuario/Cadastrar', {templateUrl: 'usuario/partials/criar_usuario.html', controller:'CadastrarUsuarioController'}).
        
        //Paths of Telefone    
        when('/Telefone/Editar/:telefoneId', {templateUrl: 'telefone/partials/editar_telefone.html', controller: 'GetTelefoneController'}).
        when('/Telefone', {templateUrl: 'telefone/partials/listar_telefone.html', controller: 'ListarTelefoneController'}).
        when('/Telefone/Cadastrar', {templateUrl: 'telefone/partials/criar_telefone.html', controller:'CadastrarTelefoneController'}).

        //Paths of Cidade    
        when('/Cidade/Editar/:cidadeId', {templateUrl: 'cidade/partials/editar_cidade.html', controller: 'GetCidadeController'}).
        when('/Cidade', {templateUrl: 'cidade/partials/listar_cidade.html', controller: 'ListarCidadeController'}).
        when('/Cidade/Cadastrar', {templateUrl: 'cidade/partials/criar_cidade.html', controller:'CadastrarCidadeController'}).
        
        //Paths of Tipo Usuário
        when('/TipoUsuario/Editar/:tipousuarioId', {templateUrl: 'tipo_usuario/partials/editar_tipo_usuario.html', controller: 'GetTipoUsuarioController'}).
        when('/TipoUsuario', {templateUrl: 'tipo_usuario/partials/listar_tipo_usuario.html', controller: 'ListarTipoUsuarioController'}).
        when('/TipoUsuario/Cadastrar', {templateUrl: 'tipo_usuario/partials/criar_tipo_usuario.html', controller:'CadastrarTipoUsuarioController'}).
        
        //Paths of Origem Contato
        when('/OrigemContato/Editar/:origemcontatoId', {templateUrl: 'origem_contato/partials/editar_origem_contato.html', controller: 'GetOrigemContatoController'}).
        when('/OrigemContato', {templateUrl: 'origem_contato/partials/listar_origem_contato.html', controller: 'ListarOrigemContatoController'}).
        when('/OrigemContato/Cadastrar', {templateUrl: 'origem_contato/partials/criar_origem_contato.html', controller:'CadastrarOrigemContatoController'}).
        
        //Paths of Tipo Atividade
        when('/TipoAtividade/Editar/:tipoatividadeId', {templateUrl: 'tipo_atividade/partials/editar_tipo_atividade.html', controller: 'GetTipoAtividadeController'}).
        when('/TipoAtividade', {templateUrl: 'tipo_atividade/partials/listar_tipo_atividade.html', controller: 'ListarTipoAtividadeController'}).
        when('/TipoAtividade/Cadastrar', {templateUrl: 'tipo_atividade/partials/criar_tipo_atividade.html', controller:'CadastrarTipoAtividadeController'}).
        
        //Paths of Tipo Telefone    
        when('/TipoTelefone/Editar/:tipotelefoneId', {templateUrl: 'tipo_telefone/partials/editar_tipo_telefone.html', controller: 'GetTipoTelefoneController'}).
        when('/TipoTelefone', {templateUrl: 'tipo_telefone/partials/listar_tipo_telefone.html', controller: 'ListarTipoTelefoneController'}).
        when('/TipoTelefone/Cadastrar', {templateUrl: 'tipo_telefone/partials/criar_tipo_telefone.html', controller:'CadastrarTipoTelefoneController'}).

        //Paths of Tipo Comunicador  
        when('/TipoComunicador/Editar/:tipocomunicadorId', {templateUrl: 'tipo_comunicador/partials/editar_tipo_comunicador.html', controller: 'GetTipoComunicadorController'}).
        when('/TipoComunicador', {templateUrl: 'tipo_comunicador/partials/listar_tipo_comunicador.html', controller: 'ListarTipoComunicadorController'}).
        when('/TipoComunicador/Cadastrar', {templateUrl: 'tipo_comunicador/partials/criar_tipo_comunicador.html', controller:'CadastrarTipoComunicadorController'}).

        //Paths of Tipo Empresa   
        when('/TipoEmpresa/Editar/:tipoempresaId', {templateUrl: 'tipo_empresa/partials/editar_tipo_empresa.html', controller: 'GetTipoEmpresaController'}).
        when('/TipoEmpresa', {templateUrl: 'tipo_empresa/partials/listar_tipo_empresa.html', controller: 'ListarTipoEmpresaController'}).
        when('/TipoEmpresa/Cadastrar', {templateUrl: 'tipo_empresa/partials/criar_tipo_empresa.html', controller:'CadastrarTipoEmpresaController'}).
     
        //Paths of Produto
        when('/Produto/Editar/:produtoId', {templateUrl: 'produto/partials/editar_produto.html', controller: 'GetProdutoController'}).
        when('/Produto', {templateUrl: 'produto/partials/listar_produto.html', controller: 'ListarProdutoController'}).
        when('/Produto/Cadastrar', {templateUrl: 'produto/partials/criar_produto.html', controller:'CadastrarProdutoController'}).

        //Paths of Estado
        when('/Estado/Editar/:estadoId', {templateUrl: 'estado/partials/editar_estado.html', controller: 'GetEstadoController'}).
        when('/Estado', {templateUrl: 'estado/partials/listar_estado.html', controller: 'ListarEstadoController'}).
        when('/Estado/Cadastrar', {templateUrl: 'estado/partials/criar_estado.html', controller:'CadastrarEstadoController'}).

        //Paths of Negocio
        when('/Negocio/Editar/:negocioId', {templateUrl: 'negocio/partials/editar_negocio.html', controller: 'GetNegocioController'}).
        when('/Negocio', {templateUrl: 'negocio/partials/listar_negocio.html', controller: 'ListarNegocioController'}).
        when('/Negocio/Cadastrar', {templateUrl: 'negocio/partials/criar_negocio.html', controller:'CadastrarNegocioController'}).
        
        //Paths of Empresa
        when('/Empresa/Editar/:empresaId', {templateUrl: 'empresa/partials/editar_empresa.html', controller: 'GetEmpresaController'}).
        when('/Empresa', {templateUrl: 'empresa/partials/listar_empresa.html', controller: 'ListarEmpresaController'}).
        when('/Empresa/Cadastrar', {templateUrl: 'empresa/partials/criar_empresa.html', controller:'CadastrarEmpresaController'}).
        
        //Paths of Contato
        when('/Contato/Editar/:contatoId', {templateUrl: 'contato/partials/editar_contato.html', controller: 'GetContatoController'}).
        when('/Contato', {templateUrl: 'contato/partials/listar_contato.html', controller: 'ListarContatoController'}).
        when('/Contato/Cadastrar', {templateUrl: 'contato/partials/criar_contato.html', controller:'CadastrarContatoController'}).
        
        //Paths of Atividade
        when('/Atividade/Editar/:atividadeId', {templateUrl: 'atividade/partials/editar_atividade.html', controller: 'GetAtividadeController'}).
        when('/Atividade', {templateUrl: 'atividade/partials/listar_atividade.html', controller: 'ListarAtividadeController'}).
        when('/Atividade/Cadastrar', {templateUrl: 'atividade/partials/criar_atividade.html', controller:'CadastrarAtividadeController'}).
       
        //Paths of Ligacao
        when('/Ligacao/Editar/:ligacaoId', {templateUrl: 'ligacao/partials/editar_ligacao.html', controller: 'GetLigacaoController'}).
        when('/Ligacao', {templateUrl: 'ligacao/partials/listar_ligacao.html', controller: 'ListarLigacaoController'}).
        when('/Ligacao/Cadastrar', {templateUrl: 'ligacao/partials/criar_ligacao.html', controller:'CadastrarLigacaoController'}).
        
        //Paths of Login
        when('/Login', {templateUrl: 'login/login.html', controller: 'LoginController'}).
        
        //Paths of Home
        otherwise({redirectTo: '/Home'});
});