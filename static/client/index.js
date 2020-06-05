async function getQuizes(url){
   const response = await fetch(url);

   if (response.ok) { 
   
      let quizes = await response.json();
      console.log(quizes);
      return quizes;
   } else {
      alert("Ошибка HTTP: " + response.status);
   }
}



async function createQuizes(){
   const quizes= await getQuizes('http://localhost:5002/get-quizes');

   const quizElement=document.querySelector('.quiz');

   const quizesElement=document.querySelector('.quizes');

   const variantElement=document.querySelector('.quiz .variant');
   const variantElementCopy=variantElement.cloneNode(true);
   variantElement.remove();

   const variantLabelElement=document.querySelector('.quiz .variant-label');
   const varianLabelElementCopy=variantLabelElement.cloneNode(true);
   variantLabelElement.remove();


   let quizCounter=0;
   
   for(const quiz of quizes){
      const quizElementCopy=quizElement.cloneNode(true);
      
      const quizImage=quizElementCopy.querySelector('.image');
      quizImage.src=quiz.image;
   
      const quizQuestion=quizElementCopy.querySelector('.question');
      quizQuestion.textContent=quiz.question;



      for(const variant of quiz.variants){
         const quizVariantCopy=variantElementCopy.cloneNode(true);
         const quizVariantLabelCopy=varianLabelElementCopy.cloneNode(true);

         console.log(quizVariantCopy);
         quizVariantCopy.setAttribute('name', quizCounter);
        
         quizVariantLabelCopy.textContent=variant;

         quizElementCopy.appendChild(quizVariantCopy);
         quizElementCopy.appendChild(quizVariantLabelCopy);
         console.log(quizVariantCopy);

      }
      

      


      quizesElement.appendChild(quizElementCopy);

      quizCounter++;
   }
   

   quizElement.remove();

}

createQuizes();