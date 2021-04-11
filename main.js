
let names = [];
let form_x = document.getElementById('form_name');

function get_name(){
	let name_text = document.getElementById('name').value;
    let new_elem = document.createElement('h3').innerHTML = name_text;
    let space = document.createElement('br');
    if(name_text!=''){
    names.push(name_text);    
    form_x.after(new_elem);
    form_x.after(space);}
    document.getElementById('name').value = '';
    console.log(names);
}
let alco_names = [];
let form_y = document.getElementById('form_name_2');

function get_name_alco(){
	let alco_text = document.getElementById('alco').value;
    alco_names.push(alco_text);
    let new_elem = document.createElement('h3').innerHTML = alco_text;
    let space = document.createElement('br');
    if(alco_text!=''){
    form_y.after(new_elem);
    form_y.after(space);}
    document.getElementById('alco').value = '';
    console.log(alco_names);
}
main_combination = 2;
function check_alco(){
     let check_1 = document.getElementById('checkbox_1');
     let check_2 = document.getElementById('checkbox_2');
     let check_3 = document.getElementById('checkbox_3');
     let check_4 = document.getElementById('checkbox_4');
     let check_5 = document.getElementById('checkbox_5');
     let ar_check = [];
     ar_check.push(check_1,check_2,check_3,check_4,check_5);
     for(let i in ar_check){
     	if(ar_check[i].checked){
          let elem = document.createElement('h3');
          main_combination = Number(i);
          if(main_combination==0){main_combination+=2; }
          else{main_combination+=2;};
          elem.innerHTML = 'Вы выбрали коктель из '+ main_combination+' Напитков';
          let maim_elem =  document.getElementById('alco_check');
          maim_elem.append(elem);
          console.log(main_combination);
          break;
     	}
    }
 } 
 

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function names_random(arr){
    let arr_length = arr.length;
    return arr[getRandomInt(arr_length)];

}

function alco_random(arr){
    let arr_length = arr.length;
    let arr_alco = []
    while(arr_alco.length<main_combination){
        let flag = 0;
        let new_alco_elem = arr[getRandomInt(arr_length)];
        for(let alco in arr_alco){
            if(new_alco_elem==arr_alco[alco]){flag = 1};
        }
        if(flag!=1){arr_alco.push(new_alco_elem);flag=0};
    }
    return arr_alco;
}

function glass_random(arr,ml=300){
    let arr_length = arr.length;
    let new_ml = ml;
    let ml_arr = [];
    for(let i = arr_length;i!=1;i--){
        console.log(i);
        let random_int = getRandomInt(new_ml);
        ml_arr.push(random_int);
        new_ml-=random_int;
    }
    ml_arr.push(new_ml);
    console.log(ml_arr);
    return ml_arr;


}

function all_random(){
   let all_arr =[];
   all_arr.push(names_random(names),alco_random(alco_names));
   all_arr.push(glass_random(alco_random(alco_names)));
   console.log(all_arr);
   return all_arr;

};
function update_game(a=false){
     if(a){
       let old_text = document.getElementById('old_text');
       old_text.remove();
     }
     let new_menu = document.getElementById('menu');
     let text_label = document.createElement('div');
     text_label.id = 'old_text';
     let space = document.createElement('br');
     new_menu.append(text_label);
     if(document.getElementById('form')){
        document.getElementById('form').remove();
        let new_button = document.createElement('input');
        new_button.type ='button';
        new_button.value = 'Продолжить';
        new_button.id = 'start';
        new_button.onclick = function(){update_game(true)};
        text_label.before(new_button);
     }
     let full_arr = all_random();
     slow_litter(names_random(arr_tites),'cloud_text');
     let name_now = document.createElement('h2');
     name_now.innerHTML = "Сейчас пьёт : "+full_arr[0];
     text_label.append(name_now);
     for(let i = 0 ;i!=main_combination;i++){
           console.log(i+' '+main_combination);
           console.log(full_arr[1][i]+'=='+full_arr[2][i]);
           let new_elem = document.createElement('h2');
           new_elem.innerHTML = "  "+full_arr[1][i]+'--'+full_arr[2][i]+" МЛ" ;
           text_label.append(new_elem);  
        }

}

function start_game(){
    if(names!=[]&&alco_names!=[]){
        if(alco_names.length>=main_combination){
         update_game();   
        }
        else{ alert('Введите меньшее количество сочетаний! ')}
         }
}
function slow_litter(text,elem_id){
    let start_time = 200;
    console.log(text+"это текст");
    let text_length = text.length;
    let new_text_elem = document.getElementById(elem_id);
    new_text_elem.innerHTML = '';
    for(let i = 0;i!=text_length;i++){
        console.log(i+'--i');
        console.log(text[i]+'--text[i]');
        setTimeout(()=>new_text_elem.innerHTML+=text[i],start_time);
        console.log('work');
        start_time+=65;
    }

}
let arr_tites = ['Провалы в памяти — бесплатный приз на дне каждой бутылки водки.',
'Ненавижу быть пьяной. Думаешь, что тебе будет круто и весело, а на самом деле тебе грустно и плохо.',
'И всё это я сделал, не выпив ни капли рома!',
'С ним я чувствую себя так, словно выпила 10 коктейлей, а я выпила всего 6!','Я решил больше никогда не быть ни эгоистом, ни романтиком. Уверен, что стану отличным алкоголиком.'
,'Осторожнее, шампанское уже не кажется таким сладким, когда наклоняешься над унитазом.',
'Это ж надо было до такого додуматься. Хоть бы пьяные были.','Своим здоровьем и долголетием я обязан тому, что ни разу не прикоснулся ни к сигарете, ни к рюмке, ни к женщине, пока мне не стукнуло десять.',
'— Родители никогда не видели меня пьяной! То есть они так думают.','Мы ответственны за тех, кого подпоили.','Что значит «нажрался»? Да я выпил! Да, я несколько раскрепощен. Взволнован обществом прекрасной дамы. Но идейно я трезв!',
'Давай выпьем за то, чтобы я больше не пила!','Спать — не могу, есть — не могу, пить... пить — могу.','Когда я пьян, меня трудно удержать в рамках дружбы...','Алкоголь вызывает кратковременное расширение сосудов и круга друзей...','Пиши пьяным, редактируй трезвым.',
'Найти работу и наладить свою жизнь ты всегда успеешь, а паб закрывается через пять часов.',
'То, что у пьяной женщины на уме, у пьяного мужчины никогда не получится.','После трех рюмок коньяку француз переходит на минеральную воду, а русский — на «ты».',
'Алкоголь не меняет человека, а позволяет быть собой!','Проблема в том, что стоит мне напиться, как я влюбляюсь.','Алкоголь — он как любовь: до чего же хорошо в начале...','Вино — неплохо. Но виски быстрее.',
'Напоить меня — не вариант. Вырубить меня — не вариант. Меня вариант, но не вариант.','Эх, мастерство не пропьешь!... Хотя попытки были...','Пить нужно в удовольствие, а не в говно.','В тот вечер я изобрёл новый коктейль: «Всё с нуля». Треть водки, две трети слез.',
'Алкоголь — это анестезия, позволяющая перенести операцию под названием жизнь.','Пьяный способен на такие дела, каких никогда не замыслил бы, если бы не выпил.','Шампанское по утрам пьют или аристократы или дегенераты.',
'Чем больше я пью, тем чаще мои глюки оказываются реальностью.'];