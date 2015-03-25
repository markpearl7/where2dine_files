function uploadSuccess(filename) {
	// special for the userfiles uploader (images etc)		
	if ((document.getElementById('thisisiframeuploader') != null) && (selectedform!=null) &&(selectedform!=0))
	{						
		window.open('/index.php?p=edit_fields&id='+selectedform, '_top');
	}
	else if (window.isLogoUpload!=undefined && window.isLogoUpload!="")
	{
		if (isLogoUpload == '1')
		{			
			top.document.getElementById('logoImageIMG').src = top.document.getElementById('logoImageIMG').src + "?1";		
			top.document.getElementById('logoUploadSuccess').innerHTML=filename+" uploaded.";
			top.document.getElementById('logoUploadSuccess').style.display = "";	
			document.location = document.location;		
		}
	}
    else if (window.isFrontImageUpload!=undefined && window.isFrontImageUpload!="")
    {
        if (isFrontImageUpload == '1')
        {
            top.document.getElementById('FrontImageIMG').src = top.document.getElementById('FrontImageIMG').src + "?1";
            top.document.getElementById('FrontImageUploadSuccess').innerHTML=filename+" uploaded.";
            top.document.getElementById('FrontImageUploadSuccess').style.display = "";
            document.location = document.location;
        }
    }
	if (typeof(interactive123cf_loaded)!="undefined") RefreshFrameHeight(0);
}

function removeUpload(i, sessionid) 
	{	
	$.ajax({
		url: "/uploadajax.php?action=remove&id="+i+'&PHPSESSID='+sessionid,
		type: 'GET',
		success: function(res) {
			$('#fileattached-'+i).hide();			        
			$('#fileinput-button-'+i).show();
			$('#newfilesattached-'+i).html('');			
            }
        });
	}