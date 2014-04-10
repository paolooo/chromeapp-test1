window.addEventListener('DOMContentLoaded', function() {
  var htmlTotal = document.getElementById('total'),
      log = document.getElementById('logs'),
      x = 0,
      y = 0,
      total = 0,
      logs = [];

    function update() {
      total = x + y;
      htmlTotal.innerHTML = total;

      logs.splice(0, 0, total);
      chrome.storage.sync.set({"logs": logs}, function() {
        updateLogs();
      });
    }

    function updateLogs() {
      log.innerHTML = logs.join('<br>');
    }

    document.sum.n1.addEventListener('keyup', function(e) {
      x = parseInt(this.value) || 0;
      update();
    });

    document.sum.n2.addEventListener('keyup', function(e) {
      y = parseInt(this.value) || 0;
      update();
    });

    chrome.storage.sync.get("logs", function(val) {
      logs = val.logs || []
      updateLogs();
    });
});
