const image1=document.getElementById('my-image');
//Range variabels 
const range1=document.getElementById('my-range');
const range2=document.getElementById('my-range2');
const range3=document.getElementById('my-range3');
const range4=document.getElementById('my-range4');
const range5=document.getElementById('my-range5');
const range6=document.getElementById('my-range6');
const range7=document.getElementById('my-range7');
const range8=document.getElementById('my-range8');

const resetvalue=0

range1.addEventListener('input', function() {
    //rest value for all
    range2.value=resetvalue;
    range3.value=resetvalue;
    range4.value=resetvalue;
    range5.value=resetvalue;
    range6.value=resetvalue;
    range7.value=resetvalue;
    range8.value=resetvalue;

    if (this.value == 1) {
        image1.src = '/asset/2.jpg';
    } else if (this.value == -1) {
        image1.src = '/asset/3.jpg';
    } else if(this.value == 0){
        image1.src = '/asset/1.jpg';
    }
});
// second rangeg value
range2.addEventListener('input',function(){
    //reset value
    range1.value=resetvalue;
    range3.value=resetvalue;
    range4.value=resetvalue;
    range5.value=resetvalue;
    range6.value=resetvalue;
    range7.value=resetvalue;
    range8.value=resetvalue;

    if (this.value == 1) {
        image1.src = '/asset/4.jpg';
    } else if (this.value == -1) {
        image1.src = '/asset/5.jpg';
    } else if(this.value == 0){
        image1.src = '/asset/1.jpg';
    }
});
//Third Range value
range3.addEventListener('input', function() {
    //reset value
    range1.value=resetvalue;
    range2.value=resetvalue;
    range4.value=resetvalue;
    range5.value=resetvalue;
    range6.value=resetvalue;
    range7.value=resetvalue;
    range8.value=resetvalue;

    if (this.value == 1) {
        image1.src = '/asset/6.jpg';
    } else if (this.value == -1) {
        image1.src = '/asset/7.jpg';
    } else if(this.value == 0){
        image1.src = '/asset/1.jpg';
    }
});
//fourth range value
range4.addEventListener('input', function() {

    range1.value=resetvalue;
    range2.value=resetvalue;
    range3.value=resetvalue;
    range5.value=resetvalue;
    range6.value=resetvalue;
    range7.value=resetvalue;
    range8.value=resetvalue;

    if (this.value == 1) {
        image1.src = '/asset/8.jpg';
    } else if (this.value == -1) {
        image1.src = '/asset/9.jpg';
    } else if(this.value == 0){
        image1.src = '/asset/1.jpg';
    }
});
//fifth range value
range5.addEventListener('input', function() {

    range1.value=resetvalue;
    range2.value=resetvalue;
    range3.value=resetvalue;
    range4.value=resetvalue;
    range6.value=resetvalue;
    range7.value=resetvalue;
    range8.value=resetvalue;
    
    if (this.value == 1) {
        image1.src = '/asset/10.jpg';
    } else if (this.value == -1) {
        image1.src = '/asset/11.jpg';
    } else if(this.value == 0){
        image1.src = '/asset/1.jpg';
    }
});
//sixth range value
range6.addEventListener('input', function() {

    range1.value=resetvalue;
    range2.value=resetvalue;
    range3.value=resetvalue;
    range4.value=resetvalue;
    range5.value=resetvalue;
    range7.value=resetvalue;
    range8.value=resetvalue;

    if (this.value == 1) {
        image1.src = '/asset/12.jpg';
    } else if (this.value == -1) {
        image1.src = '/asset/13.jpg';
    } else if(this.value == 0){
        image1.src = '/asset/1.jpg';
    }
});
//seventh range value
range7.addEventListener('input', function() {

    range1.value=resetvalue;
    range2.value=resetvalue;
    range3.value=resetvalue;
    range4.value=resetvalue;
    range5.value=resetvalue;
    range6.value=resetvalue;
    range8.value=resetvalue;

    if (this.value == 1) {
        image1.src = '/asset/14.jpg';
    } else if (this.value == -1) {
        image1.src = '/asset/15.jpg';
    } else if(this.value == 0){
        image1.src = '/asset/1.jpg';
    }
});
//eight range value
range8.addEventListener('input', function() {

    range1.value=resetvalue;
    range2.value=resetvalue;
    range3.value=resetvalue;
    range4.value=resetvalue;
    range5.value=resetvalue;
    range6.value=resetvalue;
    range7.value=resetvalue;

    if (this.value == 1) {
        image1.src = '/asset/12.jpg';
    } else if (this.value == -1) {
        image1.src = '/asset/16.jpg';
    } else if(this.value == 0){
        image1.src = '/asset/1.jpg';
    }
});
