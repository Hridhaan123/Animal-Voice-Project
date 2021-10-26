function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    Classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/eCbFsx39P/model.json", modelReady);
}
function modelReady() {
    Classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");
        if (results[0].label=='Whistling') {
            img1.src = "cat-jam.gif";
            img2.src = "aliens-02.png";            
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if (results[0].label=='Drumming') {
            img1.src = "aliens-01.png";
            img2.src = "dog-dance.gif";            
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if (results[0].label=='Singing') {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";            
            img3.src = "dinosaur-dancing-dino.gif";
            img4.src = "aliens-04.png";
        }
        else {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";            
            img3.src = "aliens-03.png";
            img4.src = "cow-dancing.gif";
        }

    }
}