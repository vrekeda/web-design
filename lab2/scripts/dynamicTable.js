var DynamicTable = (function (GLOB) {
    var RID = 0;
    return function (tBody) {
        if (!(this instanceof arguments.callee)) {
            return new arguments.callee.apply(arguments);
        }
        tBody.onclick = function(e) {
            var evt = e || GLOB.event,
                trg = evt.target || evt.srcElement;
            if (trg.className && trg.className.indexOf("add_row") !== -1) {
                _addRow(trg.parentNode.parentNode, tBody);
            } else if (trg.className && trg.className.indexOf("del_row") !== -1) {
                tBody.rows.length > 2 && _delRow(trg.parentNode.parentNode, tBody);
            }
            else if (trg.className && trg.className.indexOf("add_cell") !== -1) {
                _addCell(tBody);
            }
			else if (trg.className && trg.className.indexOf("del_cell") !== -1) {
                _delCell(tBody);
            }
        };
        var _rowTpl = tBody.rows[1].cloneNode(true);
		var _colTpl = tBody.rows[1].cells[1].cloneNode(true);

        var _addCell = function ( tBody) {
            for (var i = 0; i < tBody.rows.length; i += 1) {
                var row = tBody.rows[i];
    var newcell = tBody.rows[i].cells[0].cloneNode(true);
	            tBody.rows[i].insertBefore(newcell, tBody.rows[i].cells[tBody.rows[i].cells.length-1]);
            }
        };
		      var _delCell = function (tBody) {
            for (var i = 0; i < tBody.rows.length; i += 1) {
                var row = tBody.rows[i];
    var newcell = tBody.rows[i].cells[0].cloneNode(true);
	            tBody.rows[i].removeChild(tBody.rows[i].cells[tBody.rows[i].cells.length-2]);
            }
        };
        var _addRow = function (before, tBody) {

            var newNode = (tBody.rows[1].cloneNode(true));
            tBody.insertBefore(newNode, before.nextSibling);
        };
        var _delRow = function (row, tBody) {
            tBody.removeChild(row);
        };
    };
})(this);
