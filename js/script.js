var itemList = document.getElementById('itemList');

fruit();
function fruit(){
  var items = [
      {
      id: 1,
      sort: 'fruit',
      unit: 'kg',
      name: 'banana',
      photo: 'banana.png',
      price: 2.99
      },
      {
      id: 2,
      sort: 'fruit',
      unit: 'kg',
      name: 'apple',
      photo: 'apple.png',
      price: 3.99
    },
    {
      id:3,
      sort: 'fruit',
      unit: 'kg',
      name: 'kiwifruit',
      photo: 'kiwifruit.png',
      price: 4.99
    },
    {
      id:4,
      sort: 'fruit',
      unit: 'ea',
      name: 'pineapple',
      photo: 'pineapple.png',
      price: 3.99
    }
  ];

  itemList.innerHTML ='';

  for (var i = 0; i < items.length; i++) {

    var itemCard ='<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';

    itemCard += '<div class="card itemThumb itemThumb2 my-2" style="width: 13rem;" data-id="'+items[i].id+'">';
      itemCard += '<img src ="img/'+items[i].photo+'" class="img-thumbnail" alt="">';
        itemCard += '<div class="card-body">';
          itemCard += '<h5 class="card-title">$ '+items[i].price+'</h5>';
        itemCard +='</div>';
      itemCard +='</div>';
    itemCard +='</div>';

  document.getElementById('itemList').innerHTML += itemCard;
  
  }

  var itemThumb = document.getElementsByClassName('itemThumb2');
  for (var i = 0; i < itemThumb.length; i++) {
    itemThumb[i].onclick = function(){
      var id = parseInt(this.dataset.id);
      detail(id);
    };
  }

function detail(itemNumber){
  var item;
  for (var i = 0; i < items.length; i++) {
    if(items[i].id === itemNumber){
      item = items[i];
      break;
    }
  }

  document.getElementById('itemImage').src = 'img/'+items[i].photo;
  document.getElementById('itemName').innerText = items[i].name;
  document.getElementById('itemUnit').innerText = 'Unit: '+items[i].unit;
  document.getElementById('itemSort').innerText = 'category: '+items[i].sort;
  document.getElementById('itemPrice').innerText = 'price: $'+items[i].price;

  document.getElementById('popup').style.display = 'flex';
  document.body.style.overflow ='hidden';


}

  document.getElementById('close').onclick = function(){
    document.getElementById('popup').style.display='none';
    document.body.style.overflow = 'scroll';
  }


  document.getElementById('fruit').addEventListener('click',function(){
    console.log('fruit');
    fruit();
  });
}


vegetable();
function vegetable(){
  var items = [
    {
        id:5,
        sort: 'vegetable',
        unit: 'ea',
        name: 'broccoli',
        photo: 'broccoli.png',
        price: 2.00
      },
      {
        id:6,
        sort: 'vegetable',
        unit: 'kg',
        name: 'tomatoes',
        photo: 'tomatoes.png',
        price: 4.99
      },
      {
        id:7,
        sort: 'vegetable',
        unit: 'kg',
        name: 'carrots',
        photo: 'carrots.png',
        price: 1.99
      },
      {
        id:8,
        sort: 'vegetable',
        unit: 'kg',
        name: 'mushrooms',
        photo: 'mushrooms.png',
        price: 14.99
      },
  ];

  itemList.innerHTML ='';

  for (var i = 0; i < items.length; i++) {

    var itemCard ='<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';

    itemCard += '<div class="card itemThumb itemThumb2 my-2" style="width: 13rem;" data-id="'+items[i].id+'">';
      itemCard += '<img src ="img/'+items[i].photo+'" class="img-thumbnail" alt="">';
        itemCard += '<div class="card-body">';
          itemCard += '<h5 class="card-title">$ '+items[i].price+'</h5>';
        itemCard +='</div>';
      itemCard +='</div>';
    itemCard +='</div>';
  document.getElementById('itemList').innerHTML += itemCard;

  }


}


