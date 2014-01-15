'use strict';

angular.module('projectsApp')
  .value('catalog', [
  {
    id: 0,
    name: 'Batarang',
    img: '/images/shirt1.JPG',
    img_list:['/images/shirt1.JPG','/images/shirt2.JPG','/images/shirt3.JPG','/images/shirt4.JPG'],
    price: 80
  },
  {
    id: 1,
    name: 'Utility Belt',
    img: 'http://www.felthosfoundry.com/wordpress/wp-content/uploads/utilitybelt.jpg',
    price: 120
  },
  {
    id: 2,
    name: 'Cape',
    img: 'http://superflykids.com/images/poplet-solid-color-superhero-cape-02_0.jpg',
    price: 47
  },
  {
    id: 3,
    name: 'Batmobile',
    img: 'http://cache.jalopnik.com/assets/images/12/2007/09/batmobile_Tumbler.jpg',
    price: 1000000
  },
  {
    id: 4,
    name: 'Sony NEX-6',
    img: 'http://i.ebayimg.com/00/s/MjIwWDIyMA==/z/lDIAAOxy63FSq72g/$_1.JPG?set_id=2',
    price: 47650
  },
      {
    id: 5,
    name: 'Watch',
    img: 'http://thumbs.ebaystatic.com/d/w225/m/mWAlJnmVq_0gusuhOaDwuPg.jpg',
    price: 16929
  },
  {
    id: 6,
    name: 'Leather Jacket',
    img: 'http://thumbs.ebaystatic.com/d/w225/m/mm3T5dUhKBZVeAgbDMysJrA.jpg',
    price: 5750
  },
  {
    id: 7,
    name: 'Lenovo Tablet',
    img: 'http://thumbs.ebaystatic.com/d/w225/m/mghYCIUqNPNPDZaxETYNCig.jpg',
    price: 24990
  },
]);
