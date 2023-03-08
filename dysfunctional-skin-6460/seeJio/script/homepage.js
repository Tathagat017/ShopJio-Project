let slider=document.getElementById("slider1")
let index=0;
let image_slide=["https://assets.ajio.com/cms/AJIO/WEB/Top-D-Fashionation-5090-1440x470.gif",
"https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P2-WinterwearWardrobe-USPAFortCollins-Min50.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P3-WesternwearBrands-DenislingoMissChase-Min60ExtraUpto35.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P4-Trends-Flat70.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P5-gantSuperdry-Min50.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-MainBanner-P6-Handbags-CapreseLinoPerros-Upto70.jpg"
]
function user(){
    setInterval(()=>{ 
        slider.setAttribute("src",image_slide[index])
    index++;
    if(index>=image_slide.length){
        index=0;
    }
    
},1000)
   
}
user()
let slider2=document.getElementById("slider2")
let index1=0;
let image_silder1=["https://assets.ajio.com/cms/AJIO/WEB/1440x128--FB.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/Paytm-1440x128pppp.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-offers-payupto3AJIOpoints.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/1440x128--p.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-offers-relianceone.jpg"
]
function user1(){
setInterval(()=>{
    slider2.setAttribute("src",image_silder1[index1])
    index1++
    if(index1>=image_silder1.length){
        index1=0;
    }
},1000)
}
user1()
let slider3=document.getElementById("slider3")
let index2=0;
let image_silder2=["https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-26Hrs-P1-Winterwear-GAP-25Off.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/14012023-UHP-D-26Hrs-P2-AnubhuteeJuniperSoch-Min60.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/14012023-UHP-D-26Hrs-P3-Winterwear-USPAISceneryVeroModa-Flat70.jpg"]
function user2(){
setInterval(()=>{
    slider3.setAttribute("src",image_silder2[index2])
    index2++
    if(index2>=image_silder2.length){
        index2=0;
    }
},1000)
}
user2()
let slider4=document.getElementById("slider4")
let index3=0;
let image_silder4=["https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-TopBanner-P1-BestsellingWinterwear-USPAFortCollins-3050.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-TopBanner-P2-DealsLikeNeverBefore-USPAFortCollins-6080.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-TopBanner-P0-KidsCarnival-Kidswear-KGFrendzKBTeamspirit-Starting99.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-TopBanner-P4-SportswearBrands-AdidasFila-Min50.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-TopBanner-P5-gantSuperdry-Min50.jpg"]
function user3(){
setInterval(()=>{
slider4.setAttribute("src",image_silder4[index3])
index3++;
if(index3>=image_silder4.length){
    index3=0;
}
},1000)
}
user3()
let slider5=document.getElementById("slider5")
let index4=0;
let image_silder5=["https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P1-BestOfInternationalBrands-FCUKTrendyol-Upto60.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P2-Cultsport-Min60.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P3-WinterIsComing-BullmerBelleFille-Starting299Extra30.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P4-MnS-Upto40Extra35.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/18012023-UHP-D-DailyBanner-P5-GAP-20Offon2.jpg"]
function user4(){
setInterval(()=>{
 slider5.setAttribute("src",image_silder5[index4])
 index4++
 if(index4>=image_silder5.length){
    index4=0;
 }
},1000)
}
user4()
let slider6=document.getElementById("slider6")
let index6=0;
let image_slider6=["https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-JIT-P1-BestOfEthnic-KimayraKVSFab-Starting499Extraupto35.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-JIT-P2-HomegrownBestsellers-IVOCTheBearHouse-Upto80.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-JIT-P3-TopBrands-janasyaLovista-Min60.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-JIT-P4-Lifestyle-Upto60.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-JIT-P5-Winterwear-BelleFille98North-Flat50.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/17012023-UHP-D-JIT-P6-StyliSpykar-Upto50.jpg",
"https://assets.ajio.com/cms/AJIO/WEB/117012023-UHP-D-JIT-P7-BrandsOfTheDay-GiltoGespo-Min40NEW.jpg"]
function user5(){
setInterval(()=>{
    slider6.setAttribute("src",image_slider6[index6])
    index6++;
    if(index6>=image_slider6.length){
        index6=0;
    }
},1000)
}
user5()
let slider7=document.getElementById("slider7")
let index7=0;
let image_slider7=[
    "https://assets.ajio.com/cms/AJIO/WEB/18012023-d-mhp-uhphim-p1-brands-upto50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/18012023-d-mhp-uhphim-p2-brands-starting999.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/18012023-d-mhp-uhphim-p3-brands-upto60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/18012023-d-mhp-uhphim-p4-brands-3060.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/18012023-d-mhp-uhphim-p5-brands-starting699.jpg"
]
function user6(){
setInterval(()=>{
slider7.setAttribute("src",image_slider7[index7])
index7++;
if(index7>=image_slider7.length){
    index7=0;
}
},1000)
}
user6()
