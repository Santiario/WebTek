/**
 * Created by vemund on 25.10.15.
 */

getTableArray = function(){
    tbody = document.getElementById('the-table-body');
    trows = tbody.rows;
    tableArray = [];
    for(i = 0; i < trows.length; i++){
        tableArray[i] = [];
        for(j = 0; j < trows[i].cells.length; j++){
            tableArray[i][j] = trows[i].cells[j].innerHTML;
        }
    }
    return tableArray;
};

insertNewTable = function(table){
    trows = document.getElementById('the-table-body').rows;
    for(i = 0; i < trows.length; i++){
        trows[i].innerHTML = '<td>' + table[i].join('</td><td>') + '</td>'
    }
};

sortCol = function(col){
    insertNewTable(getTableArray().sort(function(a, b){
        if(typeof a[col] == 'string'){
            console.log('sorting strings');
            return a[col].localeCompare(b[col]);
        }
        return a[col] - b[col];
    }));

};