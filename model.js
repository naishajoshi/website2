 (function () {
   const MODELS = {
     panigale: {
       name: 'Panigale V4',
       tagline: 'The essence of Ducati Corse on the road.',
       image: './images/panigale.png',
       specs: {
         Engine: '1103 cc Desmosedici Stradale',
         Power: '214 hp (157.5 kW)',
         Torque: '124 Nm @ 10,000 rpm',
         'Dry Weight': '175 kg',
         Price: 'From $24,995'
       }
     },
     diavel: {
       name: 'Diavel',
       tagline: 'Muscular lines and performance for everyday thrills.',
       image: './images/Diavel.png',
       specs: {
         Engine: '1262 cc',
         Power: '159 hp',
         Torque: '129 Nm',
         'Dry Weight': '218 kg',
         Price: 'From $16,995'
       }
     },
     multistrada: {
       name: 'Multistrada V4',
       tagline: 'Adventure without limits, comfort with performance.',
       image: './images/Multistrada.png',
       specs: {
         Engine: '1158 cc V4 Granturismo',
         Power: '170 hp',
         Torque: '125 Nm',
         'Dry Weight': '215 kg',
         Price: 'From $22,995'
       }
     },
     desertx: {
       name: 'DesertX',
       tagline: 'Born to explore, ready for the rally.',
       image: './images/DesertX.png',
       specs: {
         Engine: '937 cc Testastretta 11°',
         Power: '110 hp',
         Torque: '92 Nm',
         'Dry Weight': '202 kg',
         Price: 'From $17,995'
       }
     }
   };

   const params = new URLSearchParams(window.location.search);
   const id = params.get('id') || 'panigale';
   const model = MODELS[id] || MODELS.panigale;

   function setText(selector, value) {
     const el = document.querySelector(selector);
     if (el) el.textContent = value;
   }

   setText('#model-title', model.name);
   setText('#model-tagline', model.tagline);
   setText('#model-bc', model.name);

   const img = document.getElementById('model-image');
   if (img) {
     img.src = model.image;
     img.alt = model.name;
   }
   const hero = document.getElementById('model-hero');
   if (hero) {
     hero.style.background = `center/cover no-repeat url('${model.image}')`;
   }

   const specsList = document.getElementById('specs-list');
   if (specsList) {
     specsList.innerHTML = '';
     Object.entries(model.specs).forEach(([k, v]) => {
       const row = document.createElement('div');
       const dt = document.createElement('dt');
       const dd = document.createElement('dd');
       dt.textContent = k;
       dd.textContent = v;
       row.appendChild(dt);
       row.appendChild(dd);
       specsList.appendChild(row);
     });
   }
 })();
