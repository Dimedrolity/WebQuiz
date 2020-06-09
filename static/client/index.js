async function getQuizzes(url) {
   const response = await fetch(url);

   if (response.ok) {

      let quizzes = await response.json();
      console.log(quizzes);
      return quizzes;
   } else {
      alert("Ошибка HTTP: " + response.status);
   }
}



async function createQuizzes() {
   const quizzesFromServer = await getQuizzes('http://localhost:5002/api/get-quizzes');

   const quizzesElement = document.querySelector('.quizzes');

   const quizElement = document.querySelector('.quiz');

   const variantElement = document.querySelector('.quiz .variant');
   const variantElementCopy = variantElement.cloneNode(true);
   variantElement.remove();

   const variantLabelElement = document.querySelector('.quiz .variant-label');
   const variantLabelElementCopy = variantLabelElement.cloneNode(true);
   variantLabelElement.remove();


   let quizCounter = 0;

   for (const quiz of quizzesFromServer) {
      const quizElementCopy = quizElement.cloneNode(true);

      const quizImage = quizElementCopy.querySelector('.image');
      quizImage.src = quiz.image;

      const quizQuestion = quizElementCopy.querySelector('.question');
      quizQuestion.textContent = quiz.question;

      const variantsElement = quizElementCopy.querySelector('.variants');


      for (const variant of quiz.variants) {
         const quizVariantCopy = variantElementCopy.cloneNode(true);
         const quizVariantLabelCopy = variantLabelElementCopy.cloneNode(true);

         quizVariantCopy.setAttribute('name', quizCounter);

         quizVariantLabelCopy.appendChild(quizVariantCopy);
         const variantText = document.createElement('span');
         variantText.textContent = ' ' + variant;
         quizVariantLabelCopy.appendChild(variantText);

         variantsElement.appendChild(quizVariantLabelCopy);

      }

      quizElementCopy.querySelector('.quiz-text').appendChild(variantsElement);

      quizzesElement.appendChild(quizElementCopy);

      quizCounter++;
   }


   quizElement.remove();

}

createQuizzes();