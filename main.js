
$(document).ready(function () {
  var $iframe = $('iframe')
  var $contents = $iframe.contents();
  var $body = $contents.find('body');
  var $style = $contents.find('head').append('<style></style>').children('style');
  var $js = $contents.find('head').append('<script></script>').children('script');

  $('textarea').focus(function () {
    var $this = $(this);

    $this.keyup(function () {
      if($this.attr('id') === 'html') {
        $body.html($this.val());
      } else if ($this.attr('id') === 'css') {
        $style.text($this.val());
      } else if ($this.attr('id') === 'js') {
        $js.text($this.val());
      }
    });
  });

  $('#execute').click(function () {
    eval($js.text());
  });
});
