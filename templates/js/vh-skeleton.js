function handleSkeletonLoad(selector) {
  $(selector + "+img")
    .on("load", function () {
      const img = $(this);
      const skeleton = img.siblings(selector);
      const container = img.parent(); // Đảm bảo container được gán giá trị

      // Trì hoãn 1.5 giây trước khi ẩn skeleton và hiển thị ảnh
      setTimeout(function () {
        skeleton.fadeOut(300, function () {
          $(this).remove(); // Xóa skeleton
          img.removeClass("d-none"); // Hiển thị ảnh mờ dần
          container.addClass("loaded"); // Hiển thị các phần tử con
        });
      }, 430);
    })
    .each(function () {
      if (this.complete) $(this).trigger("load");
    });

  // Đảm bảo kích thước của skeleton khớp với nội dung container
  $(".vh-skeleton-container").each(function () {
    const container = $(this); // Gán giá trị container
    const skeleton = container.find(selector);

    skeleton.width(container.width()); // Cập nhật width của skeleton
    // Khi skeleton biến mất, nội dung fadeIn mượt mà
    setTimeout(function () {
      skeleton.fadeOut(300, function () {
        $(this).remove(); // Xóa skeleton
        container.addClass("loaded"); // Hiển thị các phần tử con
      });
      container.removeClass("mt-1"); // Xóa skeleton
    }, 430);
  });
}

function initializeVHSkeleton() {
  const skeletonTypes = [
    ".vh-skeleton-image",
    ".vh-skeleton-avatar",
    ".vh-skeleton-text",
  ];

  skeletonTypes.forEach((selector) => {
    handleSkeletonLoad(selector);
  });
}

function initializeSkeletonOnScroll() {
  const skeletonItems = gsap.utils.toArray(".vh-skeleton-container-scroll");
  skeletonItems.forEach((item) => {
    var item_trigger = $(item).find(".vh-skeleton-container-scroll-trigger");
    gsap.to(item, {
      scrollTrigger: {
        trigger: item_trigger,
        start: "top 75%",
        onEnter: () => {
          setTimeout(() => {
            const skeleton = $(item).find(".vh-skeleton");
            skeleton.fadeOut(300, function () {
              $(this).remove();
              $(item).children().fadeIn();
            });
          }, 430);
        },
      },
    });
  });
}
