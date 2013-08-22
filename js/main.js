//PC

/*------------------ ロード前の処理 -------------------*/
$(function(){
	

	
});
/*------------------ ロード後の処理 -------------------*/
$(window).on( 'load', function() {

	
	flgReadyOnLoad = true;
	loadedMain();

});

/*------------------ 実質上のメイン -------------------*/
function loadedMain(){
	
	if( !flgReadyOnLoad ){ return; }
	
	var today = new Date();
	var today_str = today.getFullYear() + "/" + today.getMonth() + "/" +  today.getDate();
	$("#today").text(today_str);


}
