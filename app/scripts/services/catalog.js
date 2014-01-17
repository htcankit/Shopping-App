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
  ELECTRONICS: [
        {
          id: 0,
          name: 'Batmobile',
          img: 'http://cache.jalopnik.com/assets/images/12/2007/09/batmobile_Tumbler.jpg',
          img_list:['http://cache.jalopnik.com/assets/images/12/2007/09/batmobile_Tumbler.jpg','/images/shirt2.JPG','/images/shirt3.JPG','/images/shirt4.JPG'],
          price: 1000000,
          category: 'ELECTRONICS'          
        },  
        {
          id: 1,
          name: 'Lenovo Tablet',
          img: 'http://thumbs.ebaystatic.com/d/w225/m/mghYCIUqNPNPDZaxETYNCig.jpg',
          img_list:['http://thumbs.ebaystatic.com/d/w225/m/mghYCIUqNPNPDZaxETYNCig.jpg','/images/shirt2.JPG','/images/shirt3.JPG','/images/shirt4.JPG'],

          price: 24990,
          category: 'ELECTRONICS',
        },        
        {
          id: 2,
          name: 'Apple iPad Mini',
          img: '/images/ipad1.jpeg',
          img_list: ['/images/ipad1.jpeg','/images/ipad2.jpeg','/images/ipad3.jpeg'],
          price: 16390,
          category: 'ELECTRONICS'
        },        
      ],
  WOMEN:[],
  'BABY & KIDS':[],
  'BOOKS & MEDIA':[],
  'HOME & kITCHEN':[],
  'MORE STORIES':[
        {
          id: 0,
          name: 'Utility Belt',
          img: 'http://www.felthosfoundry.com/wordpress/wp-content/uploads/utilitybelt.jpg',
          img_list: ['http://www.felthosfoundry.com/wordpress/wp-content/uploads/utilitybelt.jpg','/images/ipad2.jpeg','/images/ipad3.jpeg'],
          price: 120,
          category: 'MORE STORIES'
        },
        {
          id: 1,
          name: 'Cape',
          img: 'http://superflykids.com/images/poplet-solid-color-superhero-cape-02_0.jpg',
          img_list: ['http://superflykids.com/images/poplet-solid-color-superhero-cape-02_0.jpg','/images/ipad2.jpeg','/images/ipad3.jpeg'],
          price: 47,
          category: 'MORE STORIES'
        },
        {
          id: 2,
          name: 'Sony NEX-6',
          img: 'http://i.ebayimg.com/00/s/MjIwWDIyMA==/z/lDIAAOxy63FSq72g/$_1.JPG?set_id=2',
          img_list: ['http://i.ebayimg.com/00/s/MjIwWDIyMA==/z/lDIAAOxy63FSq72g/$_1.JPG?set_id=2','/images/ipad2.jpeg','/images/ipad3.jpeg'],
          price: 47650,
          category: 'MORE STORIES'
        },
        {
          id: 3,
          name: 'Watch',
          img: 'http://thumbs.ebaystatic.com/d/w225/m/mWAlJnmVq_0gusuhOaDwuPg.jpg',
          img_list: ['http://thumbs.ebaystatic.com/d/w225/m/mWAlJnmVq_0gusuhOaDwuPg.jpg','/images/ipad2.jpeg','/images/ipad3.jpeg'],
          price: 16929,
          category: 'MORE STORIES'
        },
        {
          id: 4,
          name: 'Leather Jacket',
          img: 'http://thumbs.ebaystatic.com/d/w225/m/mm3T5dUhKBZVeAgbDMysJrA.jpg',
          img_list: ['http://thumbs.ebaystatic.com/d/w225/m/mm3T5dUhKBZVeAgbDMysJrA.jpg','/images/ipad2.jpeg','/images/ipad3.jpeg'],
          price: 5750,
          category: 'MORE STORIES'
        },
      ]
});
