(function () {
      "use strict";
    let newCustomers = [
      {
        'id':1,
        'name':'sarigama',
        'rating':3
      },
      {
        'id':2,
        'name':'amaravathi',
        'rating':5
      },
      {
        'id':3,
        'name':'godavari',
        'rating':3.9
      },
       {
          'id':4,
          'name':'hot breads',
          'rating':4
        }
    ];
    createTable();
    function createTable(){
      var dvTable = document.getElementById("dvTable");
      var my_table = null;
      my_table=document.createElement("table");
      dvTable.appendChild(my_table);
      my_table.setAttribute("id", "myTable");

      var rows = null;
      for(let index in newCustomers){
         rows=document.createElement("tr");
         document.getElementById("myTable").appendChild(rows);
         var obj=newCustomers[index];
         console.log(obj);
         rows.appendChild(createData(obj.id));
         rows.appendChild(createData(obj.name));
         rows.appendChild(createData(obj.rating));
       }
       function createData(data){
         var td_tag=document.createElement("td");
         var td_data=document.createTextNode(data);
         rows.appendChild(td_tag);
         td_tag.appendChild(td_data);
        return td_tag;
      }
    }
  }());
