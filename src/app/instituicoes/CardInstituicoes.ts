export class CardInstituicoes implements CardInstituicoes {
    title: string;
    img: string;
    subTitle: string;
    text: string;
    link: string;
    constructor(title: string, imagemUrl: string, subTitle: string, longText: string, linkUrl: string) {
        this.title = title;
        this.img = imagemUrl;
        this.subTitle = subTitle;
        this.text = longText;
        this.link = linkUrl;
    }
}