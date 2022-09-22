class Gallery {
  constructor(element) {
    this.container = element;
    this.modal = document.querySelector('.modal');
    this.modalImg = document.querySelector('.main-img');
    this.filterSelector = document.getElementById('design-category-selector');

    this.list = {
      bathroom: 
      [
        'pexels-pixabay-358592.jpg',
        'pexels-luis-ruiz-1416244.jpg',
        'pexels-luis-ruiz-1370763.jpg',
        'pexels-joey-342800.jpg',
        'pexels-jean-van-der-meulen-14578.jpg',
        'pexels-christa-grover-1909791.jpg'
      ],

      bedroom: 
      [
        'pexels-pixabay-462235.jpg',
        'pexels-pixabay-279746.jpg',
        'pexels-pixabay-276671.jpg',
        'pexels-pixabay-271624.jpg',
        'pexels-jonathan-borba-3144580.jpg',
        'pexels-jean-van-der-meulen-24169.jpg',
        'pexels-dominika-roseclay-1139784.jpg',
        'pexels-dmitry-zvolskiy-2082093.jpg'
      ],

      kitchen: 
      [
        'pexels-saviesa-home-2089696.jpg',
        'pexels-mark-mccammon-2724749.jpg',
        'pexels-mark-mccammon-1080696.jpg',
        'pexels-level-media-3016430.jpg',
        'pexels-jean-van-der-meulen-14548.jpg',
        'pexels-dmitry-zvolskiy-2062426.jpg',
        'pexels-daria-shevtsova-1029803.jpg'
      ],

      livingroom: 
      [
        'pexels-victoria-borodinova-16487.jpg',
        'pexels-vecislavas-popa-1643383.jpg',
        'pexels-vecislavas-popa-1571459.jpg',
        'pexels-vecislavas-popa-1571457.jpg',
        'pexels-thorn-yang-154161.jpg',
        'pexels-terje-sollie-312029.jpg',
        'pexels-pixabay-276724.jpg',
        'pexels-pixabay-276583.jpg',
        'pexels-medhat-ayad-447592.jpg',
        'pexels-jean-van-der-meulen-14578.jpg',
        'pexels-isaw-company-945688.jpg'
      ],
      
      other: 
      [
        'pexels-valeria-boltneva-1129413.jpg',
        'pexels-tom-balabaud-1579739.jpg',
        'pexels-rachel-claire-6127209.jpg',
        'pexels-pixabay-276514.jpg',
        'pexels-jean-van-der-meulen-14578.jpg',
        'pexels-frans-van-heerden-633269.jpg',
        'pexels-daria-shevtsova-1029796.jpg',
        'pexels-blank-space-2647714.jpg'
      ]
    };
    this.category = this.filterSelector.value;

    this.closeModal = this.closeModal.bind(this);

    this.filterSelector.addEventListener('change', (e) => {
      this.category = e.target.value;
      this.renderGallery();
    });

    this.container.addEventListener('click', function (e) {
        if (e.target.classList.contains('image-clickable')) {
          this.openModal(e.target, this.list);
        }
      }.bind(this));
  };

  renderGallery() {
    const container = document.getElementById('gallery-container');
    container.innerHTML = '';
    if (this.category === 'all') {
      Object.keys(this.list).forEach((category) => {
        fillContainerElem(this.list[category], category);
      });
    } else {
      fillContainerElem(this.list[this.category], this.category);
    };
    function fillContainerElem(list, category) {
      list.forEach(imageName => {
        const path = `/gallery/${category}/${imageName}`;
        const divElem = document.createElement('div');
        divElem.classList.add('col-4', 'col-6-small', 'col-12-xsmall');
        container.appendChild(divElem);
        const spanElem = document.createElement('span');
        spanElem.classList.add('gallery-image', 'image', 'fit', 'save-proportion');
        spanElem.style.backgroundImage = `url("${path}")`;
        divElem.appendChild(spanElem);
        const imgElem = document.createElement('img');
        imgElem.src = path;
        imgElem.classList.add('image-clickable');
        spanElem.appendChild(imgElem);
      });
    };
  };

  openModal(selectedImage) {
    this.setMainImage(selectedImage);
    this.modal.classList.add('open');
    document.body.classList.add('stop-scroll');
    this.modal.addEventListener('click', this.closeModal);
  };

  closeModal() {
    this.modal.classList.remove('open');
    document.body.classList.remove('stop-scroll');
    this.modal.removeEventListener('click', this.closeModal);
  };

  setMainImage(selectedImage) {
    this.modalImg.src = selectedImage.src;
  };
}

const designs = new Gallery(document.getElementById('gallery-container'));
designs.renderGallery();
