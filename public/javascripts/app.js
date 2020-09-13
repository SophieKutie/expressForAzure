
//var pusher = new Pusher('30cd99f3d06d7c6a14f2');
var doc = document.getElementById('doc');
doc.contentEditable = true;
doc.focus();


// subscribe to the changes via Pusher
var channel = pusher.subscribe(id);
channel.bind('client-text-edit', function(html) {
    doc.innerHTML = html;
});

function triggerChange (e) {
    channel.trigger('client-text-edit', e.target.innerHTML);
  }
  
  doc.addEventListener('input', triggerChange);