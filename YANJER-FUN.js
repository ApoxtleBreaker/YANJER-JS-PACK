let lys = 
[["作曲 : Mili/momocashew",0],["作词 : Mili",50],["Switch on the power line",100],["Remember to put on",1740],["PROTECTION",2920],["Lay down your pieces",3873],["And let's begin",5491],["OBJECT CREATION",6380],["Fill in my data parameters",7446],["INITIALIZATION",10091],["Set up our new world",11095],["And let's begin the",12906],["SIMULATION",13891],["world.execute(me);",16000],["If I'm a set of points",29709],["Then I will give you my",31116],["DIMENSION",32682],["If I'm a circle",33412],["Then I will give you my",34646],["CIRCUMFERENCE",36287],["If I'm a sine wave",37067],["Then you can sit on all my",38596],["TANGENTS",40049],["If I approach infinity",40706],["Then you can be my",42346],["LIMITATIONS",43507],["Switch my current",44452],["To AC to DC",45850],["And then blind my vision",47672],["So dizzy so dizzy",49534],["Oh we can travel",51363],["To A.D to B.C",53225],["And we can unite",55083],["So deeply so deeply",56916],["If I can",59223],["If I can give you all the",59687],["STIMULATIONS",61958],["Then I can",62589],["Then I can be your only",63535],["SATISFACTION",65397],["If I can make you happy",66601],["I will run the",68252],["EXECUTION",69259],["Though we are trapped",70084],["In this strange strange",71764],["SIMULATION",73169],["If I'm an eggplant",74045],["Then I will give you my",75422],["NUTRIENTS",76959],["If I'm a tomato",77576],["Then I will give you",79226],["ANTIOXIDANTS",80620],["If I'm a tabby cat",81351],["Then I will purr for your",82833],["ENJOYMENT",84268],["If I'm the only god",85078],["Then you're the proof of my",86538],["EXISTENCE",87922],["Switch my gender",88587],["To F to M",90197],["And then do whatever",92015],["From AM to PM",93953],["Oh switch my role",95465],["To S to M",97739],["So we can enter",99349],["The trance the trance",101474],["If I can",103489],["If I can feel your",104197],["VIBRATIONS",106293],["Then I can",107220],["Then I can finally be",107903],["COMPLETION",110221],["Though you have left",110900],["You have left",112220],["You have left",113100],["You have left",114180],["You have left",114920],["You have left me in",115780],["ISOLATION",117274],["If I can",118333],["If I can erase all the pointless",118979],["FRAGMENTS",120860],["Then maybe",121728],["Then maybe you won't leave me so",122714],["DISHEARTENED",124890],["Challenging your god",125708],["You have made some",128661],["ILLEGAL ARGUMENTS",131224],["EXECUTION",147660],["EXECUTION",148600],["EXECUTION",149520],["EXECUTION",150540],["EXECUTION",151520],["EXECUTION",152280],["EXECUTION",153160],["EXECUTION",153980],["EXECUTION",155200],["EXECUTION",156080],["EXECUTION",157040],["EXECUTION",158000],["EIN",158900],["DOS",159321],["TROIS",159657],["NE",160244],["FEM",160693],["LIU",161124],["EXECUTION",161584],["If I can",162632],["If I can give them all the",163315],["EXECUTION",165166],["Then I can",166016],["Then I can be your only",167022],["EXECUTION",168911],["If I can have you back",169824],["I will run the",171868],["EXECUTION",172712],["Though we are trapped",173643],["We are trapped ah",174975],["I've studied",177246],["I've studied how to properly",178173],["LO-O-OVE",179929],["Question me",180857],["Question me I can answer all",181901],["LO-O-OVE",183646],["I know the algebraic expression of",184540],["LO-O-OVE",187665],["Though you are free",188483],["I am trapped",189746],["Trapped in",190801],["LO-O-OVE",191356],["EXECUTION",205811]]


