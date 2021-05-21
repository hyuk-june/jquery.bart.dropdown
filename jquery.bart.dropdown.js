(function ($) {
  $.fn.dropdown = function ({ custOption, callback }) {
    let options = {
      show: false,
      trigger: "click",
      bgColor: "#fff",
      border: "1px solid #ddd",
      padding: "0.5rem",
      zIndex: 99,
      pos: "bottom",
      itemOverColor: "#3b82f6",
    };

    const init = ($this) => {
      let isShow = false;

      // html data attribute and javascript object options
      const opt = Object.assign({}, options, $this.data(), custOption);

      const fnShow = function (ref) {
        if (isShow) return;
        ref.stopPropagation();
        isShow = true;
        $item.show();
        $button.addClass("active");
      };

      const fnHide = function (ref) {
        if (!isShow) return;

        let isSelf = false;

        if (opt.trigger !== "click") {
          isSelf =
            $.inArray($this.get(0), $(ref.target).parents()) > 0 ||
            $this.get(0) === ref.target;
        }

        if (isSelf) return;

        isShow = false;
        $item.hide();
        $button.removeClass("active");
      };

      $this.css({ width: "fit-content" });

      isShow = opt.show;

      const $button = $(">:nth-child(1)", $this);
      const $item = $(">:nth-child(2)", $this);

      $this.css({ position: "relative" });
      $item.css({
        position: "absolute",
        background: opt.bgColor,
        zIndex: opt.zIndex,
        border: opt.border,
        padding: opt.padding,
        transform: "1s ease",
        width: "fit-content",
        minWidth: "100%",
      });
      $("*", $item).css({ width: "fit-content", whiteSpace: "nowrap" });

      if (opt.pos === "bottom") {
        $item.css({ left: 0, top: "100%" });
      } else if (opt.pos === "left") {
        $item.css({ right: "100%", top: 0 });
      } else if (opt.pos === "right") {
        $item.css({ left: "100%", top: 0 });
      } else if (opt.pos === "leftTop") {
        $item.css({ right: "100%", bottom: "0" });
      } else if (opt.pos === "rightTop") {
        $item.css({ left: "100%", bottom: "0" });
      } else {
        $item.css({ left: 0, bottom: "100%" });
      }

      $("*", $button).css({ transition: "0.5s ease all" });

      if (!opt.show) $item.hide();

      const fnReset = function () {
        isShow = false;
        $item.hide();
        $button.removeClass("active");
        if (typeof callback === "function") {
          callback($item.children().index($this), $this);
        }
      };

      if (opt.trigger === "click") {
        $($this).on("click touchstart", (($this) => fnShow)($this));
        $(document).on("click touchstart", (($this) => fnHide)($this));
      } else {
        $this.on("mouseover touchstart", fnShow);
        $(document).on("mouseout", (($this) => fnHide)($this));
      }

      $("> *", $item).click(fnReset);
    };

    $these = $(this);

    $these.each((idx, ref) => {
      $this = $(ref);
      init($this);
    });
  };
})(jQuery);
