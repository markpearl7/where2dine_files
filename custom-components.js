var map = []; //needed for map geocode
var marker = []; //needed for map geocode
var infoWindow = []; //needed for map geocode
var map_associations = []; //needed for map geocode
var address_to_map; //needed for map geocode
var map_update = true; //needed for map geocode
var map_matched_addresses = []; // needed for map geocode on editor

function showAddress(cid,val){
    geocoder.geocode({'address':val},
    function(results,status){
        if(status==google.maps.GeocoderStatus.OK)  {
            marker[cid].setPosition(results[0].geometry.location);	
			geocode(cid,results[0].geometry.location); 			
			}
					
        else{
            //alert("Sorry but Google Maps could not find this location.");
			}
    });
}

function geocode(cid,position){
    geocoder.geocode(
        { latLng:position },
        function(){
            map[cid].panTo(marker[cid].getPosition());
			})
}
			
function getPosition(location) {
    geocoder.geocode({'address':location},
        function(results,status){
            if(status==google.maps.GeocoderStatus.OK)  {
                return results[0].geometry.location;
            }
        });
}


function initialize_map (mapCanvasId,mapZoom,cid,defaultLocation,src){

    if(defaultLocation) {
        mapInit = getPosition(defaultLocation);
    } else {
        mapInit = new google.maps.LatLng (45.758930866245336, 21.223625595141584); // TM
    }

    myOptions = 
    {
        zoom: mapZoom,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: mapInit,
        streetViewControl: false
    }
    map[cid] = new google.maps.Map (document.getElementById(mapCanvasId), myOptions);
	
    marker[cid] = new google.maps.Marker ({position: mapInit, title: ""});
    marker[cid].setMap (map[cid]);
    marker[cid].setDraggable (true);
	

	if(!src){
	google.maps.event.addListenerOnce(map[cid], 'idle', function(){
		if (typeof $x !== 'undefined')
			var $ = $x;
		if ($('#map_canvas_'+cid).css('opacity') == '0') {
			$('#map_canvas_'+cid).css('display', 'none');
			$('#map_canvas_'+cid).css('position', 'relative');
			$('#map_canvas_'+cid).css('opacity', '1');
			}
		});
	}
		
	showAddress(cid,defaultLocation);
}


