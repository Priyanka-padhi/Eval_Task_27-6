
// function addRow(disTable) {
//   var disTable = document.getElementById(disTable);
// }
// function deleteRow(btn) {
//   var i = disTable.rows.length;
//   if (i > 2) {
//     var row = btn.parentNode.parentNode;
//     row.parentNode.removeChild(row);
//   }
// }
$(document).ready(function() {

  addNewRow = function() {
    var row_count = disTable.rows.length;
    if (row_count<4){
      $("#disTable tbody").append('<tr id="row1"><td id="rowcell1"><select class="menu" id="item" name="item"><option value="">Select an Item</option><option value="Item 1">Item 1</option><option value="Item 2">Item 2</option><option value="Item 3">Item 3</option></select></td><td id="rowcell2"><button type="button" class="deletebtn" id="deletebtn" name="delete" onclick="deleteRow(this)"> x </button></td></tr>')
  }
  }

  deleteRow = function(element) {
  var row_count = disTable.rows.length;
    if (row_count>2){
    $(element).parent().parent().remove();
  }}

});

$(document).ready(function () {

  // $(document).on('click', '#addbtn', function (event) {
  //   var i = disTable.rows.length;
  //   if (i < 4) {
  //     var newRow = $("#disTable tbody tr").first().clone();
  //     $('#disTable tbody').append(newRow);
  //   }
  // });


  var selectedList = [];

  function updateSelectedList() {

    selectedList = [];

    var selectedValue;

    $('.menu').each(function () {

      selectedValue = $(this).find('option:selected').text();

      if (selectedValue != "" && $.inArray(selectedValue, selectedList) == "-1") {

        selectedList.push(selectedValue);

      }

    });

  }



  //disable the dropdown items that have already been selected

  function disableAlreadySelected() {

    $('option').each(function () {

      if ($.inArray(this.value, selectedList) != "-1") {

        $(this).attr("disabled", true);

      } else {

        $(this).attr("disabled", false);

      }

    });

  }

  $('#disTable').on('click', '.menu', function () {

    setTimeout(function () {

      updateSelectedList();

      disableAlreadySelected();

    }, 0);

  });



  //when a new table row is added, disable the dropdown options that have already been selected

  $('#disTable #addbtn').on('click', disableAlreadySelected,);

});



