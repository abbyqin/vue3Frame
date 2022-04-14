import ArticleInfo from './ArticleInfo'

export default interface ModuleInfo{
  creator:string,
  data:{
      showNum:number,
      articleList: ArticleInfo[],
      displayNum:number,
      articleCount:number,
      newsTimeDisplay:number
  },
  isPushToExpert:number,
  display:number,
  isFold:number,
  updateTime:string,
  title:string,
  type:string,
  specialId:string,
  updater:string,
  sequence:number,
  createTime:string,
  id:string
}