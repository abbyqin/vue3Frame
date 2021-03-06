export interface image{
  height:number,
  kbs:string,
  url:string,
  width:number
}

export default interface ArticleInfo {
  redirectUrl: string,
  redirectCrowdId: string,
  keywords: string,
  commentUrl: string,
  selectedPoolTags:string,
  comefrom:string,
  source:string,
  type:string,
  id:string,
  base62Id:string,
  notShowDislikeReason:number,
  editorName:string,
  thumbnail:string,
  croppedRegion:string,
  cpName:string,
  articleTagColor:10,
  title2:string,
  expireTime:string,
  fileSize:string,
  videoPlayUrl1M:string,
  skey:string,
  guid:string,
  page:0,
  multiExposure:0,
  dataSource:string,
  status:1,
  wemediaEAccountId:string,
  gif:string,
  hasSummary:0,
  searchPath:string,
  title:string,
  updater:string,
  videoCount:number,
  duration:string,
  fileSize1M:string,
  posterUrl:string,
  top:number,
  cardPlugin:string,
  aspect:string,
  extentData:{
    thumbnails:{
      image: image[],
      image2: image[],
    }
  },
  simId:string,
  clientStyle:string,
  algorithmCateData:string,
  summary:string,
  newsTime:string,
  audioPlayUrl:string,
  imageTotalCount:number,
  miniVideoPoster:string,
  url:string,
  videoPlayUrl:string,
  isOriginal:number,
  notShield:number,
  thumbnailsCount:number,
  wemediaEArticleId:string,
  thumbnails:{
      image: image[],
      image2: []
  },
  oneCategoryName: string
}