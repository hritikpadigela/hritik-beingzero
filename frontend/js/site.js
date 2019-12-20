//JQUERY makes our life very easy

//1. hoe to make backendcall

$.getJSON('/data', function(d){
    //alert(JSON.stringify(d));

    $('#name').text(d.name);
    $('#college').text(d.college);
    $('#regno').text(d.regno);


})