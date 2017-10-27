$(document).ready(function(){
    $('#data-table').DataTable({
        "ajax"     :     "data.json",
        "columns"     :     [
            {     "data"     :     "id"     },
            {     "data"     :     "first_name"     },
            {     "data"     :     "last_name"},
            {     "data"     :     "email"},
            {     "data"     :     "gender"},
            {     "data"     :     "ip_address"}
        ]
    });
});