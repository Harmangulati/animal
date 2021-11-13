function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ysCexbuXu/.json', modelReady);  
   }
   function modelReady()
{
 classifier.classify(gotResults);   
}
function gotResults(error, results)
{
if(error){
 console.error(error);   
}
else{
}
console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1; 
    random_number_b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML="I can hear- "+results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+" %";
   document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
   document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
   if(results[0].label=="meow")
{
 img.src="GettyImage-1288861082-scaled.jpg";   
}
else if(result[0].label=="roar"){
  img.src="hero-loin.jpg";  
}
else if(result[0].label=="chu"){
    img.src="pet-parrot-on-human-hand-1022424278-5c3ded0ac9e77c00016e6e2b.jpg";  
}
else if(result[0].label=="moooo"){
    img.src="brown-Guernsey-cow.jpg";  
}
else if(result[0].label==eagle){
    img.src="file-20210804-17-1qovgvx.jpg"; 
} 
}