window.addEventListener('DOMContentLoaded', function() {
  var htmlTotal = document.getElementById('total'),
      log = document.getElementById('log'),
      x = 0,
      y = 0,
      total = 0;

    function update() {
      total = x + y;
      htmlTotal.innerHTML = total;

      chrome.storage.sync.set({"log": total}, function() {
        updateLocal(total);
      });
    }

    function updateLocal(total) {
      log.innerHTML = total;
    }

    document.sum.n1.addEventListener('keyup', function(e) {
      x = parseInt(this.value) || 0;
      update();
    });

    document.sum.n2.addEventListener('keyup', function(e) {
      y = parseInt(this.value) || 0;
      update();
    });

    chrome.storage.sync.get("log", function(val) {
      updateLocal(val.log);
    });
});