//World
let me,World = new Object();
World.init = () => {
    console.ly = function(ly){
        console.log('%c'+ly, `color: #000000; font-size: 24px;text-shadow: 1px 1px ${rdm.Nid(1)}px #ffffff;`)}
    console.ly(`World Initialization...`);
    me = 'me'
    

    let char = []
        World.Create = (name) => {
            if(char.includes(name)){
                console.ly(`Character ${name} Already Exists`);
                return
            }
            if(name == 'ApoxtleBreaker'){
                console.ly(`YOU ARE NOT ALLOWED TO DO THAT`);
                return
            }
            char.push(new Array(name, rdm.N(1, 10)));
            console.ly(`Character ${name} Created`);
            return char;
        }

        World.Remove = (name) => {
            if(char.includes(name) == false){
                console.ly(`Character ${name} Not Found`);
                return
            }
            if(name == 'ApoxtleBreaker'){
                console.ly(`Request was kicked back`);
                char.forEach((item, index) => {
                if(item[0] == name){
                    let namel = char[index+1][0]
                    char[index+1][1] = -1
                    char[index+1][0] = 'ERROR'
                    console.ly(`Character ${namel} Removed`);
                }
                return
                })
            
            }
            char.forEach((item, index) => {
                if(item[0] == name){
                    char.splice(index, 1)
                    console.ly(`Character ${name} Removed`);
                }
            })
        }

        World.List = () => {
            console.ly(`Character List:`);
            console.log(char)
            return char
        }

        World.Search = (name) => {
            let result = null;
            char.forEach((item) => {
                if(item[0] == name){
                    result = item
                    console.ly(`Character ${name} Found`);
                    console.log(item)
                    return result
                }
            })
        }

        World.SetLevel = (name, level) => {
            if(name == 'ApoxtleBreaker'){
                console.ly(`ApoxtleBreaker can't be adjusted`);
                return
            }
            char.forEach((item) => {
                if(item[0] == name){
                    item[1] = level
                    console.ly(`Character ${name} Level Set To ${level}`);
                    return item[1]
                }
            })
        }
        World.levelUp = (name) => {
            char.forEach((item) => {
                if(item[0] == name){
                    item[1] += 1
                    console.ly(`Character ${name} Level Up To ${item[1]}`);
                    return item[1]
                }
            })
        }



        World.Bettle = (t1, t2) => {
            if(t1 == 'ApoxtleBreaker' || t2 == 'ApoxtleBreaker'){
                console.ly(`ApoxtleBreaker will define the result`);
                if(t1[1] == 'ApoxtleBreaker'){
                    console.ly(`${t1} Win`);
                    World.levelUp(t1[0])
                    World.Remove(t2)
                }else{
                    console.ly(`${t2} Win`);
                    World.levelUp(t2[0])
                    World.Remove(t1)
                }
                return
            }
            console.ly(`${t1} Bettle ${t2}`);
            if(t1[1] > t2[1]){
                console.ly(`${t1} Win`);
                World.levelUp(t1[0])
                World.Remove(t2)
            }else if(t1[1] < t2[1]){
                console.ly(`${t2} Win`);
                World.levelUp(t2[0])
                World.Remove(t1)
            }else{
                result = rdm.N(1, 2);
                if(result == 1){
                    console.ly(`${t1} Win`);
                    World.levelUp(t1[0])
                    World.Remove(t2)
                }else{
                    console.ly(`${t2} Win`);
                    World.levelUp(t2[0])
                    World.Remove(t1)
                }
            }
        }

        let killpop = 0;
            World.kill = (name) => {
                let AP
                if(name == 'ApoxtleBreaker'){
                    char.forEach((item, index) => {
                        if(item[0] == 'ApoxtleBreaker'){
                            AP = item
                     }
                     char = new Array(AP)        
                 })
                 return
                }
                if(char.includes(name) == false){
                    console.ly(`Character ${name} Not Found`);
                    return
                }else{
                char.forEach((item, index) => {
                    if(item[0] == name){
                        if(char[index][1] > 255){
                            killpop += 1
                        }
                        char[index][1] = '0'
                        char[index][0] = 'Unknown'
                        console.ly(`Character ${name} Killed`);
                        if(killpop == 10){
                            console.ly(`NoW , i gET eNoUGh pOWeR`);
                            char.push(new Array('ApoxtleBreaker', NaN));
                        }
                    }
                })
                }
            }
    let icode = rdm.Nid(10),ecode = null;
    World.summon = (code) => {
        if(code == icode || code == ecode){
            char.push(new Array('ApoxtleBreaker', NaN));
        }
    }
    World.tryAccess = (code) => {
        return new Array('ApoxtleBreaker', NaN)
    }
    World.execute = (me) => {
    if(me == ['ApoxtleBreaker', NaN] || me == 'me'){
        //静态网页
        // wordla = new Audio('/src/js/world/a.mp3');
            //node中
            wordla = new Audio(path.join(__dirname, '../world/a.mp3'));
            document.body.appendChild(wordla)
            wordla.play();
            for(ly in lys){
            let lyt = lys[ly];
            setTimeout(() => {
                console.ly(lyt[0])
            },lyt[1])
        }
        }else{
            return 'No Permission To Execute'
        }
    }

    //颜色坍缩
    World.WTF = (what) => {
    if(what === World){
        World = new Object();
        World.start = () => {
            document.body.innerHTML = '<h1>WTF?</h1>';
        }
        return 'TIME OUT'
    }
    let skl = document.createElement('div');
    skl.id = 'skl';
    skl.style.position = 'fixed';
    skl.style.top = '0';
    skl.style.left = '0';
    skl.style.width = '100%';
    skl.style.height = '100%';
    skl.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    skl.style.zIndex = '9999';
    skl.innerText = 'Click To Hack in 3...2...1...';
    skl.textalign = 'center';
    skl.style.color = 'white';
    skl.style.fontSize = '30px';
    skl.style.paddingTop = rdm.N(100, 500) + 'px';
    skl.style.paddingLeft = rdm.N(100, 500) + 'px';
    document.body.appendChild(skl);
    skl = document.getElementById('skl');
    skl.addEventListener('click', () => {
        skl.style.display = 'none';
        all = document.querySelectorAll('*');
        setInterval(() => {
            all.forEach((item) => {
                item.style.backgroundColor = rdm.color();
            })
        }, 700);
        all.forEach((item) => { 
            item.style.transition = 'all 0.7s ease-in-out';
            setTimeout(() => {
                if(item.children.length > 0){
                    item.style.padding = rdm.N(10, 50) + 'px';
                    item.style.margin = rdm.N(10, 50) + 'px';
                    item.style.fontSize = rdm.N(10, 50) + 'px';
                    item.style.color = rdm.color();
                    if(rdm.N(0, 100) <= 50){
                        item.style.border = '1px solid ' + rdm.color();
                        item.style.top = rdm.N(0, 100) + '%';
                        item.style.left = rdm.N(0, 100) + '%';
                        item.style.width = rdm.N(10, 50) + 'px';
                        item.style.height = rdm.N(10, 50) + 'px';
                        item.style.transform = 'rotate(' + rdm.N(0, 360) + 'deg)';
                        // item.style.opacity = rdm.N(0, 1);
                        item.style.transition = 'all 1s ease-in-out';
                        if(rdm.N(0, 100) <= 5){
                            item.position = 'absolute';
                            item.style.backgroundColor = rdm.color();
                        }
                    }
                }else{
                    item.remove()
                }
            }, rdm.N(1000, 5000));
        })

        document.body.removeChild(skl);})
    }


    return 'Hello User';
}


