export default {
  desktop() {
    return document.body.scrollWidth >= 768 ? 'inherit' : 'none';
  },
  mobile() {
    return document.body.scrollWidth < 768 ? 'inherit' : 'none';
  },
};
