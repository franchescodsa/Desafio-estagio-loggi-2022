var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});
function interpretador_codigo_de_barras(){

    let lista_vendedores = [];
    let lista_destino = [];
    let lista_destino_tipo = [];

    const pacotes = ["888555555123888", "333333555584333", "222333555124000", "000111555874555", "111888555654777", "111333555123333", "555555555123888", "888333555584333", "111333555124000", "333888555584333", "555888555123000", "111888555123555", "888000555845333", "000111555874000", "111333555123555"];

    for (let index = 0; index < pacotes.length; index++){

    var codigo_de_barras = pacotes[index];
    let validade_codigo_de_barras = true;

    var div_codigo_de_barras = document.createElement("h3");
    var exibir_codigo_de_barras = document.createTextNode("Código: " + codigo_de_barras);
    div_codigo_de_barras.appendChild(exibir_codigo_de_barras);
    document.body.appendChild(div_codigo_de_barras);


    //Primeira trinca
    var regiao_origem = codigo_de_barras.substring(0, 3);
    var primeira_parte = parseInt(regiao_origem);

    var div_regiao_origem = document.createElement("p");
    
    if (primeira_parte === 111){
        var exibir_regiao_origem = document.createTextNode("Região de origem: Centro-oeste");
    } else if (primeira_parte === 333) {
        var exibir_regiao_origem = document.createTextNode("Região de origem: Nordeste");
    } else if (primeira_parte === 555){
        var exibir_regiao_origem = document.createTextNode("Região de origem: Norte");
    } else if (primeira_parte === 888) {
        var exibir_regiao_origem = document.createTextNode("Região de origem: Sudeste");
    } else if (primeira_parte === 000){
        var exibir_regiao_origem = document.createTextNode("Região de origem: Sul");
    } else {
        validade_codigo_de_barras = false;
        var exibir_regiao_origem = document.createTextNode("Região de origem é INVÁLIDA");
    }

    div_regiao_origem.appendChild(exibir_regiao_origem);
    document.body.appendChild(div_regiao_origem);


    //Segunda trinca
    var regiao_destino = codigo_de_barras.substring(3, 6);
    var segunda_parte = parseInt(regiao_destino);

    var div_regiao_destino = document.createElement("p");

    if (segunda_parte === 111){
        var exibir_regiao_destino = document.createTextNode("Região de destino: Centro-oeste");
    } else if (segunda_parte === 333) {
        var exibir_regiao_destino = document.createTextNode("Região de destino: Nordeste");
    } else if (segunda_parte === 555){
        var exibir_regiao_destino = document.createTextNode("Região de destino: Norte");
    } else if (segunda_parte === 888) {
        var exibir_regiao_destino = document.createTextNode("Região de destino: Sudeste");
    } else if (segunda_parte === 000){
        var exibir_regiao_destino = document.createTextNode("Região de destino: Sul");
    } else {
        validade_codigo_de_barras = false;
        var exibir_regiao_origem = document.createTextNode("Região de destino é INVÁLIDA");
    }

    div_regiao_destino.appendChild(exibir_regiao_destino);
    document.body.appendChild(div_regiao_destino);


    //Terceira trinca
    var codigo_loggi = codigo_de_barras.substring(6, 9);

    var terceira_parte = parseInt(codigo_loggi);

    var div_codigo_loggi = document.createElement("p");
    var exibir_codigo_loggi = document.createTextNode("Código Loggi: " + terceira_parte);
    div_codigo_loggi.appendChild(exibir_codigo_loggi);
    document.body.appendChild(div_codigo_loggi);


    //Quarta trica
    var codigo_vendedor = codigo_de_barras.substring(9, 12);
    let quarta_parte = parseInt(codigo_vendedor);

    
    let vendedores_inativos = [584];
    let encontrar_elemento = vendedores_inativos.includes(quarta_parte);

    var div_codigo_vendedor = document.createElement("p");

    if(encontrar_elemento === true){
        validade_codigo_de_barras = false;
        var exibir_codigo_vendedor = document.createTextNode("Este vendedor está com o CNPJ inativo.");
    } else {
        var exibir_codigo_vendedor = document.createTextNode("Código do vendedor do produto: " + quarta_parte);
    }

    div_codigo_vendedor.appendChild(exibir_codigo_vendedor);
    document.body.appendChild(div_codigo_vendedor);
    

    //Quinta trinca
    var codigo_produto = codigo_de_barras.substring(12, 15);
    var quinta_parte = parseInt(codigo_produto);
    
    var div_tipo_produto = document.createElement("p");

    if (quinta_parte === 111){
        var exibir_tipo_produto = document.createTextNode("Tipo de produto: livros");
    } else if (quinta_parte === 333) {
        var exibir_tipo_produto = document.createTextNode("Tipo de produto: eletrônicos");
    } else if (quinta_parte === 555){
        var exibir_tipo_produto = document.createTextNode("Tipo de produto: bebidas");
    } else if (quinta_parte === 888) {
        var exibir_tipo_produto = document.createTextNode("Tipo de produto: brinquedos");
    } else if (quinta_parte === 000 && primeira_parte === 000){
        var exibir_tipo_produto = document.createTextNode("Pacote que tem como origem a região Sul e seu conteúdo é brinquedo.");
    } else if (quinta_parte === 000 && primeira_parte === 111){
        validade_codigo_de_barras = false;
        var exibir_tipo_produto = document.createTextNode("Jóias não podem ter como origem a região Centro-oeste.");
    } else if (quinta_parte === 000){
        var exibir_tipo_produto = document.createTextNode("Tipo de produto: jóias");
    } else {
        validade_codigo_de_barras = false;
        var exibir_tipo_produto = document.createTextNode("O código do tipo de produto é INVÁLIDO.");
    }

    div_tipo_produto.appendChild(exibir_tipo_produto);
    document.body.appendChild(div_tipo_produto);



    var div_validade_codigo_de_barras = document.createElement("p");

    //Verificar validade do código de barras
    if(validade_codigo_de_barras === false){
        var exibir_validade_codigo_de_barras = document.createTextNode("O código de barras é INVÁLIDO.");
    } else {
        lista_destino_tipo.push(regiao_destino, codigo_produto);
        lista_destino.push(regiao_destino);
        lista_vendedores.push(codigo_vendedor);
        var exibir_validade_codigo_de_barras = document.createTextNode("O código de barras é VÁLIDO.");
    }

    div_validade_codigo_de_barras.appendChild(exibir_validade_codigo_de_barras);
    document.body.appendChild(div_validade_codigo_de_barras);

}

   var div_lista_destino = document.createElement("h3");
    var exibir_lista_destino = document.createTextNode("Lista de Pacotes por Destino");
    div_lista_destino.appendChild(exibir_lista_destino);
    document.body.appendChild(div_lista_destino);

    var div_lista_destino= document.createElement("p");
    var exibir_lista_destino = document.createTextNode("Vendedor: " + lista_destino);
    div_lista_destino.appendChild(exibir_lista_destino);
    document.body.appendChild(div_lista_destino)



    var div_lista_vendedor = document.createElement("h3");
    var exibir_lista_vendedor = document.createTextNode("Lista de Pacotes por Vendedores");
    div_lista_vendedor.appendChild(exibir_lista_vendedor);
    document.body.appendChild(div_lista_vendedor);

    var div_lista_vendedor = document.createElement("p");
    var exibir_vendedor = document.createTextNode("Vendedor: " + lista_vendedores);
    div_lista_vendedor.appendChild(exibir_vendedor);
    document.body.appendChild(div_lista_vendedor);


    var div_lista_destino_tipo = document.createElement("h3");
    var exibir_lista_destino_tipo = document.createTextNode("Lista de Pacotes por Destino e Tipo");
    div_lista_destino_tipo.appendChild(exibir_lista_destino_tipo);
    document.body.appendChild(div_lista_destino_tipo);

    var div_lista_destino_tipo = document.createElement("p");
    var exibir_lista_destino_tipo= document.createTextNode("Destino e Tipo: " + lista_destino_tipo + "   ");
    div_lista_destino_tipo.appendChild(exibir_lista_destino_tipo);
    document.body.appendChild(div_lista_destino_tipo);
    
}