//
// var items = [
//     {
//     id: 1,
//     sort: 'fruit',
//     unit: 'kg',
//     name: 'banana',
//     photo: 'banana.png',
//     price: 2.99
//     },
//     {
//     id: 2,
//     sort: 'fruit',
//     unit: 'kg',
//     name: 'apple',
//     photo: 'apple.png',
//     price: 3.99
//   },
//   {
//     id:3,
//     sort: 'fruit',
//     unit: 'kg',
//     name: 'kiwifruit',
//     photo: 'kiwifruit.png',
//     price: 4.99
//   },
//   {
//     id:4,
//     sort: 'fruit',
//     unit: 'ea',
//     name: 'pineapple',
//     photo: 'pineapple.png',
//     price: 3.99
//   },
//   {
//     id:5,
//     sort: 'vegetable',
//     unit: 'ea',
//     name: 'broccoli',
//     photo: 'broccoli.png',
//     price: 2.00
//   },
//   {
//     id:6,
//     sort: 'vegetable',
//     unit: 'kg',
//     name: 'tomatoes',
//     photo: 'tomatoes.png',
//     price: 4.99
//   },
//   {
//     id:7,
//     sort: 'vegetable',
//     unit: 'kg',
//     name: 'carrots',
//     photo: 'carrots.png',
//     price: 1.99
//   },
//   {
//     id:8,
//     sort: 'vegetable',
//     unit: 'kg',
//     name: 'mushrooms',
//     photo: 'mushrooms.png',
//     price: 14.99
//   },
//   {
//     id:9,
//     sort: 'butchery',
//     unit: 'kg',
//     name: 'chicken breast',
//     photo: 'breast.png',
//     price: 9.99
//   },
//   {
//     id:10,
//     sort: 'butchery',
//     unit: 'kg',
//     name: 'Rump steak',
//     photo: 'rump.png',
//     price: 22.99
//   },
//   {
//     id:11,
//     sort: 'butchery',
//     unit: 'kg',
//     name: 'lamb shoulder chops',
//     photo: 'banana.png',
//     price: 15.99
//   },
//   {
//     id: 12,
//     sort: 'butchery',
//     unit: 'kg',
//     name: 'chicken drumsticks',
//     photo: 'drumsticks.png',
//     price: 4.99
//   },
//   {
//     id: 13,
//     sort: 'butchery',
//     unit: 'kg',
//     name: 'trim pork medallion steak',
//     photo: 'pork.png',
//     price: 24.99
//   },
//   {
//     id: 14,
//     sort: 'butchery',
//     unit: 'kg',
//     name: 'smokey bacon sausages',
//     photo: 'sausages.png',
//     price: 14.29
//   },
//   {
//     id: 15,
//     sort: 'dairy',
//     unit: 'ea',
//     name: 'Milk 2l',
//     photo: 'milk.png',
//     price: 4.48
//   },
//   {
//     id: 16,
//     sort: 'dairy',
//     unit: 'ea',
//     name: 'cream 500ml',
//     photo: 'cream.png',
//     price: 4.08
//   },
//   {
//     id: 17,
//     sort: 'dairy',
//     unit: 'ea',
//     name: 'butter 500g',
//     photo: 'butter.png',
//     price: 6.99
//   },
//   {
//     id: 18,
//     sort: 'dairy',
//     unit: 'ea',
//     name: 'Eggs grade 7 10ea',
//     photo: 'eggs.png',
//     price: 14.99
//   },
//   {
//     id: 19,
//     sort: 'bakery',
//     unit: 'ea',
//     name: 'toast bread 700g',
//     photo: 'toast.png',
//     price: 3.49
//   },
//   {
//     id: 20,
//     sort: 'bakery',
//     unit: 'ea',
//     name: 'crumpets 6ea',
//     photo: 'crumpets.png',
//     price: 1.99
//   },
//   {
//     id: 21,
//     sort: 'bakery',
//     unit: 'ea',
//     name: 'chocolate muffins 6ea',
//     photo: 'muffins.png',
//     price: 3.99
//   },
//   {
//     id: 22,
//     sort: 'bakery',
//     unit: 'ea',
//     name: 'french stick',
//     photo: 'stick.png',
//     price: 1.99
//   }
// ];
//
// var i;
// for (var i = 0; i < items.length; i++) {
//   itemList.innerHTML += '<div class ="image-div"><h3>$ '+items[i].price+'</h3> <img class="image" src="img/'+items[i].photo+'"> </div>';
// }


itemList.innerHTML ='';
