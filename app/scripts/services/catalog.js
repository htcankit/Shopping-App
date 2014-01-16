'use strict';

angular.module('projectsApp')
  .value('catalog', {
    MEN: [
          {
            id: 0,
            name: 'Batarang',
            img: '/images/shirt1.JPG',
            img_list:['/images/shirt1.JPG','/images/shirt2.JPG','/images/shirt3.JPG','/images/shirt4.JPG'],
            price: 80,
            category: 'MEN'
        },
      ],
  ELECTORONICS: [
        {
          id: 0,
          name: 'Batmobile',
          img: 'http://cache.jalopnik.com/assets/images/12/2007/09/batmobile_Tumbler.jpg',
          img_list:['http://cache.jalopnik.com/assets/images/12/2007/09/batmobile_Tumbler.jpg','/images/shirt2.JPG','/images/shirt3.JPG','/images/shirt4.JPG'],
          price: 1000000,
          category: 'ELECTORONICS'          
        },  
        {
          id: 1,
          name: 'Lenovo Tablet',
          img: 'http://thumbs.ebaystatic.com/d/w225/m/mghYCIUqNPNPDZaxETYNCig.jpg',
          img_list:['http://thumbs.ebaystatic.com/d/w225/m/mghYCIUqNPNPDZaxETYNCig.jpg','/images/shirt2.JPG','/images/shirt3.JPG','/images/shirt4.JPG'],

          price: 24990,
          category: 'ELECTORONICS',
        },        
        {
          id: 2,
          name: 'Apple iPad Mini',
          img: '/images/ipad1.jpeg',
          img_list: ['/images/ipad1.jpeg','/images/ipad2.jpeg','/images/ipad3.jpeg'],
          price: 16390,
          category: 'ELECTORONICS'
        },        
      ],
  OTHERS:[
        {
          id: 0,
          name: 'Utility Belt',
          img: 'http://www.felthosfoundry.com/wordpress/wp-content/uploads/utilitybelt.jpg',
          img_list: ['http://www.felthosfoundry.com/wordpress/wp-content/uploads/utilitybelt.jpg','/images/ipad2.jpeg','/images/ipad3.jpeg'],

          price: 120
        },
        {
          id: 1,
          name: 'Cape',
          img: 'http://superflykids.com/images/poplet-solid-color-superhero-cape-02_0.jpg',
          price: 47
        },
        {
          id: 2,
          name: 'Sony NEX-6',
          img: 'http://i.ebayimg.com/00/s/MjIwWDIyMA==/z/lDIAAOxy63FSq72g/$_1.JPG?set_id=2',
          price: 47650
        },
        {
          id: 3,
          name: 'Watch',
          img: 'http://thumbs.ebaystatic.com/d/w225/m/mWAlJnmVq_0gusuhOaDwuPg.jpg',
          price: 16929
        },
        {
          id: 4,
          name: 'Leather Jacket',
          img: 'http://thumbs.ebaystatic.com/d/w225/m/mm3T5dUhKBZVeAgbDMysJrA.jpg',
          price: 5750
        },
      ]
});
