function poker(){
    var hands;
    var isFlush = true;
    var isStraight = true;
    var isRoyalStraight = false;
    
    //二次元配列を作って適当に手札を作る（数字とスーツの組み合わせを格納する）
    //s:スペード／h:ハート／c:クローバー／d:ダイヤ
    var arr = new Array();
    arr = [
      {suit:"s",num:12},
      {suit:"d",num:13},
      {suit:"h",num:11},
      {suit:"s",num:1},
      {suit:"d",num:10}
    ];
    
    //ソート
    arr.sort(function(a,b){
      if(a.num<b.num) return -1;
      if(a.num > b.num) return 1;
      return 0;
    });
    
    //フラッシュとストレートかを判定
    for(var i = 0; i<arr.length-1; i++){
      flg1 = (arr[i].suit == arr[i+1].suit);
      flg2 = ((arr[i+1].num - arr[i].num) ==1);
      if(!flg1) isFlush = false;
      if(!flg2) isStraight = false;
      }
      isRoyalStraight = (arr[0].num==1&&arr[1].num==10&&arr[2].num==11&&arr[3].num==12&&arr[4].num==13);
    
      //すべて判定
    if(isFlush) {  
      hands ="Flush";
      if(isStraight) hands ="StraightFlush";
      if(isRoyalStraight) hands ="RoyalStraightFlush";
      return hands;
    }else{
      if(isStraight||isRoyalStraight) {
        return hands = "Straight";
      }else{
          var cnt =0;
          for(var max = 3; max>=0; max--){
            var i = 3 -max; 
            for(var j=1; j<=max+1; j++){
              if(arr[i].num==arr[i+j].num) cnt++;
            }
          }
          switch(cnt){
            case 6:
              return hands= "FourCards";
            case 4:
              return hands= "FullHouse";
            case 3:
              return hands= "ThreeCards";
            case 2:
              return hands= "TwoPairs";
            case 1:
              return hands= "OnePair";
            default:
              return hands = "NoPair";
          }    
      }
    }
    }
    