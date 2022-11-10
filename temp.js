cackle_widget = window.cackle_widget || [];
cackle_widget.push({
  widget: "ReviewRecent",
  id: 35567,
  size: "100",
  textSize: "150",
  callback: {
    ready: [
      function (comment) {
        console.log(comment);
      },
    ],
  },
});
(function () {
  var mc = document.createElement("script");
  mc.type = "text/javascript";
  mc.async = true;
  mc.src =
    ("https:" == document.location.protocol ? "https" : "http") +
    "://cackle.me/widget.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(mc, s.nextSibling);
})();

$(document).ready(function () {
  OnReviewsLoad($("#mc-review-last .mc-comment"), function () {
    onHomeReviews = new CackleReviewsWorker($("#mc-review-last .mc-comment"));
    $("a.gallery_mc").fancybox({
      maxWidth: 800,
      maxHeight: 600,
      fitToView: false,
      width: "70%",
      height: "70%",
      autoSize: true,
      closeClick: false,
      openEffect: "fade",
      closeEffect: "fade",
    });
    var height = document.getElementById("div1").offsetHeight;
    $(".last-reviews").css("height", height);
    $(".last-reviews").mCustomScrollbar({
      theme: "dark",
      setRight: "10px",
      scrollbarPosition: "outside",
      mouseWheel: { scrollAmount: 300 },
    });
  });

  $("body").on("click", ".mc-comment-footer a", function (event) {
    event.preventDefault();
    var new_url = $(this).attr("href").replace("#cr-", "#review-cr-");
    window.open(new_url, "_blank");
  });
});

function OnReviewsLoad(blocks, callback) {
  var wait = setInterval(function () {
    if ($("#mc-review-last .mc-comment").length > 0) {
      clearInterval(wait);

      callback.apply(this);
    }
  }, 30);
}

CackleReviewsWorker = function ($reviews) {
  var self = this,
    init = function () {
      $reviews.each(function (index, el) {
        var media_string = "",
          media = "",
          video_available = 0,
          review_text = $(this)
            .find(".mc-comment-body")
            .last()
            .text()
            .replace("ещё", "")
            .replace(" ", ""),
          video_params = "",
          vide_block = "",
          block_media = '<ul class="mc-comment-media1">',
          count_blocks = 1;

        $(this).find('.mc-comment-body:contains("Недостатки")').remove();

        media_string = cackle_widget[0].data.items[index].media;

        if (
          self.check_video(review_text) &&
          self.check_video(review_text).length > 0
        ) {
          video_params = self.make_preview(review_text);
          if (video_params) {
            video_block =
              '<li class="gal_mc_list vid_item" ><a rel="group" style="background-image:url(' +
              video_params.thumbnail +
              ')!important" class="gallery_mc fancybox.iframe" href="' +
              video_params.url +
              '"></a></li>';
            video_available = 1;
            count_blocks++;
          }
        }
        if (video_available > 0) {
          block_media += video_block;
        }
        if (
          typeof media_string !== "undefined" &&
          media_string != "" &&
          media_string
        ) {
          media = media_string.split(" ");

          if (media.length > 0) {
            for (var i = 0; i < media.length; i++) {
              if (count_blocks == 4) {
                break;
              }
              block_media +=
                '<li class="gal_mc_list"><a rel="group" style="background-image:url(' +
                media[i] +
                ') !important" class="gallery_mc" href="' +
                media[i] +
                '"></a></li>';
              count_blocks++;
            }

            block_media += "</ul>";
          }
        }
        if (
          video_available > 0 ||
          (typeof media_string !== "undefined" &&
            media_string != "" &&
            media_string)
        ) {
          $(this).find(".mc-comment-footer").before(block_media);
        }
      });
    };
  self.check_video = function (review_text) {
    return review_text.match(
      /(((\bhttps?:)?(\/\/)?(((www\.)?youtube\.com\/watch\?[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|((www\.)?youtu\.be\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|(vimeo\.com\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*\/?(\d)*))))/gi
    );
  };

  self.make_preview = function (text) {
    var video_id = "",
      source = "youtube.com";

    if (text.indexOf("youtu.be") > -1) {
      source = "youtu.be";
    }
    if (text.indexOf("vimeo.com") > -1) {
      source = "vimeo.com";
    }

    if (source == "youtube.com") {
      video_id = /v=([^\?\&]+)/.exec(text)[1].replace(" ", "");
    }
    if (source == "youtu.be") {
      video_id = /([^\/]+)\/([^\/]+)/.exec(text)[2].replace(" ", "");
    }

    if (source == "youtube.com" || source == "youtu.be") {
      return {
        source: source,
        url: "https://www.youtube.com/embed/" + video_id,
        thumbnail: "//i.ytimg.com/vi/" + video_id + "/0.jpg",
      };
    } else {
      return false;
    }
  };
  init();
};
