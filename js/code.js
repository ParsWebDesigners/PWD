function hide()
{
    document.getElementById('Code-hide').style.display = 'none';
    document.getElementById('Output-hide').style.display = 'block';
    
  var code = document.getElementById('Code').value;
    
  var iframe = document.getElementById('Browser');
    
  iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document :iframe.contentDocument;
  
  iframe.document.open();
  iframe.document.write(code);
  iframe.document.close();
}
function show()
{
    document.getElementById('Code-hide').style.display = 'block';
    document.getElementById('Output-hide').style.display = 'none';
}
















