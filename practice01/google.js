function onSearch() {
    var searchText = document.getElementById("text_box").value;
    window.location.href='http://google.com/search?q=' + searchText;
}

function onLucky() {
    alert('Lucky!');
}

window.onload = function () {
    /* javascript 형식 함수 교체
    var textBox = document.getElementById("text_box");
    textBox.addEventListener('keydown', function(e){
        if(e.code == 'Enter'){
            onSearch();
        }
    });
    */
    $("#text_box").keydown(function(e){
        if(e.code == 'Enter'){
            onSearch();
        }
    });
    
    /* javascript 형식 함수 교체
    var btnSearch = document.getElementById("google_search_button");
    btnSearch.onclick = onSearch;
    */
    $("#google_search_button").click(onSearch);

    var btnLucky = document.getElementById("lucky_button");
    btnLucky.onclick = onLucky;

    fetch('https://source.unsplash.com/272x92').then((res)=>{
        console.log(res.url);
        document.getElementById("logo").src = res.url;
    });
}