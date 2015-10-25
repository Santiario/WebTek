/**
 * Created by vemund on 25.10.15.
 */

getTableArray = function(){
    var tbody = document.getElementById('the-table-body');
    var trows = tbody.rows;
    var tableArray = [];
    for(var i = 0; i < trows.length; i++){
        tableArray[i] = [];
        for(var j = 0; j < trows[i].cells.length; j++){
            tableArray[i][j] = trows[i].cells[j].innerHTML;
        }
    }
    return tableArray;
};

insertNewTable = function(table){
    var trows = document.getElementById('the-table-body').rows;
    for(var i = 0; i < trows.length; i++){
        trows[i].innerHTML = '<td>' + table[i].join('</td><td>') + '</td>'
    }
};

sortCol = function(col){
    insertNewTable(getTableArray().sort(function(a, b){
        if(typeof a[col] == 'string'){
            return a[col].localeCompare(b[col]);
        }
        return a[col] - b[col];
    }));
};