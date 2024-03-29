class Observer {
  constructor({
    type, slide, setSlide, listLength, setDisabledNextArrow, setSlidesLength,
    setIntersectionAirlines,
  }) {
    this.slide = slide;
    this.setSlide = setSlide;
    this.listLength = listLength;
    this.setDisabledNextArrow = setDisabledNextArrow;
    this.setSlidesLength = setSlidesLength;
    this.setIntersectionAirlines = setIntersectionAirlines;
    if (type === 'resize') this.createResizeObserver();
    if (type === 'intersection') this.createIntersectionObserverForDisableNextArrow();
  }

  createResizeObserver() {
    this.resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      this.checkSlidesLength(entry);
      if (entry.contentRect.width >= 1536 && this.listLength >= 4) {
        return this.slide > this.listLength - 4 ? this.setSlide(this.listLength - 4)
          : this.setSlide(this.slide);
      }
      if (entry.contentRect.width >= 1140 && this.listLength >= 3) {
        this.setIntersectionAirlines((oldArray) => [...oldArray.slice(0, 3),
          ...new Array(1).fill(null)]);
        return this.slide > this.listLength - 3 ? this.setSlide(this.listLength - 3)
          : this.setSlide(this.slide);
      }
      if (entry.contentRect.width >= 900 && this.listLength >= 2) {
        this.setIntersectionAirlines((oldArray) => [...oldArray.slice(0, 2),
          ...new Array(2).fill(null)]);
        return this.slide > this.listLength - 2 ? this.setSlide(this.listLength - 2)
          : this.setSlide(this.slide);
      }
      this.setIntersectionAirlines((oldArray) => [...oldArray.slice(0, 1),
        ...new Array(3).fill(null)]);
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

  protected

  checkSlidesLength(entry) {
    if (entry.contentRect.width < 900) {
      this.setSlidesLength(1);
    }
    if (entry.contentRect.width >= 900) {
      this.setSlidesLength(2);
    }
    if (entry.contentRect.width >= 1140) {
      this.setSlidesLength(3);
    }
    if (entry.contentRect.width >= 1536) {
      this.setSlidesLength(4);
    }
  }
}

export default Observer;
