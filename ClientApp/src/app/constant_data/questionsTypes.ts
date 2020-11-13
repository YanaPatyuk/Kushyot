export class QuestionsTypes {
    static subjectList = [
        {id:0, name:'Cartoons'},
        {id:1, name:'Personal'},
        {id:2, name:'Tattoos'},
        {id:3, name:'Self Care'},
        {id:4, name:'ChildHood'},
        {id:5, name:'Life Style'},
        {id:6, name:'Abrode'},
        {id:7, name:'Sex'},
        {id:8, name:'Family'},
        {id:9, name:'Sociael Media'},
        {id:10, name:'Life'},
        {id:11, name:'Sport'},
        {id:12, name:'Annoing'},
        {id:13, name:'Gaming'},
        {id:14, name:'Internet'},
        {id:15, name:'Anime'},
        {id:16, name:'Dreams'},
        {id:17, name:'Music'},
        {id:18, name:'Harry Potter'},
        {id:19, name:'TV'},
        {id:20, name:'Love'},
        {id:21, name:'Army'},
        {id:22, name:'politics'},
        {id:23, name:'Nature'},
        {id:24, name:'Technology'},
        {id:25, name:'Other'},
        {id:26, name:'Disney'},
        {id:27, name:'School'},
        {id:28, name:'UFO'},
        {id:29, name:'Habbits'},
        {id:30, name:'Food'},
        {id:31, name:'Career'},
        {id:32, name:'Books'},
        {id:33, name:'Religion'},
        {id:34, name:'Hobbies'},
        {id:35, name:'Medicine'},
        {id:36, name:'Economy'},
        {id:37, name:'Movies'},
        {id:38, name:'Money'},
        {id:39, name:'Travel'}
      ];
      static formatsList = [
        {id:0, name:'At Work'},
        {id:1, name:'Would you rather'},
        {id:2, name:'Family Dinner'},
        {id:3, name:'Deep Questions'},
        {id:4, name:'Events'},
        {id:5, name:'Never Have I Ever'},
        {id:6, name:'Self Introductio'},
        {id:7, name:'Dating'},
        {id:8, name:'Friends'}];

    /**
     *
     */
    constructor() {    }

    static getFotmatList() {return this.formatsList;}
    static getSubjectList(){ return this.subjectList;}
}