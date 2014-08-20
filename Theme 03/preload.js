// Referrer Credit: BBB on Stackoverflow
//$('document').ready(function(){
// Makes sure user is coming from fresh session or different URL
//if ( document.referrer == null || document.referrer.indexOf(window.location.hostname) < 0 ) {
  $(function () {
      var progressbar = $("#progressbar"),
          progressLabel = $(".progress-label");

      progressbar.progressbar({
          value: false,
          max:180,
          change: function () {
              progressLabel.text(progressbar.progressbar("value") + "ロードしています");
          },
          complete: function () {
              progressLabel.text("完成!");
          }
      });

      function progress() {
          var val = progressbar.progressbar("value") || 0;

          progressbar.progressbar("value", val + 1);

          if (val < 180) {
              setTimeout(progress, 180);
          }
      }

      setTimeout(progress, 3000);
  });
//});