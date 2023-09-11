class Observer {
  constructor({
    type, slide, setSlide, listLength, setDisabledNextArrow,
  }) {
    this.slide = slide;
    this.setSlide = setSlide;
    this.listLength = listLength;
    this.setDisabledNextArrow = setDisabledNextArrow;
    if (type === 'resize') this.createResizeObserver();
    if (type === 'intersection') this.createIntersectionObserverForDisableNextArrow();
  }

  createResizeObserver() {
    this.resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry.contentRect.width >= 1536) {
        return this.slide > this.listLength - 4 ? this.setSlide(this.listLength - 4)
          : this.setSlide(this.slide);
      }
      if (entry.contentRect.width >= 1024) {
        return this.slide > this.listLength - 3 ? this.setSlide(this.listLength - 3)
          : this.setSlide(this.slide);
      }
      if (entry.contentRect.width >= 900) {
        return this.slide > this.listLength - 2 ? this.setSlide(this.listLength - 2)
          : this.setSlide(this.slide);
      }
      return this.slide > this.listLength - 1 ? this.setSlide(this.listLength - 1)
        : this.setSlide(this.slide);
    });
  }

  createIntersectionObserverForDisableNextArrow() {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.setDisabledNextArrow(true);
      } else {
        this.setDisabledNextArrow(false);
      }
    });
  }

  observeResizeElement(element) {
    this.resizeObserver.observe(element);
  }

  observeIntersection(element) {
    this.intersectionObserver.observe(element);
  }
}

export default Observer;
