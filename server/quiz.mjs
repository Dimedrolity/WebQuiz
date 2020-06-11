export default class Quiz {
    constructor(question, variants, rightVariantIndex, image) {
        this.question = question;
        this.variants = variants;
        this.rightVariantIndex = rightVariantIndex;
        this.image = image;
    }
}