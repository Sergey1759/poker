function card(id,title,lear,src_image){
    this.id        = id,
    this.title     = title,
    this.lear      = lear,
    this.src_image = src_image
};


 card.prototype.show_card = function show(card){
    console.log(this.id + ' ' + this.title + ' ' + this.lear + ' ' + this.src_image)
}
 
var koloda = [
  card1 = new card('1','2','bubna','231.jpg'),
  card2 = new card('2','2','bubna','231.jpg'),
  card3 = new card('3','2','bubna','231.jpg'),
  card4 = new card('4','2','bubna','231.jpg'),
  card5 = new card('5','2','bubna','231.jpg'),
  card6 = new card('6','2','bubna','231.jpg'),
  card7 = new card('7','2','bubna','231.jpg'),
  card8 = new card('8','2','bubna','231.jpg'),
  card9 = new card('9','2','bubna','231.jpg'),
  card10 = new card('10','2','bubna','231.jpg'),
  card11 = new card('11','2','bubna','231.jpg'),
  card12 = new card('12','2','bubna','231.jpg'),
  card13 = new card('13','2','bubna','231.jpg'),
  card14 = new card('14','2','bubna','231.jpg'),
  card15 = new card('15','2','bubna','231.jpg'),
  card16 = new card('16','2','bubna','231.jpg'),
  card17 = new card('17','2','bubna','231.jpg'),
  card18 = new card('18','2','bubna','231.jpg'),
  card19 = new card('19','2','bubna','231.jpg'),
  card20 = new card('20','2','bubna','231.jpg'),
  card21 = new card('21','2','bubna','231.jpg'),
  card22 = new card('22','2','bubna','231.jpg'),
  card23 = new card('23','2','bubna','231.jpg'),
  card24 = new card('24','2','bubna','231.jpg'),
  card25 = new card('25','2','bubna','231.jpg'),
  card26 = new card('26','2','bubna','231.jpg'),
  card27 = new card('27','2','bubna','231.jpg'),
  card28 = new card('28','2','bubna','231.jpg'),
  card29 = new card('29','2','bubna','231.jpg'),
  card30 = new card('30','2','bubna','231.jpg'),
  card31 = new card('31','2','bubna','231.jpg'),
  card32 = new card('32','2','bubna','231.jpg'),
  card33 = new card('33','2','bubna','231.jpg'),
  card34 = new card('34','2','bubna','231.jpg'),
  card35 = new card('35','2','bubna','231.jpg'),
  card36 = new card('36','2','bubna','231.jpg'),
  card37 = new card('37','2','bubna','231.jpg'),
  card38 = new card('38','2','bubna','231.jpg'),
  card39 = new card('39','2','bubna','231.jpg'),
  card40 = new card('40','2','bubna','231.jpg'),
  card41 = new card('41','2','bubna','231.jpg'),
  card42 = new card('42','2','bubna','231.jpg'),
  card43 = new card('43','2','bubna','231.jpg'),
  card44 = new card('44','2','bubna','231.jpg'),
  card45 = new card('45','2','bubna','231.jpg'),
  card46 = new card('46','2','bubna','231.jpg'),
  card47 = new card('47','2','bubna','231.jpg'),
  card48 = new card('48','2','bubna','231.jpg'),
  card49 = new card('49','2','bubna','231.jpg'),
  card50 = new card('50','2','bubna','231.jpg'),
  card51 = new card('51','2','bubna','231.jpg'),
  card52 = new card('52','2','bubna','231.jpg')
]


function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
var Random_arr = [];

for(var i=0; i<=51; i++){
    Random_arr[i] = i+1;
}
for(var i=0; i<=51; i++){
   //console.log(Random_arr[i]);
}
var arr = []

for(var i=0; i<=9; i++){
  
    var number = randomInteger(1,Random_arr.length);
    console.log('num = ' + number);
    
    for(var j=0; j <= arr.length; j++){
        console.log(" arrJ["+ j +"]= " + arr[j]);
       if (arr[j] != number) {arr[i] = number; Random_arr.splice(number-1,1); } else {
           console.log('error');
       }
       console.log(" arrI["+ i +"]= " + arr[i] + " num = " + number + " arrJ["+ j +"]= " + arr[j] + " Random_arr.length = " + Random_arr.length);
    }
    
    
    //console.log = number;
    
    
  //  console.log('arr[i] ' + arr[i]);
   // console.log(' lenght = ' + Random_arr.length);
    
}


for(key in koloda){
    if(koloda[key].id == 4 || koloda[key].id == 8){
     //   koloda[key].show_card();
    }
}
