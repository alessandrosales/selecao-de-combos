$(document).ready(function(){
	
	carregaCategorias();
});

//submit
function enviar(){
	$('#cat').html($("select[name='categoria']").val());
	$('#scat1').html($("select[name='subcategoria1']").val());
	$('#scat2').html($("select[name='subcategoria2']").val());
	$('#scat3').html($("select[name='subcategoria3']").val());
}

//reset
function reset(){
	$("#resultados").find('i').html('');
	$("select").html('');
	carregaCategorias();
}

//fução para carregar categorias

function carregaCategorias(){
	var combo = $("select[name='categoria']");

	combo.html('');//limpando a combo
	combo.append($('<option>').html('Selecione uma opção'));
	for(c in categorias){
		var novaOption = $('<option>').attr({value: categorias[c].id}).html(categorias[c].nome);
		combo.append(novaOption);
	}
}

//filtros
function filtroSubcategorias1(cat){
	var catId = $(cat).val();
	var combo = $("select[name='subcategoria1']");

	combo.html('');//limpando a combo
	for(c in subcategorias1){
		if(subcategorias1[c].categoria_id == catId){
			var novaOption = $('<option>').attr({value: subcategorias1[c].id}).html(subcategorias1[c].nome);
			combo.append(novaOption);
		}
	}
	$("select[name='subcategoria1']").change();
}

function filtroSubcategorias2(subCat1){
	var subCat1Id = $(subCat1).val();
	var combo = $("select[name='subcategoria2']");

	combo.html('');//limpando a combo
	for(c in subcategorias2){
		if(subcategorias2[c].subcategoria1_id == subCat1Id){
			var novaOption = $('<option>').attr({value: subcategorias2[c].id}).html(subcategorias2[c].nome);
			combo.append(novaOption);
		}
	}
	$("select[name='subcategoria2']").change();
}

function filtroSubcategorias3(subCat2){
	var subCat2Id = $(subCat2).val();
	var combo = $("select[name='subcategoria3']");

	combo.html('');//limpando a combo
	for(c in subcategorias3){
		if(subcategorias3[c].subcategoria2_id == subCat2Id){
			var novaOption = $('<option>').attr({value: subcategorias3[c].id}).html(subcategorias3[c].nome);
			combo.append(novaOption);
		}
	}
}